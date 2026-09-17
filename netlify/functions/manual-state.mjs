import { getStore } from '@netlify/blobs';

const json = (statusCode, body) => new Response(JSON.stringify(body), {
  status: statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store'
  }
});

export default async request => {
  const store = getStore('euphoria-manual');

  if (request.method === 'GET') {
    const state = await store.get('shared-state', { type: 'json' });
    return json(200, { state: state || null });
  }

  if (request.method !== 'POST') return json(405, { error: 'method_not_allowed' });

  const length = Number(request.headers.get('content-length') || 0);
  if (length > 4_500_000) return json(413, { error: 'payload_too_large' });

  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'invalid_json' });
  }

  const expectedPin = process.env.ADMIN_PIN || '1234';
  if (String(body.pin || '') !== expectedPin) return json(401, { error: 'invalid_pin' });

  const state = body.state;
  if (!state || typeof state !== 'object') return json(400, { error: 'invalid_state' });

  const saved = {
    version: 4,
    updatedAt: new Date().toISOString(),
    edits: state.edits && typeof state.edits === 'object' ? state.edits : {},
    recipePhotos: state.recipePhotos && typeof state.recipePhotos === 'object' ? state.recipePhotos : {},
    recipeBlanks: state.recipeBlanks && typeof state.recipeBlanks === 'object' ? state.recipeBlanks : {}
  };

  await store.setJSON('shared-state', saved);
  return json(200, { ok: true, updatedAt: saved.updatedAt });
};

export const config = { path: '/api/manual-state' };
