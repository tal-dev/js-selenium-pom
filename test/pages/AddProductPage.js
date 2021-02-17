const { By } = require('selenium-webdriver')
const seleniumActions = require('../selenium/SeleniumActions')

class AddProductPage {

    completeBtn = By.xpath('//*[@value="Complete the Adoption"]')
    addAnotherPuppyBtn = By.xpath('//*[@value="Adopt Another Puppy"]')
    item1 = By.xpath('(//*[@name="collar"])[1]')
    item2 = By.xpath('(//*[@name="collar"])[2]')

    constructor(driver) {
        this.seleniumactions = new seleniumActions(driver)
    }

    async addItem(value) {
        const item = By.xpath('(//*[@id="'+ value +'"])')
        this.seleniumactions.click(item)
    }

    async completeTheAdoption() {
        await this.seleniumactions.click(this.completeBtn)
    }

    async addAnotherPuppy() {
        await this.seleniumactions.click(this.addAnotherPuppyBtn)
    }

    async addMultipleItems() {
        await this.seleniumactions.click(this.item1)
        await this.seleniumactions.click(this.item2)
    }
}

module.exports = AddProductPage
