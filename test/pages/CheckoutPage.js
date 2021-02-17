const { By } = require('selenium-webdriver')
const seleniumActions = require('../selenium/SeleniumActions')

class CheckoutPage {

    nameInput = By.id('order_name')
    addressInput = By.id('order_address')
    emailInput = By.id('order_email')
    paymentTypeDropdown = By.id("order_pay_type")
    placeOrderBtn = By.name('commit')

    constructor(driver) {
        this.seleniumactions = new seleniumActions(driver)
    }

    async enterUserInfo() {
        await this.seleniumactions.enterTextAndPressEnterKey(this.nameInput, "Tal")
        await this.seleniumactions.enterTextAndPressEnterKey(this.addressInput, "30 S Wacker Drive, Chicago, IL 60606")
        await this.seleniumactions.enterTextAndPressEnterKey(this.emailInput, "tal@gmail.com")
    }

    async selectPaymentType(value) {
        const valueSelected = By.xpath('//*[@id="order_pay_type"]/option[@value="' + value + '"]')
        await this.seleniumactions.click(this.paymentTypeDropdown)
        await this.seleniumactions.click(valueSelected)
    }

    async placeOrder() {
        await this.seleniumactions.click(this.placeOrderBtn)
    }
}

module.exports = CheckoutPage