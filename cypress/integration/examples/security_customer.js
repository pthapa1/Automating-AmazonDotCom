describe('Creating Security Customer', function () {
  it('Visit Partner Portal and Create Security Customer', function () // 1st test case  Log in to Partner Portal.
  {
    // Login to Partner Portal
    cy.visit('https://alarmadmin.test-us.adcinternal.com/');
    cy.get('#txtUsername').should('be.visible').type('testthapa');
    cy.get('#txtPassword').should('be.visible').type('BudaBudi2!');
    cy.get('#butLogin').should('be.visible').wait(2000).click();

    // visit home page and wait for 4 seconds
    cy.get('#li1 > .tabLink').click().wait(4000);

    // Click on Create Customer link and wait 1.5 seconds
    cy.get('#ctl00_phBody_ucSetupCards_rptQuickNavLinks_ctl00_lnkQuickNav')
      .click()
      .wait(1500);

    // Click on Create Customer radio button

    cy.get(':nth-child(1) > a > .option-card').click().wait(2000);

    // Select Security Account and wait a second
    cy.get(
      '#ctl00_phBody_ucsAccountType_divSelectSecurity > .borderless > label'
    )
      .click()
      .wait(1000);

    // click on Next
    cy.get('#ctl00_phBody_ucsAccountType_btnNext').click();

    // Fill customer information

    // select Property Type as Townhouse
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_ddlPropertyType'
    ).select('Townhouse');
    // Fill Personal information
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_txtFirstName'
    ).type('Pratik');
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_txtLastName'
    ).type('Thapa');
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_txtEmail'
    ).type('pthapa@alarm.com');
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_txtEmailRe'
    ).type('pthapa@alarm.com');
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_cpnCustomerInfo_ucsCustomerInfo_UcsPhone_txtPhone'
    ).type('8773894033');

    // Fill Address
  });

  // it('Navigate to Home Page', function () {
  //   cy.visit('https://alarmadmin.test-us.adcinternal.com/HomeNew.aspx').wait(
  //     4000
  //   ); // visit home page
  // });

  // it('Go to Create Customer Page', function () {
  //   cy.visit(
  //     'https://alarmadmin.test-us.adcinternal.com/Support/CustomerCommitmentCreation.aspx'
  //   ).screenshot();
  // });

  // it('Select Create Customer', function () {
  //   cy.get(
  //     ':nth-child(1) > a > .option-card > .lnkDiv > .option-block-title'
  //   ).click(); // Click on Create customer
  // });

  // it('Select Security System', function () {
  //   cy.get(
  //     '#ctl00_phBody_ucsAccountType_divSelectSecurity > .borderless > label'
  //   ).click(); // Select security System
  // });
});
