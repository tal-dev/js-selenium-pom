const expect = require('chai').expect

const BrowserFactory = require('./selenium/BrowserFactory')
const HomePage = require('./pages/HomePage')
const PuppyPage = require('./pages/PuppyPage')
const AddProductPage = require('./pages/AddProductPage')
const CheckoutPage = require('./pages/CheckoutPage')

describe('Adopt Brooke', function() {
    this.timeout(25000)
    it('should adopt Brooke', async () => {
        let driver = await new BrowserFactory().startBrowser()
        let homepage = new HomePage(driver)
        let puppyPage = new PuppyPage(driver)
        let addProductPage = new AddProductPage(driver)
        let checkoutPage = new CheckoutPage(driver)

        try {
            await homepage.navigateToHomePage()
            await homepage.selectBrook()
            await puppyPage.adopt()
            await addProductPage.addItem('toy')
            await addProductPage.addItem('carrier')
            await addProductPage.completeTheAdoption()
            await checkoutPage.enterUserInfo()
            await checkoutPage.selectPaymentType('Check')
            await checkoutPage.placeOrder()

            let confirmationMessage = await homepage.verifyConfirmationMessage()
            expect(confirmationMessage).equal('Thank you for adopting a puppy!')
        } finally {
            await driver.quit()
        }
    })
})