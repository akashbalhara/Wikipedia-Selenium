const { Builder, By, Key, until } = require('selenium-webdriver');
const { getChromeDriver } = require('../seleniumSetup'); // Path to your setup file

(async function switchLanguage() {
  const driver = getChromeDriver();
    
    // go to wikipedia main page
    await driver.get('https://en.wikipedia.org/wiki/Main_Page');

    // locate the search bar and search "Australia"
    await driver.findElement(By.name('search')).sendKeys('Australia',Key.RETURN);

    // locate the language dropdown menu
    await driver.findElement(By.id('p-lang-btn-checkbox')).click();

    // search for the language, example "Hindi"
    await driver.wait(until.elementLocated(By.css('input[placeholder="Search for a language"]'))).sendKeys('Hindi');
    
    // select Hindi from the dropdown menu
    await driver.wait(until.elementLocated(By.css('a[lang="hi"][hreflang="hi"][title="ऑस्ट्रेलिया – Hindi"]'))).click();

    // wait for the page title and except the title contain "Australia" in hindi "ऑस्ट्रेलिया"
    await driver.wait(until.titleContains('ऑस्ट्रेलिया'));

    // print the page title
    let pageTitle = await driver.getTitle();
    console.log(pageTitle);
  
    // close the browser
    await driver.quit();
})();
