class ProductListPage{
    private addToCartButton: string;

    constructor(){
        this.addToCartButton = "a[title='Add to cart']";
    }

    public addShirtToCart(){
        cy.get(this.addToCartButton).click();
    }
}

export { ProductListPage }
