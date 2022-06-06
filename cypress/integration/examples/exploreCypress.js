/// <reference types="cypress" />

// DONE, Dealer Onboarding and checking for any errors.
describe('Dealer Creation: OnBoarding flow', () => {
  it('Start Creating Dealer', () => {
    // Visit the //ServiceProviderOnboarding/CompanyInfo
    cy.visit(
      'https://www.alarm.test-us.adcinternal.com/ServiceProviderOnboarding/CompanyInfo'
    );
    cy.url().should('contain', '/ServiceProviderOnboarding/CompanyInfo');
    // Company Info Card:

    // ************** Dealer Name: *********************************
    cy.scrollTo('top');
    cy.fixture('dealerInfo').then((dealerInfo) => {
      cy.get('#ctl00_MainContentPlaceHolder_tb_companyName').type(
        dealerInfo.dealer_name
      );
    });
    //Address:
    cy.window().then((w) => (w.beforeReload = true));
    cy.window().should('have.prop', 'beforeReload', true);
    cy.get('#ctl00_MainContentPlaceHolder_ddlCountry').select('Canada');
    cy.window().should('not.have.prop', 'beforeReload');
    cy.get('#ctl00_MainContentPlaceHolder_tb_CompanyAddress')
      .type('8281 Greensboro Drive, Suite 100')
      .tab()
      .type('Ottawa')
      .tab()
      .select('ON')
      .tab()
      .type('K1N 1G8')
      .tab()
      .tab()
      .type('6136885335');
    cy.get(
      '#ctl00_MainContentPlaceHolder_panel1 > :nth-child(1)'
    ).scrollIntoView();
    // Licensing Information
    cy.get(
      '#ctl00_MainContentPlaceHolder_rptLicenses_ctl00_txtLicenseNumber'
    ).type('1234Tax');

    //Primary Contact
    cy.get(
      '#ctl00_MainContentPlaceHolder_panel1 > :nth-child(3)'
    ).scrollIntoView();
    cy.get('#ctl00_MainContentPlaceHolder_tb_ObContactName')
      .type('Pratik')
      .tab()
      .type('Thapa')
      .tab()
      .type('pthapa@alarm.com')
      .tab()
      .type('8773894033');

    // Owner Contact -- Same as Primary
    cy.get('label').click().wait(2000);

    // ************** Login Name: -- PASSWORD *********

    cy.fixture('dealerInfo').then((dealerInfo) => {
      cy.get('#ctl00_MainContentPlaceHolder_tb_DealerSiteUserName')
        .type(dealerInfo.primary_login)
        .tab()
        .type('Pa$$@One1')
        .tab()
        .type('Pa$$@One1');
    });

    // Click Continue and SaveAndContinue
    cy.get('#ctl00_SaveContinuePlaceHolder_btnShowConfirmEmailModal').click();
    cy.get('#ctl00_SaveContinuePlaceHolder_ImageButton3').click();

    //

    // Billing Contact
    cy.get(
      '.card-billing-contact > .section-title-container > .sectionItem > label'
    )
      .click()
      .wait(1000);
    // Billing Address
    cy.get('.full-row > .check-same > label').click().wait(2000);
    // operating manager Contact
    cy.get(
      '.card-manager-contact > .section-title-container > .sectionItem > label'
    )
      .click()
      .wait(1000);
    // Sales Marketing Contact
    cy.get(
      '.card-sales-manager > .section-title-container > .sectionItem > label'
    )
      .click()
      .wait(1000);
    // Save & Continue
    cy.get('#ctl00_SaveContinuePlaceHolder_ImageButton3').click().wait(3000);

    // About Your Company - Survey
    cy.get(':nth-child(2) > .ui-multiselect').click().wait(500);
    cy.get(
      ':nth-child(2) > .ui-multiselect-menu > .ui-multiselect-checkboxes > :nth-child(10) > .ui-corner-all > span'
    )
      .click()
      .wait(1000); // web search and wait a second

    // click No - home automation before.
    cy.get(
      '#ctl00_MainContentPlaceHolder_rblInstalledSecuritySystem > tbody > :nth-child(2) > td > label'
    )
      .click()
      .wait(500);
    // click No - dealer program
    cy.get('#ctl00_MainContentPlaceHolder_rblDealerProgram_1')
      .click()
      .wait(500);
    // No for Central Station
    cy.get('#ctl00_MainContentPlaceHolder_rblMonitoredByCentralStation_1')
      .click()
      .wait(500);
    //

    cy.get('#ctl00_MainContentPlaceHolder_rblDistPartner_1')
      .wait(200)
      .click()
      .wait(500);
    // How long have you been in business - Brand New
    cy.get(':nth-child(3) > .ui-multiselect').click().wait(500);
    cy.get(
      ':nth-child(3) > .ui-multiselect-menu > .ui-multiselect-checkboxes > :nth-child(1) > .ui-corner-all > span'
    )
      .click()
      .wait(200);
    // how many customers do you create -- 10-29
    cy.get(':nth-child(5) > .ui-multiselect').click().wait(500);
    cy.get(
      ':nth-child(5) > .ui-multiselect-menu > .ui-multiselect-checkboxes > :nth-child(3) > .ui-corner-all > span'
    )
      .click()
      .wait(200);

    // how many customers do you support
    cy.get(':nth-child(7) > .ui-multiselect').click();
    cy.get(
      ':nth-child(7) > .ui-multiselect-menu > .ui-multiselect-checkboxes > :nth-child(4) > .ui-corner-all > span'
    )
      .click()
      .wait(200);
    // % residential
    cy.get('#ctl00_MainContentPlaceHolder_txtPercentageResidential')
      .type('50')
      .wait(500);

    // what industry would you consider your business
    cy.get(':nth-child(13) > .ui-multiselect').click().wait(500);
    cy.get(
      ':nth-child(13) > .ui-multiselect-menu > .ui-multiselect-checkboxes > :nth-child(2) > .ui-corner-all > span'
    ).click();
    cy.get(':nth-child(13) > .ui-multiselect').click();

    // primary service
    cy.get(':nth-child(15) > .ui-multiselect').click().wait(500);
    cy.get(
      '#aspnetForm > div.onboarding-content > div.page > div:nth-child(1) > div.card > div:nth-child(15) > div > div > ul > li:nth-child(1) > a > span:nth-child(2)'
    ).click();
    cy.get(':nth-child(15) > .ui-multiselect').click();

    // Which services are you planning to offer your customers?
    cy.get(':nth-child(17) > .ui-multiselect').click().wait(500);
    cy.get(
      ':nth-child(17) > .ui-multiselect-menu > .ui-widget-header > .ui-helper-reset > :nth-child(1) > .ui-multiselect-all > :nth-child(2)'
    ).click();
    cy.get(':nth-child(17) > .ui-multiselect').click();

    // business model?
    cy.get(':nth-child(19) > .ui-multiselect').click().wait(500);
    cy.get(
      '#ui-multiselect-ctl00_MainContentPlaceHolder_ddlBusinessModel-option-3'
    ).click();
    cy.get(':nth-child(19) > .ui-multiselect').click();

    // best time?
    cy.get(':nth-child(21) > .ui-multiselect').click().wait(500);
    cy.get(
      ':nth-child(21) > .ui-multiselect-menu > .ui-multiselect-checkboxes > :nth-child(2) > .ui-corner-all > span'
    )
      .click()
      .wait(200);

    // Save and Continue
    cy.get('#ctl00_SaveContinuePlaceHolder_btnSaveContinue').click().wait(2000);

    // Agreement and Sign
    cy.get(':nth-child(1) > td > label').click(); // Agree
    // Sign
    cy.pause();
    cy.get('#ctl00_MainContentPlaceHolder_tb_OfficerName').type('PratikThapa');
    cy.get('#ctl00_MainContentPlaceHolder_tb_OfficerTitle').type('Test');

    // next
    cy.get('#ctl00_SaveContinuePlaceHolder_ImageButton2').click();

    //
    cy.scrollTo('top');
    cy.pause();
  });

  // Now go to PP and check for the Errors.

  it('Check the Onboarding Error', () => {
    cy.fixture('loginInfo').then((loginInfo) => {
      cy.loginPP(loginInfo.d1_username, loginInfo.d1_password);
    });
    cy.get('#li6 > .tabTitle').click();
    cy.get(
      '#table6 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > span:nth-child(1) > a:nth-child(1)'
    ).click();
    cy.get('#ctl00_phBody_ucFilter_txtKeyword').type(
      'ServiceProviderOnboarding'
    );
    cy.get('#ctl00_phBody_ucFilter_btnSubmit').click();
  });
});
