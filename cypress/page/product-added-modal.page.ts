class ProductAddedModalPage {
  private proccedCheckoutButton: string;

  constructor () {
    this.proccedCheckoutButton = 'a[title="Proceed to checkout"]';
  }

  public proccedToCheckout(){
    cy.get(this.proccedCheckoutButton).click();
  }
}

export { ProductAddedModalPage }
