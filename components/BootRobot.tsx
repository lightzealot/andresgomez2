'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function BootRobot() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.2, 8.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const robot = new THREE.Group();
    scene.add(robot);

    const shell = new THREE.MeshStandardMaterial({ color: 0x202124, roughness: 0.28, metalness: 0.72 });
    const edge = new THREE.MeshStandardMaterial({ color: 0xbfc3c7, roughness: 0.34, metalness: 0.62 });
    const glow = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const head = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.35, 1.2, 4, 4, 4), shell);
    head.position.y = 1.45;
    robot.add(head);

    const face = new THREE.Mesh(new THREE.BoxGeometry(1.48, 0.72, 0.08), edge);
    face.position.set(0, 1.45, 0.635);
    robot.add(face);

    [-0.43, 0.43].forEach(x => {
      const eye = new THREE.Mesh(new THREE.CircleGeometry(0.11, 24), glow);
      eye.position.set(x, 1.52, 0.682);
      robot.add(eye);
    });

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.65, 12), edge);
    antenna.position.set(0.45, 2.42, 0);
    antenna.rotation.z = -0.18;
    robot.add(antenna);
    const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), glow);
    antennaTip.position.set(0.51, 2.75, 0);
    robot.add(antennaTip);

    const body = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.15, 1.15, 4, 4, 4), shell);
    body.position.y = -0.55;
    robot.add(body);
    const chest = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.72, 0.09), edge);
    chest.position.set(0, -0.38, 0.62);
    robot.add(chest);

    const makeLimb = (x: number, y: number, height: number) => {
      const limb = new THREE.Mesh(new THREE.CapsuleGeometry(0.25, height, 6, 14), edge);
      limb.position.set(x, y, 0);
      return limb;
    };
    robot.add(makeLimb(-1.48, -0.55, 1.25), makeLimb(1.48, -0.55, 1.25));
    robot.add(makeLimb(-0.66, -2.2, 1.15), makeLimb(0.66, -2.2, 1.15));

    const floor = new THREE.GridHelper(12, 24, 0x555555, 0x222222);
    floor.position.y = -3.05;
    scene.add(floor);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x111111, 2.2));
    const rim = new THREE.DirectionalLight(0xffffff, 3.6);
    rim.position.set(3, 4, 5);
    scene.add(rim);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let frame = 0;

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    const render = () => {
      const t = clock.getElapsedTime();
      if (!reducedMotion) {
        robot.rotation.y = Math.sin(t * 0.42) * 0.34;
        robot.position.y = Math.sin(t * 0.9) * 0.07;
        antennaTip.scale.setScalar(0.88 + Math.sin(t * 3) * 0.12);
      } else robot.rotation.y = -0.18;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach(material => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="boot-robot" ref={mountRef} aria-hidden="true" />;
}
