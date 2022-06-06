/// <reference types="cypress" />

class homeToAcPage {
  goToHome() {
    const homeLink = cy.get('#li1 > .tabLink');
    homeLink.click();
    return this;
  }

  goToAccountCreation() {
    cy.visit(
      'https://alarmadmin.test-us.adcinternal.com/Support/CustomerCommitmentCreation.aspx'
    );
  }

  clickOnCreateCustomer() {
    const createCustomerLink = cy.get(':nth-child(1) > a > .option-card');
    createCustomerLink.click();
    return this;
  }

  clickOnActivateCommitment() {
    const activateCommitment = cy.get(':nth-child(2) > a > .option-card');
    activateCommitment.click();
    return this;
  }

  clickOnCreateCommitment() {
    const createCommitment = cy.get(':nth-child(3) > a > .option-card');
    createCommitment.click();
    return this;
  }
}

export default homeToAcPage;

// user assertions, and use reliable paths.
