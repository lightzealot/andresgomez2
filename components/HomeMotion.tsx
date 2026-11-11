'use client';

import { useEffect, type RefObject } from 'react';

/** Progressive enhancement: all content stays readable before hydration. */
export function useHomeMotion(rootRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let dispose = () => {};
    const configure = () => {
      dispose();
      if (preference.matches) return;
      const animations = new Set<Animation>();
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const index = Number(element.dataset.motionOrder || 0);
          const animation = element.animate([
            { opacity: 0, transform: 'translateY(24px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ], { duration: 650, delay: index * 85, fill: 'backwards', easing: 'cubic-bezier(.2,.7,.2,1)' });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          element.dataset.motionVisible = 'true';
          observer.unobserve(element);
        });
      }, { threshold: 0.12 });
      root.querySelectorAll<HTMLElement>('[data-motion]').forEach(element => {
        // Do not replay already revealed content when the preference changes.
        if (!element.dataset.motionVisible) observer.observe(element);
      });

      let frame = 0;
      const update = () => {
        frame = 0;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty('--read-progress', String(height > 0 ? window.scrollY / height : 0));
        const steps = root.querySelector<HTMLElement>('[data-motion-steps]');
        if (steps) {
          const rect = steps.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1, (window.innerHeight * .72 - rect.top) / rect.height));
          steps.style.setProperty('--steps-progress', String(progress));
        }
      };
      const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule);
      const resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(root);
      update();
      dispose = () => {
        observer.disconnect();
        resizeObserver.disconnect();
        animations.forEach(animation => animation.cancel());
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
        cancelAnimationFrame(frame);
        root.style.removeProperty('--read-progress');
        root.querySelector<HTMLElement>('[data-motion-steps]')?.style.removeProperty('--steps-progress');
      };
    };
    configure();
    preference.addEventListener('change', configure);
    return () => { dispose(); preference.removeEventListener('change', configure); };
  }, [rootRef]);
}
