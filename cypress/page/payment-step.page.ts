class PaymentStepPage {
  private payByBankWireOption: string;
  private payByCheckOption: string;

  constructor () {
    this.payByBankWireOption = '#HOOK_PAYMENT a.bankwire';
    this.payByCheckOption = '#HOOK_PAYMENT a.cheque';
  }

  public payByBankwire(){
    cy.get(this.payByBankWireOption).click();
  }

  public payByCheck(){
    cy.get(this.payByCheckOption).click();
  }
}

export { PaymentStepPage }
