// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('loginPP', (userName, password) => {
  cy.visit('https://alarmadmin.test-us.adcinternal.com/');
  cy.get('#txtUsername').should('be.visible').type(userName);
  cy.get('#txtPassword').should('be.visible').type(password, { log: false });
  cy.get('#butLogin').should('be.visible').click();
});
import 'cypress-wait-until';

/**
 * Given a function with some commands that cause the page to change or even
 * just reload, this command runs the command then waits for that page load.
 *
 * Ideally this command should be used sparingly, instead preferring to use
 * matching functionality to wait for reload.
 *
 * Adapted from:
 * https://github.com/cypress-io/cypress/issues/1805#issuecomment-525482440
 */
Cypress.Commands.add('waitForPageLoadAfter', (block) => {
  // mark our window object to "know" when it gets reloaded
  cy.window().then((win) => {
    // eslint-disable-next-line no-param-reassign
    win.beforeReload = true;
  });
  // initially the new property is there
  cy.window().should('have.prop', 'beforeReload', true);

  // Run the code that triggers the page reload/change
  block();

  // after reload the property should be gone
  cy.window().should('not.have.prop', 'beforeReload');
});
