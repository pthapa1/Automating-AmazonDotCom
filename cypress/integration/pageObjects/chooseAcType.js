/// <reference types="cypress" />

class chooseAccountType {
  securityAccount() {
    const securitySystem = cy.get('#ctl00_phBody_ucsAccountType_radSecurity');
    //securitySystem.should('contain', 'Security System');
    securitySystem.click();
    return this;
  }

  videoAccount() {
    const sav = cy.get('#ctl00_phBody_ucsAccountType_radStandalone');
    // sav.should('contain', 'Standalone (Video)');
    sav.click();
    return this;
  }

  noMonitoringStation() {
    const continueAC = cy.get('#ctl00_phBody_ucsAccountType_btnModalNext');
    continueAC.wait(1000);
  }

  clickNext() {
    const nextButton = cy.get('#ctl00_phBody_ucsAccountType_btnNext');
    nextButton.click();
    return this;
  }
}

export default chooseAccountType;
