const { test, expect } = require('../fixtures/apiFixtures');

test.describe('Users', () => {
  test('GET /api/users returns paginated list', async ({ so }) => {
    const res = await so.getUsers(2);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty('data');
    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.page).toBe(2);
  });

  test('GET /api/users/:id returns single user', async ({ so }) => {
    const res = await so.getUser(2);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.id).toBe(2);
  });

  test('GET /api/users/:id returns 404 for non-existent user', async ({ so }) => {
    const res = await so.getUser(23);
    expect(res.status()).toBe(404);
  });

  test('POST /api/users creates a new user', async ({ so }) => {
    const res = await so.createUser({ name: 'morpheus', job: 'leader' });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.name).toBe('morpheus');
    expect(body.job).toBe('leader');
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });

  test('PUT /api/users/:id updates a user', async ({ so }) => {
    const res = await so.updateUser(2, { name: 'morpheus', job: 'zion resident' });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.job).toBe('zion resident');
    expect(body).toHaveProperty('updatedAt');
  });

  test('PATCH /api/users/:id partially updates a user', async ({ so }) => {
    const res = await so.patchUser(2, { job: 'counsellor' });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.job).toBe('counsellor');
    expect(body).toHaveProperty('updatedAt');
  });

  test('DELETE /api/users/:id returns 204', async ({ so }) => {
    const res = await so.deleteUser(2);
    expect(res.status()).toBe(204);
  });
});
