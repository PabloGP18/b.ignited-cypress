import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

const PRODUCT_NAME = 'Pikachu'

const PRODUCTS = ['Squirtle', 'Charmender']

context('Adding article to cart', () => {
  beforeEach(() => {
    HomePage.visit()
    HomePage.acceptCookies()
  })

  it('should search for an article, add it to the cart, verify the product and delete it', () => {
    HomePage.searchProduct(PRODUCT_NAME)
    ProductPage.verifyURL(PRODUCT_NAME)
    ProductPage.selectProduct(3)
    CartPage.navigateToCart()
    CartPage.verifyProductInCart()
    CartPage.deleteProductInCart()
  })

  PRODUCTS.forEach((productName) => {
    it(`should search for the article ${productName}, add it to the cart, verify the product and delete it`, () => {
      HomePage.searchProduct(productName)
      ProductPage.verifyURL(productName)
      ProductPage.selectProduct(1)
      CartPage.navigateToCart()
      CartPage.verifyProductInCart()
      CartPage.deleteProductInCart()
    })
  })

  it('should be able to login, search for an article, add it to the cart, proceed to checkout, and then log out', () => {
    HomePage.loginFlow('Inloggen')
    HomePage.searchProduct(PRODUCT_NAME)
    ProductPage.verifyURL(PRODUCT_NAME)
    ProductPage.selectProduct(3)
    CartPage.navigateToCart()
    CartPage.verifyProductInCart()
    CartPage.proceedToCheckout()
    HomePage.logoutFlow('Uitloggen')
  })
})
