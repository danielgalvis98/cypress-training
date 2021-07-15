class AddresStepPage {
  private proceedCheckoutButton: string;

  constructor () {
    this.proceedCheckoutButton = '[name="processAddress"]';
  }

  public goToShippingStep() {
    cy.get(this.proceedCheckoutButton).click();
  }
}

export { AddresStepPage }
