const { Builder, By, Key, until } = require('selenium-webdriver');
const { getChromeDriver } = require('../seleniumSetup'); // Path to your setup file

(async function wishList() {
  const driver = getChromeDriver();
    
    // go to wikipedia main page
    await driver.get('https://en.wikipedia.org/wiki/Main_Page');

    // locate and click the "Log in" button
    await driver.findElement(By.css('a[title="You\'re encouraged to log in; however, it\'s not mandatory. [alt-shift-o]"][accesskey="o"]')).click();

    // declaring a valid username and an article topic
    let userName = 'AKtest24dec';
    let articleTopic = 'Cricket';

    // locate and fill the username and password
    await driver.findElement(By.id("wpName1")).sendKeys(userName);
    await driver.findElement(By.id("wpPassword1")).sendKeys("Tutero@321");

    // locate and click on the login button
    await driver.findElement(By.id("wpLoginAttempt")).click();

    // locate the search bar and search articleTopic
    await driver.findElement(By.name('search')).sendKeys(articleTopic,Key.RETURN);
    
    // wait for the page title and except the title contain articleTopic
    await driver.wait(until.titleContains(articleTopic));

    // add the article to the user wishlist
    await driver.findElement(By.id('ca-watch')).click();

    // open the wishlist page and the edit wishlist table
    await driver.findElement(By.id('pt-watchlist-2')).click();
    await driver.findElement(By.id('ca-special-specialAssociatedNavigationLinks-link-1')).click();

    // search the articleTopic and open it
    await driver.findElement(By.css(`a[href="/wiki/${articleTopic}"][title="${articleTopic}"]`)).click();

    // remove the article from the user wishlist
    await driver.findElement(By.id('ca-unwatch')).click();

    // close the browser
    await driver.quit();
})();
