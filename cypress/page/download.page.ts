class DownloadPage {

    private textArea: string;
    private generateFileButton: string;
    private downloadButton: string;

    public constructor(){
        this.textArea = '#textbox'
        this.generateFileButton = '#createTxt'
        this.downloadButton = '#link-to-download'
    }

    public visitPage(){
        cy.visit('http://demo.automationtesting.in/FileDownload.html')
    }

    public generateData(text: string){
        cy.get(this.textArea).type(text)
        cy.get(this.generateFileButton).click()
    }

    public downloadTextFile(){
        cy.get(this.downloadButton).click()
    }

    public verifyDownload(text: string){
        cy.readFile('cypress/downloads/info.txt').should('eq', text)
    }
}

export {DownloadPage}
