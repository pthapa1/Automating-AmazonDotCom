/// <reference types="cypress" />

import AmazonWebsite from './pageObjects';

describe('Automating amazon.com', () => {
  const amazonDotCom = new AmazonWebsite();
  Cypress.on('uncaught:exception', () => {
    return false;
  });

  it('Home page loads successfully', () => {
    amazonDotCom.visit('https://www.amazon.com/');
  });

  it('Search for product', () => {
    amazonDotCom.searchProduct('Java head first');
  });

  it('View Product Details', () => {
    amazonDotCom.viewProductTitle(
      ' Head First Java, 2nd Edition ',
      '/Head-First-Java'
    );
  });
  it('Verify Buying Buttons and click on Buy Now', () => {
    amazonDotCom.verifyBuyingOptions();
  });
});
