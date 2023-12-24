const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

function getChromeDriver() {
  const options = new chrome.Options();
  // Add options as needed (e.g., maximize window, set browser arguments)

  return new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}

module.exports = {
  getChromeDriver,
};
