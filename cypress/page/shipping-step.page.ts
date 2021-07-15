class ShippingStepPage {
  private acceptTermsOfServiceCheckbox: string;
  private proceedCheckoutButton: string;

  constructor () {
    this.acceptTermsOfServiceCheckbox = '#cgv';
    this.proceedCheckoutButton = '[name="processCarrier"]';
  }

  public acceptTermsOfService() {
    cy.get(this.acceptTermsOfServiceCheckbox).click();
  }

  public goToPaymentMenu() {
    cy.get(this.proceedCheckoutButton).click();
  }
}

export { ShippingStepPage };
