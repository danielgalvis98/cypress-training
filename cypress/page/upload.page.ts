class UploadPage {

    private browseElement: string;
    private fileTitle: string;

    public constructor(){
        this.browseElement = '#input-4'
        this.fileTitle = 'title'
    }
    public visitPage(){
        cy.visit('http://demo.automationtesting.in/FileUpload.html');
    }

    public uploadFile(fileName: string){
        cy.get(this.browseElement).attachFile(fileName);
    }

    public verifyTitle(fileName: string){
        cy.get(`[${this.fileTitle}="${fileName}"]`).should('include.text', fileName);
    }
}

export {UploadPage}
