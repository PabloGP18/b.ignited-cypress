class ProductPage {
  static addToBasketButton = '[data-test="add-to-basket"]'
  static cartQuantity = '[data-test="basket-button-quantity"]'
  static productList = '.product-item--row'

  static verifyURL(productName) {
    cy.url().should('include', productName)
  }

  static selectProduct(index = 1) {
    cy.get(this.productList).eq(index).find(this.addToBasketButton).click()
  }

  static verifyProductAddedToCart(expectedCount) {
    cy.get(this.cartQuantity).should('contain', expectedCount)
  }

  static scrollToTheTop() {
    cy.scrollTo('top')
  }
}

export default ProductPage
