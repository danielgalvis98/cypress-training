class PaymentStepPage {
  private payByBankWireOption: string;
  private payByCheckOption: string;

  constructor () {
    this.payByBankWireOption = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a';
    this.payByCheckOption = '#HOOK_PAYMENT > div:nth-child(2) > div > p > a';
  }

  public payByBankwire(){
    cy.get(this.payByBankWireOption).click();
  }

  public payByCheck(){
    cy.get(this.payByCheckOption).click();
  }
}

export { PaymentStepPage }
