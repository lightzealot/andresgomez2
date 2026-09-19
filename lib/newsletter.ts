import { env } from 'cloudflare:workers';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribeResult = 'created' | 'already-subscribed';

export function normalizeEmail(value: unknown) {
  if (typeof value !== 'string') return null;
  const email = value.trim().toLowerCase();
  return email.length <= 254 && EMAIL_PATTERN.test(email) ? email : null;
}

export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const result = await env.DB.prepare(
    `INSERT OR IGNORE INTO newsletter_subscribers (email, created_at)
     VALUES (?, ?)`
  ).bind(email, new Date().toISOString()).run();

  return result.meta.changes === 0 ? 'already-subscribed' : 'created';
}
