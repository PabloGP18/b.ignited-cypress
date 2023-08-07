class HomePage {
  static url = '/'
  static cookieButton = '#js-first-screen-accept-all-button'
  static modalWindow = '.modal__window'
  static accountButton = '.account-button'
  static accountNavLink = '.account-nav__link'
  static emailInput = '#login_email'
  static passwordInput = '#login_password'
  static searchBar = '#searchfor'
  static searchPane = '.wsp-offcanvas--scroll-pane'
  static offcanvasContainer = '.account-nav'
  static modalWindowLanguage = '.modal__window__content'
  static continueButtonLanguage = '[data-test="continue-button"]'
  static submitLoginForm = '[data-test="login-form-submit"]'
  static modalWindowClose = '[data-test="modal-window-close"]'

  static visit() {
    cy.visit(this.url)
  }

  static acceptCookies() {
    cy.get(this.modalWindow, { timeout: 50000 }).should('be.visible')
    cy.wait(2000)
    cy.get(this.cookieButton)
      .should('be.visible')
      .contains('Alles accepteren')
      .click({ waitForAnimations: true })
  }

  static loginFlow(text) {
    const email = Cypress.env('CYPRESS_EMAIL')
    const password = Cypress.env('CYPRESS_PASSWORD')

    if (!email || !password) {
      throw new Error(
        'Email or password is missing from the environment variables.'
      )
    }

    cy.get(this.accountButton).should('be.visible').click()
    cy.get(this.offcanvasContainer).should('exist').contains('a', text).click()
    cy.get(this.emailInput).should('be.visible').type(email)
    cy.get(this.passwordInput).should('be.visible').type(password)
    cy.get(this.submitLoginForm).should('be.visible').click()
    cy.get(this.modalWindowLanguage).should('be.visible')
    cy.get(this.modalWindowClose).should('be.visible').click()
    cy.url('include', 'Login')
  }

  static logoutFlow(text) {
    cy.wait(1000)
    cy.get(this.accountButton)
      .should('exist')
      .should('be.visible')
      .click({ waitForAnimations: true })
    cy.get(this.offcanvasContainer).should('exist').contains('a', text).click()
  }

  static searchProduct(productName) {
    cy.get(this.searchBar).should('exist').click()
    cy.get(this.searchPane).should('exist')
    cy.get(`${this.searchPane} ${this.searchBar}`)
      .should('be.visible')
      .clear()
      .type(`${productName}{enter}`)
  }
}

export default HomePage
