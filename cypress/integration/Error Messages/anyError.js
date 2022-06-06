/// <reference types="cypress" />

// DONE, Checking for any errors caused by my dealer
describe('Check Errors', () => {
  it('Check the Onboarding Error', () => {
    cy.fixture('loginInfo').then((loginInfo) => {
      cy.loginPP(loginInfo.d1_username, loginInfo.d1_password);
    });
    cy.get('#li6 > .tabTitle').click();
    cy.get(
      '#table6 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > span:nth-child(1) > a:nth-child(1)'
    ).click();
    cy.get('#ctl00_phBody_ucFilter_chkUseSelectedRep').click();
    cy.get('#ctl00_phBody_ucFilter_btnSubmit').click();
  });
});
