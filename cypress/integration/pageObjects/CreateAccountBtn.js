/// <reference types="cypress" />

class CreateAccountBtn {
  clickCreate() {
    const nextBtn = cy.get('#ctl00_phBody_ucsConfirmInput_btnCreate');
    nextBtn.click();
    return this;
  }
}

export default CreateAccountBtn;
