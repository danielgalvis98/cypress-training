import { IPersonalInformation } from "../interfaces/IPersonalInformation";

class FormValidationPage {
    private tableRows: string;

    constructor(){
        this.tableRows =  'table > tbody > tr'
    }

    private validateRow (rowName: string, expectedValue: string){
        cy.get(this.tableRows).filter(`:contains("${rowName}")`)
        .contains(expectedValue).should('have.text', expectedValue)
    }

    public validateForm(personalInformation: IPersonalInformation){
        this.validateRow('Student Name', `${personalInformation.name} ${personalInformation.lastName}`)
        this.validateRow('Student Email', personalInformation.email)
        this.validateRow('Gender', personalInformation.gender)
        this.validateRow('Mobile', personalInformation.mobileNumber)
        this.validateRow('Hobbies', personalInformation.hobbies.join(', '))
        this.validateRow('Address', personalInformation.currentAddress)
        this.validateRow('State and City', `${personalInformation.state} ${personalInformation.city}`)
    }
}
export { FormValidationPage }
