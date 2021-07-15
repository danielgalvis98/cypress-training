class ProductListPage{
    private products: string;
    private addToCartButton: string;

    constructor(){
        this.products = ".product-container"
        this.addToCartButton = "a[title='Add to cart']";
    }

    public addShirtToCart(shirtName: string){
        this.findProductByName(shirtName).find(this.addToCartButton).click()
    }

    private findProductByName(productName: string){
        return cy.get(this.products).filter(`:contains(${productName})`)
    }
}

export { ProductListPage }
