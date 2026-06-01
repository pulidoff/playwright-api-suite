const { test: base, expect } = require('@playwright/test');
const { SOManager } = require('../serviceobjects/SOManager');

const test = base.extend({
  so: async ({ request }, use) => {
    await use(new SOManager(request));
  },
});

module.exports = { test, expect };
