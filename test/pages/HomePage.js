const { By } = require('selenium-webdriver')
const seleniumActions = require('../selenium/SeleniumActions')

class HomePage {

    brook = By.xpath('(//*[@class="rounded_button"])[1]')
    sparky = By.xpath('(//*[@class="rounded_button"])[1]')
    nextPage = By.xpath('//*[@class="next_page"]')
    confirmationText = By.id('notice')

    constructor(driver) {
        this.seleniumactions = new seleniumActions(driver)
    }

    async navigateToHomePage() {
        const url = 'http://puppies.herokuapp.com/'
        await this.seleniumactions.loadUrl(url)
        await this.seleniumactions.waitUntilPageTitleIsDisplayed("Sally's Puppy Adoption Agency")
    }

    async selectBrook() {
        await this.seleniumactions.click(this.brook)
    }

    async selectSparky() {
        await this.seleniumactions.click(this.sparky)
    }

    async navigateToTheNextPage() {
        await this.seleniumactions.click(this.nextPage)
    }

    async selectRandomDog() {
        const randomNumber = Math.floor(Math.random() * 4) + 1
        const randomPuppy = By.xpath('(//*[@class="rounded_button"])' + '[' + randomNumber + ']')
        await this.seleniumactions.click(randomPuppy)
    }

    async verifyConfirmationMessage() {
        return await this.seleniumactions.getInnerText(this.confirmationText)
    }
}

module.exports = HomePage
