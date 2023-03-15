const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.{feature,features}",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", browserify.default(config));

      return config;
    },
  },
});
