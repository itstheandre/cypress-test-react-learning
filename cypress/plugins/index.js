const preprocessor = require("cypress-react-unit-test/plugins/next");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);

  preprocessor(on, config);

  return config;
};
