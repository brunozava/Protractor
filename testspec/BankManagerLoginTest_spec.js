var base_page = require('../pages/BasePage.js')

describe('Bank Manager Login Test', function () {

    var home_page = require('../pages/HomePage.js')
    var manager_page_details = require('../pages/ManagerPageDetails.js')
    it('Login as bank manager', function () {

        base_page.navigateToURL('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        home_page.loginAsbankManager();
        title = base_page.getPageTitle();
        expect(title).toEqual('Protractor practice website - Banking App');
    });

    it('Adding a new Customer', function () {
        manager_page_details.addCustomer('Bruno', 'Zava', '000');
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (text) {
            console.log(text);
        })
        alertDialog.accept();

        browser.sleep(2000);
    });

    it('Opening a new account', function () {
        manager_page_details.openAccount();
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (text) {
            console.log(text);
        })
        alertDialog.accept();

        browser.sleep(2000);
    });

    it('Verifying customer existence', function () {

        manager_page_details.verifyCustomerExistence('hermoine');
        var firstName = element(by.repeater('cust in Customers').row(0).column('cust.fName'));

        firstName.getText().then(function (text) {
            console.log(text);
        });

        expect(firstName.getText()).toEqual('Hermoine');
        browser.sleep(2000);
    });

});