/// <reference types="cypress" />
import LoginPage from '../../pageObjects/LoginPage';
import homeToAcPage from '../../pageObjects/PpHomeToAc';
import chooseAccountType from '../../pageObjects/chooseAcType';
import CustomerInfo from '../../pageObjects/CustomerInfo';
import PackageAndAddons from '../../pageObjects/ServicePackage';
import CreateAccountBtn from '../../pageObjects/CreateAccountBtn';

// Smoke Test case - South Africa's Video Account
describe('Account Creation SmokeTest', () => {
  it('SouthAfricaAccountCreation', () => {
    cy.fixture('loginInfo').then((LoginInfo) => {
      const initialLogin = new LoginPage();
      initialLogin.visit();

      initialLogin.fillEmail(LoginInfo.wavSouthAfricaLogin);
      initialLogin.fillPassword(LoginInfo.wavSouthAfricaPassword);
      initialLogin.submit();
    });

    const accountCreationFlow = new homeToAcPage();
    accountCreationFlow.goToHome();
    accountCreationFlow.goToAccountCreation();
    accountCreationFlow.clickOnCreateCustomer();

    const accountType = new chooseAccountType();
    accountType.videoAccount();
    accountType.clickNext();

    const customerDetails = new CustomerInfo();
    customerDetails.propertyType('Townhouse');
    customerDetails.customerFirstName('Pratik');
    customerDetails.customerLastName('Thapa');
    customerDetails.customerEmail('pthapa@alarm.com');
    customerDetails.customerPhone('+270812852963');
    customerDetails.customerCountry('South Africa');
    customerDetails.street1('8281 Greensboro Drive');
    customerDetails.city('Cape Town');
    customerDetails.state('Western Cape');
    customerDetails.zipCode('7441');
    customerDetails.clickNext();
    customerDetails.clickNextOnLoginName();

    const selectPackageAndAddOns = new PackageAndAddons();
    selectPackageAndAddOns.basePackage('179');
    selectPackageAndAddOns.doorbellCamera();
    selectPackageAndAddOns.clickNext();

    const createVideoAccount = new CreateAccountBtn();
    createVideoAccount.clickCreate();
  });
});
