/// <reference types="cypress" />

class CustomerInfo {
  propertyType(value) {
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_ddlPropertyType'
    ).select(value);
    return this;
  }

  customerFirstName(value) {
    const firstName = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_txtFirstName'
    );
    firstName.type(value);
    return this;
  }
  customerLastName(value) {
    const LastName = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_txtLastName'
    );
    LastName.type(value);
    return this;
  }
  customerEmail(value) {
    const email = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_txtEmail'
    );
    email.type(value);
    return this;
  }

  customerPhone(value) {
    const phone = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_UcsPhone_txtPhone'
    );
    phone.type(value);
    return this;
  }

  customerCountry(value) {
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_addressControl_ddlCountry'
    ).select(value);
    return this;
  }

  street1(value) {
    const street1 = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_addressControl_txtStreet1'
    );
    street1.type(value);
    return this;
  }
  street2(value) {
    const street2 = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_addressControl_txtStreet2'
    );
    street2.type(value);
    return this;
  }
  city(value) {
    const city = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_addressControl_txtCity'
    );
    city.type(value);
    return this;
  }
  state(value) {
    cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_addressControl_ddlState'
    ).select(value);
    return this;
  }
  zipCode(value) {
    const zipCode = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_addressControl_txtZip'
    );
    zipCode.type(value);
  }

  // add customer source as builder when needed
  // customerSource(value) {
  //   cy.get(
  //     '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_ucCustomerSource_ddlDealerCustomerSource'
  //   ).select('Builder');
  //   //select the builder program here
  //   return this;
  // }

  clickNext() {
    const nextBtn = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCustomerInfo_btnNext'
    );
    nextBtn.click();
    return this;
  }

  customerLogiName(value) {
    const writeCustomLoginName = cy.get(
      '#ctl00_phBody_ucCreateCustomer_ucsCreateLogin_txtLoginName'
    );
    writeCustomLoginName.type(value);
    return this;
  }

  clickNextOnLoginName() {
    cy.get('#ctl00_phBody_ucCreateCustomer_ucsCreateLogin_btnNext').click();
  }
}

export default CustomerInfo;
