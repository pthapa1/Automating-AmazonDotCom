/// <reference types="cypress" />

class CentralStationSelection {
  never() {
    const neverBtn = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_rdForwardingOptions > :nth-child(2)'
    );
    neverBtn.click();
    const selectMs = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_drpPhoneNumber'
    );
    selectMs.should('not.exist');
    // Make sure that after clickin on never, when page refreshes, it does not fail on getting the next button.
    return this;
  }

  selectReceiver(value) {
    const receiver = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_drpPhoneNumber'
    );
    receiver.select(value);
    return this;
  }

  csAccountNumber() {
    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const rndInt = randomIntFromInterval(1000, 100000);

    const enterAccountNumber = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_txtCsAcctNumber'
    );
    enterAccountNumber.type(rndInt);
    return this;
  }

  // select forwarding events
  forwardAlarms() {
    const alarms = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_rptEventGroups_ctl00_cbEventGroup'
    );
    alarms.click();
    return this;
  }
  forwardCrashAndSmash() {
    const crashAndSmash = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_rptEventGroups_ctl04_lblEventGroup'
    );
    crashAndSmash.click();
  }
  forwardPanelNotResponding() {
    const panelNotResponding = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_rptEventGroups_ctl06_lblEventGroup'
    );
    panelNotResponding.click();
    return this;
  }

  forwardArmedDisarmed() {
    const armedDisarmed = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_rptEventGroups_ctl01_cbEventGroup'
    );
    armedDisarmed.click();
    return this;
  }
  // click Next
  clickNext() {
    const nextBtn = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCentralStationForwarding_rptEventGroups_ctl01_cbEventGroup'
    );
    nextBtn.click();
    return this;
  }
}
export default CentralStationSelection;
