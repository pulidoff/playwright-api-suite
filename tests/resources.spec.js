const { test, expect } = require('../fixtures/apiFixtures');

test.describe('Resources', () => {
  test('GET /api/unknown returns list of resources', async ({ so }) => {
    const res = await so.getResources();
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty('data');
    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.data.length).toBeGreaterThan(0);
  });

  test('GET /api/unknown/:id returns single resource', async ({ so }) => {
    const res = await so.getResource(2);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.id).toBe(2);
    expect(body.data).toHaveProperty('name');
    expect(body.data).toHaveProperty('year');
    expect(body.data).toHaveProperty('color');
  });

  test('GET /api/unknown/:id returns 404 for non-existent resource', async ({ so }) => {
    const res = await so.getResource(23);
    expect(res.status()).toBe(404);
  });
});
