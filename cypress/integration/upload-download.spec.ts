import { DownloadPage, UploadPage } from "../page";

describe("The user navigates to the upload page", () => {

    const uploadPage = new UploadPage();

    it("shoould be able to upload a file", () => {
        const fileName = "pablo.jpg"
        uploadPage.visitPage()

        uploadPage.uploadFile(fileName)

        uploadPage.verifyTitle(fileName)
    });
});

describe("The user navigates to the download page", () => {

    const downloadPage = new DownloadPage();

    it("should be able to download a file", () => {
        const textContent = "This is a test text";
        downloadPage.visitPage()

        downloadPage.generateData(textContent)
        downloadPage.downloadTextFile()

        downloadPage.verifyDownload(textContent)
    });
});
