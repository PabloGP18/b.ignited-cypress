class CartPage {
  static goToShoppingCartButton = '#top-go-to-shoppingcart-button'
  static toPayDiv = '.c-iUsMdD'
  static basketIcon = '[data-test="icon-basket"]'
  static modalWindow = '.modal__window'
  static removeItemButton = '[data-testid="remove-item"]'
  static basketButtonQuantity = '[data-test="basket-button-quantity"]'
  static modalWindowClose = '[data-test="modal-window-close"]'
  static addOnPageHeaderButtons = '.add-on-page-header__buttons'
  static proceedToCheckoutButton = '[data-testid="go-to-checkout"]'
  static orderAndPayButton = '.c-cTzGPd'
  static cancelPaymentButton = '.c-gQNgnX'
  static bolLogoHome = '.main-logo__link'

  static navigateToCart() {
    cy.get('body').then(($body) => {
      if ($body.find(this.modalWindow).length > 0) {
        cy.get(this.goToShoppingCartButton)
          .should('exist')
          .should('be.visible')
          .click()
      }
    })
  }

  static navigateToBasket() {
    cy.get(this.basketIcon).should('be.visible').dblclick()
  }

  static navigateBackToProductPage() {
    cy.get(this.modalWindowClose).should('be.visible').click()
  }

  static deleteProductInCart() {
    cy.get(this.removeItemButton).click()
  }

  static verifyProductInCart() {
    cy.get(this.basketButtonQuantity).should(
      'not.have.text',
      '0',
      'Basket should not be empty'
    )
    cy.get(this.toPayDiv).should('exist').should('be.visible')
  }

  static proceedToCheckout() {
    cy.get(this.proceedToCheckoutButton)
      .should('exist')
      .should('be.visible')
      .click()
    cy.get(this.orderAndPayButton)
      .last()
      .should('exist')
      .should('be.visible')
      .click()
    cy.url().should('include', 'payments')
    cy.get(this.cancelPaymentButton)
      .should('exist')
      .should('be.visible')
      .click()
    cy.get(this.bolLogoHome).should('exist').should('be.visible').click()
  }
}

export default CartPage
