class BankPaymentPage {
  private confirmOrderButton: string;

  constructor () {
    this.confirmOrderButton = '#cart_navigation span';
  }

  public confirmOrder(){
      cy.get(this.confirmOrderButton).click();
  }
}

export { BankPaymentPage }
