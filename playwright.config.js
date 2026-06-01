require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000,
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],
  use: {
    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      'x-api-key': process.env.REQRES_API_KEY,
    },
  },
});
