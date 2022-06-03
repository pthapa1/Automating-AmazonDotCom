/// <reference types="cypress" />

class AmazonWebsite {
  visit(value) {
    cy.visit(value);
    cy.title().should('eq', 'Amazon.com. Spend less. Smile more.');
    cy.scrollTo('bottom');

    cy.get('.navFooterCopyright > span').should(
      'have.text',
      '© 1996-2022, Amazon.com, Inc. or its affiliates'
    );
    cy.scrollTo('top');
    cy.get('#twotabsearchtextbox').should('have.value', '');
    cy.get('#twotabsearchtextbox').should('be.visible');
  }

  searchProduct(value) {
    cy.get('#twotabsearchtextbox').type(value);
    cy.wait(1000);
    cy.get(':nth-child(1) > .s-suggestion-container > .s-suggestion').click();
  }

  viewProductTitle(text, urlContains) {
    cy.get(
      '[src="https://m.media-amazon.com/images/I/61F0oIyk8eS._AC_UY218_.jpg"]'
    ).click();
    cy.url().should('include', urlContains);
    cy.get('#productTitle').should('have.text', text);
  }

  verifyBuyingOptions() {
    let addtoCartButton = cy.get('#add-to-cart-button');
    addtoCartButton.should('be.visible');
    let buyNowButton = cy.get('#buy-now-button');
    buyNowButton.should('be.visible');
    buyNowButton.click();
  }
}

export default AmazonWebsite;
