class SOManager {
  constructor(request) {
    this.request = request;
  }

  // --- Users ---
  getUsers(page = 1) {
    return this.request.get('/api/users', { params: { page } });
  }

  getUser(id) {
    return this.request.get(`/api/users/${id}`);
  }

  createUser(payload) {
    return this.request.post('/api/users', { data: payload });
  }

  updateUser(id, payload) {
    return this.request.put(`/api/users/${id}`, { data: payload });
  }

  patchUser(id, payload) {
    return this.request.patch(`/api/users/${id}`, { data: payload });
  }

  deleteUser(id) {
    return this.request.delete(`/api/users/${id}`);
  }

  // --- Auth ---
  register(payload) {
    return this.request.post('/api/register', { data: payload });
  }

  login(payload) {
    return this.request.post('/api/login', { data: payload });
  }

  // --- Resources ---
  getResources(page = 1) {
    return this.request.get('/api/unknown', { params: { page } });
  }

  getResource(id) {
    return this.request.get(`/api/unknown/${id}`);
  }
}

module.exports = { SOManager };
