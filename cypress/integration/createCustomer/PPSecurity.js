/// <reference types="cypress" />

// Security customer with Central Stattion selected.
// DONE
// also terminates the account.

describe('testing customer creation', () => {
  before(() => {
    cy.fixture('loginInfo').then((loginInfo) => {
      cy.loginPP(loginInfo.d1_username, loginInfo.d1_password);
    });
  });

  it(
    'Customer Creation',
    {
      defaultCommandTimeout: 50000,
    },
    () => {
      cy.get('#li1 > .tabLink').click(); // Go home
      cy.get(
        '#ctl00_phBody_ucSetupCards_rptQuickNavLinks_ctl00_lnkQuickNav'
      ).click(); // click on create customer link
      cy.url().should(
        'eq',
        'https://alarmadmin.test-us.adcinternal.com/Support/CustomerCommitmentCreation.aspx'
      );
      cy.pause();
      cy.get(':nth-child(1) > a > .option-card').click(); //click on create customer
      cy.url().should(
        'eq',
        'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/Step1_AccountType.aspx'
      );
      // security system should be selected by default.
      cy.get('#ctl00_phBody_ucsAccountType_radSecurity').should('be.checked');
      cy.get('#ctl00_phBody_ucsAccountType_btnNext').click(); //Click Next
      cy.url().should(
        'eq',
        'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=2'
      );
      cy.intercept(
        'POST',
        '/Support/CreateCustomer/CreateNewCustomer.aspx?step=2'
      ).as('step2XHR');
      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_ddlPropertyType'
      ).select('Townhouse');
      cy.wait('@step2XHR').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });
      // Success! Finally.
      cy.fixture('customerInfo').then((customerInfo) => {
        cy.get(
          '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_txtFirstName'
        )
          .type(customerInfo.name)
          .tab()
          .type(customerInfo.lastName)
          .tab()
          .type(customerInfo.email)
          .tab()
          .type(customerInfo.email)
          .tab()
          .type(customerInfo.phone);

        cy.get(
          '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_addressControl_txtStreet1'
        )
          .type(customerInfo.street1)
          .tab()
          .tab()
          .type(customerInfo.city)
          .tab()
          .select(customerInfo.state)
          .tab()
          .type(customerInfo.zip);
      });

      // Builder Program??? Then Enable this.

      // cy.get(
      //   '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_ucCustomerSource_ddlDealerCustomerSource'
      // ).select('Builder');

      // cy.get('.formData > .ui-multiselect').click();
      // cy.window().then((w) => (w.beforeReload = true));
      // cy.window().should('have.prop', 'beforeReload', true);
      // cy.get(
      //   '.formData > .ui-multiselect-menu > .ui-multiselect-checkboxes > :nth-child(2) > .ui-corner-all > span'
      // ).click();
      // cy.window().should('not.have.prop', 'beforeReload');

      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_btnNext'
      ).click();
      cy.url().should(
        'contain',
        '/Support/CreateCustomer/CreateNewCustomer.aspx?step=3'
      );
      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlLogin_ucsCreateLogin_btnNext',
        {
          timeout: 10000,
        }
      ).click();
      cy.url().should(
        'eq',
        'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=4'
      );
      cy.fixture('serialNumber').then((serialNumber) => {
        cy.get(
          '#ctl00_phBody_ucCreateCustomer_cpnlSysInfo_ucsSystemInfo_txtModemSerial'
        ).type(serialNumber.iq2_1);
      });
      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlSysInfo_ucsSystemInfo_btnNext'
      ).click();

      // Selecting Package and features Step 6
      cy.url().should(
        'eq',
        'https://alarmadmin.test-us.adcinternal.com/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
      );

      cy.fixture('customerInfo').then((customerInfo) => {
        cy.get(
          '#ctl00_phBody_ucCreateCustomer_cpnlServicePlan_ucsChoosePlan_ucsNewSelectServicePlan_drpNewPackage'
        )
          .select(customerInfo.package_id)
          .should('have.value', customerInfo.package_id);
      });
      // Select Video features: lu_service_plan_feature
      cy.intercept(
        'POST',
        '/Support/CreateCustomer/CreateNewCustomer.aspx?step=6'
      ).as('step6XHR');

      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlServicePlan_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_drpVideoFeatures'
      ).select('Premium Video ($7.80)');
      cy.wait('@step6XHR').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });

      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlServicePlan_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divDoorbellCameras > .pro-video-addons > .info-checkbox > label'
      ).click(); // audio for non doorbell cameras

      cy.wait('@step6XHR').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });

      // Monitoring Station card
      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlServicePlan_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divAlarmVisualVerification > .MT-inline-flex > .info-checkbox > label'
      ).click(); // Visual verification during alarms.

      // cy.wait('@step6XHR').then((interception) => {
      //   expect(interception.response.statusCode).to.eq(200);
      // });

      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlServicePlan_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divPanicButton > .MT-inline-flex > .info-checkbox > label'
      ).click(); // In app panel panic

      cy.wait('@step6XHR').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });

      // Energy Management & Automation
      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlServicePlan_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divZwaveEnergy > .info-checkbox > label'
      ).click(); // lights and thermostat bundle

      cy.wait('@step6XHR').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });

      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlServicePlan_ucsChoosePlan_ucsNewSelectServicePlan_ucsAddons_divZwaveLocks > .info-checkbox > label'
      )
        .click()
        .wait(3000); // locks

      cy.wait('@step6XHR').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });

      //click Next on package page
      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlServicePlan_ucsChoosePlan_ucsNewSelectServicePlan_btnNext'
      ).click();

      cy.url().should(
        'contain',
        '/Support/CreateCustomer/CreateNewCustomer.aspx?step=7'
      );

      // select the monitoring station.
      cy.fixture('customerInfo').then((accountDetail) => {
        cy.window().then((w) => (w.beforeReload = true));
        cy.window().should('have.prop', 'beforeReload', true);
        cy.get(
          '#ctl00_phBody_ucCreateCustomer_cpnlCS_ucsCentralStationForwarding_drpPhoneNumber'
        ).select(accountDetail.monitoring_station_name_value);
        cy.window().should('not.have.prop', 'beforeReload');
        cy.get(
          '#ctl00_phBody_ucCreateCustomer_cpnlCS_ucsCentralStationForwarding_txtCsAcctNumber'
        ).type(accountDetail.monitoring_station_account_no);
      });

      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlCS_ucsCentralStationForwarding_btnNext'
      ).click();

      // Installation Template Plan
      cy.get(
        '#ctl00_phBody_ucCreateCustomer_cpnlTemplate_ucsTemplateDownloader_btnNext'
      ).click();

      //  Fianal Review | only assert important add-ons.

      cy.get(
        '#ctl00_phBody_ucsConfirmInput_ucsCurrentServicePlan_tr2 > .formData'
      )
        .should('contain', 'In-App Panel Panic')
        .and('contain', 'Image Upload Count - 1 Image')
        .and('contain', 'Lights and Thermostat Bundle')
        .and('contain', 'Locks')
        .and('contain', 'Onboard Recording with Smart View')
        .and('contain', 'Premium Video')
        .and('contain', 'Visual Verification During Alarms');

      //Create Account.
      cy.get('#ctl00_phBody_ucsConfirmInput_btnCreate').click();

      cy.pause();
      // Terminate if Required

      // Go to Customer INFo
      cy.get('.adc-toggle-nav').click();
      cy.get(
        '#ctl00_ucCurrentRecord_ucCurrentRecordCustomer_divCurrentRecordCustomer > .current-record-nav-card > .dealer-name > .current-record-name'
      ).click();
      cy.get(
        '#ctl00_ucCurrentRecord_ucCurrentRecordCustomer_lnkbtnCustomerInfo'
      ).click();
      // Go to account management
      cy.get('[href="AccountManagement.aspx"]').click();
      //terminate account
      cy.get('[href="TerminateCustomer.aspx"] > .option-card').click();

      cy.get('.dropdown-list').click();
      cy.get('[data-list-item-value="39"] > .list-item-description').click();
      cy.get('#ctl00_phBody_cbAgree').click();
      cy.get('#ctl00_phBody_btnTerminate').click();
      //Finally terminate the account.
      cy.get('#ctl00_modalPlaceholder_btnConfirmTerminate').click();

      // Make sure the account terminated message pops up
      cy.get('.message').should('contain.text', 'terminated');
    }
  );
});
