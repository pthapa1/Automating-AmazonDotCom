/// <reference types="cypress" />

class LoginPage {
  visit() {
    cy.visit('https://alarmadmin.test-us.adcinternal.com/');
  }

  fillEmail(value) {
    const emailField = cy.get('[id="txtUsername"]');
    emailField.should('be.visible');
    emailField.clear();
    emailField.type(value);
    return this;
  }

  fillPassword(value) {
    const passwordField = cy.get('[id=txtPassword]');
    passwordField.should('be.visible');
    passwordField.clear();
    passwordField.type(value, { log: false });
    return this;
  }

  submit() {
    const submitButton = cy.get('#butLogin');
    submitButton.should('be.visible');
    submitButton.click();

    return this;
  }
}

export default LoginPage;
