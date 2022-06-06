/// <reference types="cypress" />
import LoginPage from '../../pageObjects/LoginPage';
import homeToAcPage from '../../pageObjects/PpHomeToAc';
import chooseAccountType from '../../pageObjects/chooseAcType';
import CustomerInfo from '../../pageObjects/CustomerInfo';
import PanelInfo from '../../pageObjects/SystemInformation';
import PackageAndAddons from '../../pageObjects/ServicePackage';
import CentralStationSelection from '../../pageObjects/CentralStation';
import CreateAccountBtn from '../../pageObjects/CreateAccountBtn';

// Smoke Test case - Argentina Security Account.
describe('Account Creation SmokeTest', () => {
  it('SouthAfricaAccountCreation', () => {
    cy.fixture('loginInfo').then((LoginInfo) => {
      const initialLogin = new LoginPage();
      initialLogin.visit();

      initialLogin.fillEmail(LoginInfo.wavArgentinaLogin);
      initialLogin.fillPassword(LoginInfo.wavArgentinaPassword);
      initialLogin.submit();
    });

    const accountCreationFlow = new homeToAcPage();
    accountCreationFlow.goToHome();
    accountCreationFlow.goToAccountCreation();
    accountCreationFlow.clickOnCreateCustomer();

    const accountType = new chooseAccountType();
    accountType.securityAccount();
    accountType.clickNext();

    const customerDetails = new CustomerInfo();
    customerDetails.propertyType('Casa adosada');
    customerDetails.customerFirstName('Pratik');
    customerDetails.customerLastName('Thapa');
    customerDetails.customerEmail('pthapa@alarm.com');
    customerDetails.customerPhone('+541157774533');
    customerDetails.customerCountry('Argentina');
    customerDetails.street1('Av. Colombia 4300');
    customerDetails.city('Buenos Aires');
    customerDetails.state('Buenos Aires');
    customerDetails.zipCode('B1824');
    customerDetails.clickNext();
    customerDetails.clickNextOnLoginName();

    cy.fixture('serialNumber').then((panelNumber) => {
      const panelDetails = new PanelInfo();
      panelDetails.panelNumber(panelNumber.iq2_1);
      panelDetails.clickNext();
      panelDetails.lowCoverageAgree();
      panelDetails.clickNext();
    });

    const selectPackageAndAddOns = new PackageAndAddons();
    selectPackageAndAddOns.basePackage('208');
    selectPackageAndAddOns.videoForSecurity('14');
    selectPackageAndAddOns.imagesPlus();
    selectPackageAndAddOns.lightsAndThermostat();
    selectPackageAndAddOns.locks();
    selectPackageAndAddOns.weatherToPanel();
    cy.wait(1000);
    selectPackageAndAddOns.clickNext();

    const selectCentralStation = new CentralStationSelection();
    selectCentralStation.never();
    cy.wait(3000);
    selectCentralStation.clickNext();
  });
  //  need to wait properly.
});
