const { By } = require('selenium-webdriver')
const seleniumActions = require('../selenium/SeleniumActions')

class PuppyPage {

    adoptBtn = By.xpath('//*[@class="rounded_button"]')
    
    constructor(driver) {
        this.seleniumactions = new seleniumActions(driver)
    }

    async adopt() {
        await this.seleniumactions.click(this.adoptBtn)
    }
}

module.exports = PuppyPage