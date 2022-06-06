/// <reference types="cypress" />

class NoMs {
  msModal() {
    // const wait1s = cy.wait(1000);
    const popUpModal = cy.get('#ctl00_phBody_ucsAccountType_btnModalNext');
    popUpModal.click();
    return this;
  }
}
export default NoMs;
