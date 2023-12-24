const { Builder, By, Key, until } = require('selenium-webdriver');
const { getChromeDriver } = require('../seleniumSetup'); // Path to your setup file

(async function searchFunctionality() {
  const driver = getChromeDriver();
    
    // go to wikipedia main page
    await driver.get('https://en.wikipedia.org/wiki/Main_Page');

    // locate the search bar and search "Australia"
    await driver.findElement(By.name('search')).sendKeys('Australia',Key.RETURN);
    
    // wait for the page title and except the title contain "Australia"
    await driver.wait(until.titleContains('Australia'));

    // print the page title
    let pageTitle = await driver.getTitle();
    console.log(pageTitle);

    // close the browser
    await driver.quit();
})();
