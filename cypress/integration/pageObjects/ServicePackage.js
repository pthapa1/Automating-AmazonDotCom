/// <reference types="cypress" />

class PackageAndAddons {
  basePackage(value) {
    cy.intercept(
      'POST',
      'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
    ).as('step6XHR');
    const basePackage = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_drpNewPackage'
    );
    basePackage.select(value);
    cy.wait('@step6XHR').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    return this;
  }
  // video Add-ons for security Account
  videoForSecurity(value) {
    cy.intercept(
      'POST',
      'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
    ).as('step6XHR');
    const videoMonitoring = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_drpVideoFeatures'
    );
    videoMonitoring.select(value);
    cy.wait('@step6XHR').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    return this;
  }
  //images
  imagesAlarms() {
    cy.intercept(
      'POST',
      'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
    ).as('step6XHR');
    const imagesAlarms = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divImageSensorAlarms > .info-checkbox > label'
    );
    imagesAlarms.click();
    cy.wait('@step6XHR').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    return this;
  }
  imagesPlus() {
    cy.intercept(
      'POST',
      'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
    ).as('step6XHR');
    const imagesPlus = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divImageSensorPlus > .info-checkbox > label'
    );
    imagesPlus.click();
    cy.wait('@step6XHR').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    return this;
  }
  // Energy Management and automation
  lightsAndThermostat() {
    cy.intercept(
      'POST',
      'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
    ).as('step6XHR');
    const lightsAndThermostat = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divZwaveEnergy > .info-checkbox > label'
    );
    lightsAndThermostat.click();
    cy.wait('@step6XHR').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    const disabledLights = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divZwaveLights > span:nth-child(1)'
    );
    disabledLights.should('have.attr', 'disabled').and('equal', 'disabled');
    const disabledThermostat = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divZwaveThermostats > span:nth-child(1)'
    );
    disabledThermostat.should('have.attr', 'disabled').and('equal', 'disabled');
    return this;
  }
  locks() {
    cy.intercept(
      'POST',
      'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
    ).as('step6XHR');
    const locks = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divZwaveShades > .info-checkbox > label'
    );
    locks.click();
    cy.wait('@step6XHR').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    return this;
  }
  // informatoin and alerts

  weatherToPanel() {
    cy.intercept(
      'POST',
      'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
    ).as('step6XHR');
    const weatherToPanel = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divWeatherToPanel > .info-checkbox > label'
    );
    weatherToPanel.click();
    cy.wait('@step6XHR').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    return this;
  }

  // Add-ons for Stand Alone Video Accounts
  doorbellCameraforSAV() {
    cy.intercept(
      'POST',
      'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
    ).as('step6XHR');
    const doorbellCamera = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divDoorbellCameras > .pro-video-addons > .info-checkbox > label'
    );
    doorbellCamera.click();
    cy.wait('@step6XHR').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    return this;
  }

  clickNext() {
    const nextBtn = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsChoosePlan_ucsNewSelectServicePlan_btnNext'
    );
    nextBtn.click();
    return this;
  }
}

export default PackageAndAddons;
