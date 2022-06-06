/// <reference types="cypress" />

class PanelInfo {
  panelNumber(value) {
    const inputBox = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsSystemInfo_txtModemSerial'
    );
    inputBox.type(value);
  }

  clickNext() {
    const nextBtn = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsSystemInfo_btnNext'
    );
    nextBtn.click();
    return this;
  }

  lowCoverageAgree() {
    const checkBox = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsSystemInfo_chkUnderstand'
    );
    checkBox.click();
    return this;
  }
}

export default PanelInfo;
