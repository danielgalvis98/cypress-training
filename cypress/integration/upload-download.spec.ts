import { UploadPage } from "../page";

describe("The user navigates to the upload page", () => {

    const uploadPage = new UploadPage();

    it("shoould be able to upload a file", () => {
        const fileName = 'pablo.jpg'
        uploadPage.visitPage()

        uploadPage.uploadFile(fileName)

        uploadPage.verifyTitle(fileName)
    });
});
