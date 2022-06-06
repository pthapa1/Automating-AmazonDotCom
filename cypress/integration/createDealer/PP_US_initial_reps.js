/// <reference types="Cypress" />

// New Dealer with initial reps from partner portal for [ US and Canada ]
// DONE
// Change all the values with **** below. and comment out the ones you don't need.
// Implemented window() for page load.

describe('create US dealer with initial reps', () => {
  before(() => {
    cy.fixture('loginInfo').then((loginInfo) => {
      cy.loginPP(loginInfo.d1_username, loginInfo.d1_password);
    });
  });

  it('Creating Dealer From PP', () => {
    // Click on A* and Click on Create Dealer page
    cy.get('.adc-logo').click(); // Click on A*
    cy.get(
      '#table5 > tbody > :nth-child(2) > :nth-child(1) > :nth-child(2) > a'
    ).click(); // Click on Create Dealer Page
    // verify the URL
    cy.url().should('include', '/ManageDealer/CreateDealer.aspx');

    // General Information Card.
    cy.window().then((w) => (w.beforeReload = true));
    cy.window().should('have.prop', 'beforeReload', true);
    cy.get('#ctl00_phBody_ddlAff').select('1'); // 1 = Alarm - DTC
    cy.window().should('not.have.prop', 'beforeReload');
    // Network Region*
    cy.get('#ctl00_phBody_ddlNetworkRegion').select('3'); // lu_network_region [3 = US + Canada]

    cy.get('#ctl00_phBody_txtContactUs').type('pthapa@alarm.com'); // Contact Us Email

    // Company Info
    cy.fixture('dealerInfo').then((dealerInfo) => {
      cy.get('#ctl00_phBody_txtComName').type(dealerInfo.dealer_name);
    });

    cy.window().then((w) => {
      w.beforeReload = true;
    });
    cy.window().should('have.prop', 'beforeReload', true);
    cy.get('#ctl00_phBody_ucAddress_company_ddlCountry').select('USA'); // Select Country then Page Reload *********************************************
    cy.window().should('not.have.prop', 'beforeReload');
    cy.get('#ctl00_phBody_ucAddress_company_txtStreet1')
      .as('street')
      .type('8281 Greensboro Drive')
      .tab()
      .tab()
      .type('Tysons Corner');

    cy.window().then((w) => (w.beforeReload = true));
    cy.window().should('have.prop', 'beforeReload', true);
    cy.get('#ctl00_phBody_ucAddress_company_ddlState').select('Virginia');
    cy.window().should('not.have.prop', 'beforeReload');
    // Select state and wait for page re-load

    cy.get('#ctl00_phBody_ucAddress_company_txtZip').type('22102'); //zip code.

    // activate this if Internal Dealer
    // cy.get('#ctl00_phBody_chkInternal').click();

    // Dealer Administrator
    cy.window().then((w) => (w.beforeReload = true));
    cy.window().should('have.prop', 'beforeReload', true);
    // Use Company Address:
    cy.get('.view-content > :nth-child(2) > .dlr-checkbox > label').click();
    cy.window().should('not.have.prop', 'beforeReload');
    //after Reload
    cy.fixture('dealerInfo').then((dealerInfo) => {
      cy.get('#ctl00_phBody_txtDCFName')
        .type('Pratik')
        .tab()
        .type('Thapa')
        .tab()
        .type('8773894033')
        .tab()
        .type('pthapa@alarm.com')
        .tab()
        .type(dealerInfo.primary_login); // login name **********************************************************
    });

    // Company Owner Contact
    cy.get(':nth-child(8) > .view-header').trigger('mouseover').click();
    cy.get('#divCompanyOwnerContactInfo').should(
      'have.attr',
      'style',
      'display: block;'
    );
    // same as admin
    cy.get(
      '#divCompanyOwnerContactInfo > :nth-child(1) > .dlr-checkbox > label'
    ).click();
    cy.scrollTo('bottom');

    // Support Contact
    cy.get(':nth-child(9) > .view-header').trigger('mouseover').click();
    cy.get('#divSupportContactInfo').should(
      'have.attr',
      'style',
      'display: block;'
    ); // wait until it expands
    // support contact details
    cy.get('#ctl00_phBody_txtSCFName').type('Pratik');
    cy.get('#ctl00_phBody_txtSCLName').type('Support');
    cy.get('#ctl00_phBody_UcSCPhone_txtPhone').type('8773894033');
    cy.get('#ctl00_phBody_txtSCEmail').type('pthapa@alarm.com');

    cy.fixture('dealerInfo').then((dealerInfo) => {
      cy.get('#ctl00_phBody_txtSCLogin').type(dealerInfo.dealer_support);
    });

    // Billing Contact
    cy.get(':nth-child(10) > .view-header').trigger('mouseover').click();
    cy.get('#divBillingContactInfo').should(
      'have.attr',
      'style',
      'display: block;'
    );
    // Billing Details.
    cy.get('#ctl00_phBody_txtBCFName').type('Pratik');
    cy.get('#ctl00_phBody_txtBCLName').type('Billing');

    cy.window().then((w) => {
      w.beforeReload = true;
    });
    cy.window().should('have.prop', 'beforeReload', true);
    cy.get('#ctl00_phBody_ucAddress_BC_ddlCountry').select('USA');
    cy.window().should('not.have.prop', 'beforeReload');

    // expand the window again
    cy.get(':nth-child(10) > .view-header').trigger('mouseover').click();
    cy.get('#divBillingContactInfo').should(
      'have.attr',
      'style',
      'display: block;'
    );
    cy.get('#ctl00_phBody_ucAddress_BC_txtStreet1').type('8281 Greensboro Dr');
    cy.get('#ctl00_phBody_ucAddress_BC_txtCity').type('Tysons');

    // select state and wait for reload.
    cy.window().then((w) => {
      w.beforeReload = true;
    });
    cy.window().should('have.prop', 'beforeReload', true);
    cy.get('#ctl00_phBody_ucAddress_BC_ddlState').select('Virginia');
    cy.window().should('not.have.prop', 'beforeReload');

    // Then expand the box again
    cy.get(':nth-child(10) > .view-header').trigger('mouseover').click();
    cy.get('#divBillingContactInfo').should(
      'have.attr',
      'style',
      'display: block;'
    );

    cy.get('#ctl00_phBody_ucAddress_BC_txtZip').type('22102');

    cy.get('#ctl00_phBody_txtBCEmail').type('pthapa@alarm.com');

    cy.fixture('dealerInfo').then((dealerInfo) => {
      cy.get('#ctl00_phBody_txtBCLogin').type(dealerInfo.dealer_billing);
    });

    cy.scrollTo('bottom');
    cy.get('#ctl00_phBody_ucChangeRequestModal_btnRequest').click();

    cy.scrollTo('top');
    cy.get('#ctl00_phBody_ucChangeRequestModal_submitCommentsText').type(
      'testing with cypress Bot'
    );
    cy.get('#ctl00_phBody_ucChangeRequestModal_btnChangeRequestSubmit').click();
    cy.url().should('include', '/ManageDealer/LogoBrandingNew.aspx');
    /// Dealer Creation is complete. Now, copy the link manually.
  });
});
