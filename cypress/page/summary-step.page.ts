class SummaryStepPage {
  private proccedCheckoutButton: string;

  constructor () {
    this.proccedCheckoutButton = '.cart_navigation span';
  }

  public confirmAndCheckout() {
    cy.get(this.proccedCheckoutButton).click();
  }
}

export { SummaryStepPage }
