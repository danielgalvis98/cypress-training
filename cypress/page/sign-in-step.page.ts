class SignInStepPage {
  private emailField: string;
  private passwordField: string;
  private signInButton: string;

  constructor () {
    this.emailField = '#email';
    this.passwordField = '#passwd';
    this.signInButton = '#SubmitLogin';
  }

  private fillCredentials(email: string, password: string) {
    cy.get(this.emailField).type("aperdomobo@gmail.com")
    cy.get(this.passwordField).type("WorkshopProtractor")
  }

  private goToAddressPage() {
      cy.get(this.signInButton).click();
  }

  public signIn(email: string, password: string){
    this.fillCredentials(email, password);
    this.goToAddressPage();
  }
}

export {SignInStepPage}
