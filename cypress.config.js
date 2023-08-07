require('dotenv').config()

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.bol.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  env: {
    CYPRESS_EMAIL: process.env.CYPRESS_EMAIL,
    CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD
  },
  defaultCommandTimeout: 25000
})
