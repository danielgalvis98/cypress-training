class OrderSummaryPage {
  private orderConfirmationText: string;

  constructor () {
    this.orderConfirmationText = 'p.cheque-indent > strong';
  }

  public validateTitle(){
    cy.get(this.orderConfirmationText)
    .should("have.text", "Your order on My Store is complete.")
  }
}

export { OrderSummaryPage }
