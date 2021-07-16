import { IPersonalInformation } from "../interfaces/IPersonalInformation";

class QaFormStepPage {
    private firstName: string;
    private lastName: string
    private email: string
    private genderOptions: string
    private mobile: string
    private hobbies: string
    private currentAddress: string
    private submitButton: string
    private stateSelector: string
    private citySelector: string;

    constructor(){
        this.firstName = '#firstName'
        this.lastName = '#lastName'
        this.email = '#userEmail'
        this.genderOptions = '[name="gender"]'
        this.mobile = '#userNumber'
        this.hobbies = "#hobbiesWrapper label"
        this.currentAddress = "#currentAddress"
        this.submitButton = "#submit"
        this.stateSelector = "#state"
        this.citySelector = "#city"
    }

    private selectOptionByValue (valueToSelect: string, options: string){
        cy.get(options).filter(`[value="${valueToSelect}"]`).click({ force: true })
    }

    private selectCheckboxsByText (valuesToSelect: string[], options: string){
        valuesToSelect.forEach(value => {
            cy.get(options).contains(value).click()
        })
    }

    private selectValueFromSelector(selector: string, valueToSelect: string){
        const selectorElement = cy.get(selector)
        
        selectorElement.click()
        selectorElement.contains(valueToSelect).click()
    }

    public visitPage(){
        cy.visit('https://demoqa.com/automation-practice-form');
    }

    public fillForm (personalInformation: IPersonalInformation){
        cy.get(this.firstName).type(personalInformation.name)
        cy.get(this.lastName).type(personalInformation.lastName)
        this.selectOptionByValue(personalInformation.gender, this.genderOptions)
        this.selectCheckboxsByText(personalInformation.hobbies, this.hobbies)
        cy.get(this.email).type(personalInformation.email)
        cy.get(this.mobile).type(personalInformation.mobileNumber)
        cy.get(this.currentAddress).type(personalInformation.currentAddress)
        this.selectValueFromSelector(this.stateSelector, personalInformation.state)
        this.selectValueFromSelector(this.citySelector, personalInformation.city)
        cy.get(this.submitButton).click()
    }

}

export { QaFormStepPage }
