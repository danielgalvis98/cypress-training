class ProductAddedModalPage {
  private proccedCheckoutButton: string;

  constructor () {
    this.proccedCheckoutButton = '[style*="display: block;"] .button-container > a';
  }

  public proccedToCheckout(){
    cy.get(this.proccedCheckoutButton).click();
  }
}

export { ProductAddedModalPage }
