const expect = require('chai').expect

const BrowserFactory = require('./selenium/BrowserFactory')
const HomePage = require('./pages/HomePage')
const PuppyPage = require('./pages/PuppyPage')
const AddProductPage = require('./pages/AddProductPage')
const CheckoutPage = require('./pages/CheckoutPage')

describe('Adopt Sparky', function() {
    this.timeout(25000)
    it('should adopt Sparky', async () => {
        let driver = await new BrowserFactory().startBrowser()
        let homepage = new HomePage(driver)
        let puppyPage = new PuppyPage(driver)
        let addProductPage = new AddProductPage(driver)
        let checkoutPage = new CheckoutPage(driver)

        try {
            await homepage.navigateToHomePage()
            await homepage.navigateToTheNextPage()
            await homepage.selectSparky()
            await puppyPage.adopt()
            await addProductPage.addItem("collar")
            await addProductPage.completeTheAdoption()
            await checkoutPage.enterUserInfo()
            await checkoutPage.selectPaymentType('Credit card')
            await checkoutPage.placeOrder()

            let confirmationMessage = await homepage.verifyConfirmationMessage()
            expect(confirmationMessage).equal('Thank you for adopting a puppy!')
        } finally {
            await driver.quit()
        }
    })
})