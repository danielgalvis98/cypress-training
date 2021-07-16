import { FormValidationPage, QaFormStepPage } from "../page"

describe("the user navigates to the form page", () => {
    const fillFormPage = new QaFormStepPage();
    const formValidationPage = new FormValidationPage()

    it("the information should be the same of the form", () => {
        fillFormPage.visitPage()
        const personalInformation = {
            name: "Holmes",
            lastName: "Salazar",
            email: "hibarras@email.com",
            gender: "Male",
            mobileNumber: "3656589156",
            hobbies: ["Music", "Reading"],
            currentAddress: "Av siempreViva # 123",
            state: "Haryana",
            city: "Panipat"
        }

        fillFormPage.fillForm(personalInformation)

        formValidationPage.validateForm(personalInformation)
    });
});