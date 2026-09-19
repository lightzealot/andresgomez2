import { normalizeEmail, subscribeToNewsletter } from '@/lib/newsletter';

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Solicitud no válida.' }, { status: 400 });
  }

  const email = normalizeEmail((body as { email?: unknown })?.email);
  if (!email) {
    return Response.json({ error: 'Escribe un correo válido.' }, { status: 400 });
  }

  try {
    const status = await subscribeToNewsletter(email);
    return Response.json({ status });
  } catch {
    return Response.json({ error: 'No pudimos guardar tu correo. Inténtalo de nuevo.' }, { status: 500 });
  }
}
