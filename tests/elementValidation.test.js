const { Builder, By, Key, until } = require('selenium-webdriver');
const { getChromeDriver } = require('../seleniumSetup'); // Path to your setup file

(async function elementValidation() {
  const driver = getChromeDriver();
    
    // go to wikipedia main page
    await driver.get('https://en.wikipedia.org/wiki/Main_Page');

    // locate the search bar and search "India"
    await driver.findElement(By.name('search')).sendKeys('India', Key.RETURN);
    
    // wait for the page title and except the title contain "India"
    await driver.wait(until.titleContains('India'));

    // Locate the left menu items
    const historyMenu = await driver.findElement(By.id('toc-History'));
    const externalLinks = await driver.findElement(By.id('toc-External_links'));

    // Locate the right navigation panel
    const rightNavigation = await driver.findElement(By.id('right-navigation'));

    // Locate the content image
    const contentImage = await driver.findElement(By.className('mw-file-element'));

    // Validate the presence of the elements 
    if (historyMenu && externalLinks && rightNavigation && contentImage) {
        console.log('Article and elements are present.');
        // Add more validation checks as needed
      } else {
        console.error('Article and elements were not found.');
      }

    // close the browser
    await driver.quit();
})();
