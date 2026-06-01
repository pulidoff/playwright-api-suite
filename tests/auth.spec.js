const { test, expect } = require('../fixtures/apiFixtures');

test.describe('Auth', () => {
  test('POST /api/register with valid credentials returns token', async ({ so }) => {
    const res = await so.register({ email: 'eve.holt@reqres.in', password: 'pistol' });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('token');
  });

  test('POST /api/register without password returns 400', async ({ so }) => {
    const res = await so.register({ email: 'sydney@fife' });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toBe('Missing password');
  });

  test('POST /api/login with valid credentials returns token', async ({ so }) => {
    const res = await so.login({ email: 'eve.holt@reqres.in', password: 'cityslicka' });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty('token');
    expect(typeof body.token).toBe('string');
  });

  test('POST /api/login without password returns 400', async ({ so }) => {
    const res = await so.login({ email: 'peter@klaven' });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toBe('Missing password');
  });
});
