const { Builder, By, Key, until } = require('selenium-webdriver');
const { getChromeDriver } = require('../seleniumSetup'); // Path to your setup file

(async function loginFunctionality() {
  const driver = getChromeDriver();
    
    // go to wikipedia main page
    await driver.get('https://en.wikipedia.org/wiki/Main_Page');

    // locate and click the "Log in" button
    await driver.findElement(By.css('a[title="You\'re encouraged to log in; however, it\'s not mandatory. [alt-shift-o]"][accesskey="o"]')).click();

    // declaring a valid username
    let userName = 'AKtest24dec';

    // locate and fill the username and password
    await driver.findElement(By.id("wpName1")).sendKeys(userName);
    await driver.findElement(By.id("wpPassword1")).sendKeys("Tutero@321");

    // locate and click on the login button
    await driver.findElement(By.id("wpLoginAttempt")).click();

    // Locate the userName element by its class and title attributes
    let userNameElement = await driver.findElement(
    By.css('a[class="new"][title="Your homepage (page does not exist) [alt-shift-.]"]'));

    // Retrieve the username text from the element
    let userNameText = await userNameElement.findElement(By.tagName('span')).getText();

    // Verify wheather the username is correct or not
    if (userName == userNameText){
        console.log('Test Passed, Username:', userNameText , 'is correct');} 
    
    else {
        console.log('Test Fail');}

    // close the browser
    await driver.quit();
})();
