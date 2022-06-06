/// <reference types="cypress" />

it('POST', () => {
  const str = `
  <?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <Authentication xmlns="http://www.alarm.com/WebServices">
      <User>testthapa</User>
      <Password>BudaBudi2!</Password>
      <!-- <TwoFactorDeviceId>string</TwoFactorDeviceId> -->
    </Authentication>
  </soap12:Header>
  <soap12:Body>
    <CreateCustomer xmlns="http://www.alarm.com/WebServices">
      <input>
        <CustomerAccountAddress>
          <FirstName>Pratik</FirstName>
          <LastName>Thapa</LastName>
          <CompanyName>string</CompanyName>
          <Phone>8773894033</Phone>
          <Street1>2 main</Street1>
          <Street2>street </Street2>
          <City>mclean</City>
          <State>VA</State>
          <Zip>22102</Zip>
          <CountryId>USA</CountryId>
        </CustomerAccountAddress>
        <CustomerAccountEmail>pthapa@alarm.com</CustomerAccountEmail>
        <CustomerAccountPhone>8773894033</CustomerAccountPhone>
       
        <InstallationAddress>
          <Street1>8281 Greensboro Drive</Street1>
          <Street2>suite 100</Street2>
          <SubCity>Test</SubCity>
          <City>Reston</City>
          <State>Va</State>
          <Zip>20190</Zip>
          <CountryId>USA</CountryId>
        </InstallationAddress>  
        <InstallationTimeZone>Eastern</InstallationTimeZone>
       
        <PanelType>NoPanel</PanelType>
        <PanelVersion>Unknown</PanelVersion>
        <!-- <ModemSerialNumber>990009620430720</ModemSerialNumber> -->
        
        <!-- <PhoneLinePresent>true</PhoneLinePresent> -->
        <!-- <CentralStationForwardingOption>Never</CentralStationForwardingOption> -->
        <!-- <CentralStationAccountNumber>string</CentralStationAccountNumber> -->
        <!-- <CentralStationReceiverNumber>string</CentralStationReceiverNumber> -->
        <PackageId>288</PackageId>
        <!-- <AddOnFeatures>
          <AddOnFeatureEnum>TwoWayVoice</AddOnFeatureEnum>

        </AddOnFeatures>  -->
        <!-- <IgnoreLowCoverageErrors>true</IgnoreLowCoverageErrors> -->
       
        <!-- <CustomerNotifications>
          <CustomerNotificationEnum>Arming</CustomerNotificationEnum>
        
        </CustomerNotifications> -->
        <PropertyType>Townhouse</PropertyType>

        <!-- <CommunicationPathway>CellOnly</CommunicationPathway> -->
        
        <InstallType>ProfessionalInstall</InstallType>
                <DealerCustomerSourceId>3</DealerCustomerSourceId>
        <BuilderProgramId>1</BuilderProgramId>
        <!-- <DealerCustomerSourceOther>string</DealerCustomerSourceOther> -->
 
      </input>
    </CreateCustomer>
  </soap12:Body>
</soap12:Envelope>
  `;
  // cy.request(
  //   'POST',
  //   'https://alarmadmin.test-us.adcinternal.com/Webservices/CustomerManagement.asmx',
  //   str
  // );

  cy.request({
    method: 'POST',
    url: 'https://alarmadmin.test-us.adcinternal.com/Webservices/CustomerManagement.asmx',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Content-Length': 'Length',
      Host: 'alarmadmin.test-us.adcinternal.com',
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    },
  });
});
