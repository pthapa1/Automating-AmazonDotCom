/// <reference types="Cypress" />

// Dealer creation WITHOUT initial reps

describe('PP: Dealer Creation', () => {
  before(() => {
    cy.fixture('loginInfo').then((loginInfo) => {
      cy.loginPP(loginInfo.d1_username, loginInfo.d1_password);
    });
  });

  it('Start Creating Dealer', () => {
    // Go to home Page first.
    cy.get('#li1 > .tabLink').click();

    // Make sure the URL is correct
    cy.url().should('include', '/HomeNew.aspx');

    // Click on A* and Click on Create Dealer page
    cy.get('.adc-logo').click(); // Click on A*
    cy.get(
      '#table5 > tbody > :nth-child(2) > :nth-child(1) > :nth-child(2) > a'
    ).click(); // Click on Create Dealer Page

    //Start Filling the Form3

    // General Information Card.

    cy.get('#ctl00_phBody_ddlAff').select('Alarm.com - DTC').wait(6000); // Affiliate*
    cy.get('#ctl00_phBody_ddlNetworkRegion').select('US + Canada'); // Network Region*
    cy.get('#ctl00_phBody_txtContactUs').type('pthapa@alarm.com'); //contact us email

    // Company Info -- Fields change according to what country you pick.
    // For U.S. and Canada.
    cy.fixture('dealerInfo').then((dealerInfo) => {
      cy.get('#ctl00_phBody_txtComName').type(dealerInfo.dealer_name); // Company Name**************************************************
    });
    cy.get('#ctl00_phBody_ucAddress_company_ddlCountry')
      .select('USA') // Country*
      .wait(6000); // Wait for page to complete reloading
    cy.get('#ctl00_phBody_ucAddress_company_txtStreet1').type(
      '8281 Greensboro Drive'
    ); // Street
    cy.get('#ctl00_phBody_ucAddress_company_txtCity')
      .wait(4000) // wait for page to complete loading
      .click() // make sure the field has populated
      .type('Tysons'); //City*
    cy.get('#ctl00_phBody_ucAddress_company_ddlState')
      .select('Virginia')
      .wait(5000); // wait for page to refresh.

    cy.get('#ctl00_phBody_ucAddress_company_txtZip').type('22102'); // Zip*

    // Dealer Administrator
    cy.fixture('dealerInfo').then((dealerInfo) => {
      cy.get('#ctl00_phBody_chkDASame').check().wait(5000);
      cy.get('#ctl00_phBody_txtDCFName')
        .type('Pratik')
        .tab()
        .type('Thapa')
        .tab()
        .type('8773894033')
        .tab()
        .type('pthapa@alarm.com')
        .tab()
        .type(dealerInfo.primary_login); // Login Name****************************************************************
    });

    //Company Owner Contact
    cy.get(':nth-child(8) > .view-header')
      .trigger('mouseover')
      .click()
      .wait(1000); // wait for box to expand
    cy.get(
      '#divCompanyOwnerContactInfo > :nth-child(1) > .dlr-checkbox > label'
    ).click();
    // Scroll to the bottom
    cy.scrollTo('bottom');

    // Support Contact
    cy.get(':nth-child(9) > .view-header')
      .trigger('mouseover')
      .click()
      .wait(1000); // wait for the box to expand.
    cy.get(
      '#divSupportContactInfo > :nth-child(1) > .dlr-checkbox > label'
    ).click();

    // scroll to bottom
    cy.scrollTo('bottom');

    // Billing Contact
    cy.get(':nth-child(10) > .view-header')
      .trigger('mouseover')
      .click()
      .wait(1000); // wait for the box to expand
    cy.get('#divBillingContactInfo > :nth-child(1) > .dlr-checkbox > label')
      .click()
      .wait(1000);

    // scroll to bottom
    cy.scrollTo('bottom');

    // click the Create New dealer button
    cy.get('#ctl00_phBody_ucChangeRequestModal_btnRequest').click();

    //Scroll to the top
    cy.scrollTo('top');

    // Comment Box: write and submit
    cy.get('#ctl00_phBody_ucChangeRequestModal_submitCommentsText')
      .click()
      .type('test, ignore');
    cy.get('#ctl00_phBody_ucChangeRequestModal_btnChangeRequestSubmit').click();
  });
});
