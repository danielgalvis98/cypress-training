class AddresStepPage {
  private proceedCheckoutButton: string;

  constructor () {
    this.proceedCheckoutButton = '#center_column > form > p > button > span';
  }

  public goToShippingStep() {
    cy.get(this.proceedCheckoutButton).click();
  }
}

export { AddresStepPage }
