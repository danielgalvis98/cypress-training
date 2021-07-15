class SummaryStepPage {
  private proccedCheckoutButton: string;

  constructor () {
    this.proccedCheckoutButton = '#center_column [title="Proceed to checkout"]';
  }

  public confirmAndCheckout() {
    cy.get(this.proccedCheckoutButton).click();
  }
}

export { SummaryStepPage }
