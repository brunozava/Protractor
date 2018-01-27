var base_page = require('../pages/BasePage.js')

describe('Customer Login Test', function () {

    var home_page = require('../pages/HomePage.js')
    var customer_page_details = require('../pages/CustomerPageDetails.js')

    it('Login as customer', function () {
        base_page.navigateToURL('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        home_page.loginAsCustomer();
        title = base_page.getPageTitle();
        expect(title).toEqual('Protractor practice website - Banking App');
    });

    it('Validating if customer is selected correctly', function () {
        customer_page_details.verifyCustomerSelected();
        expect(element(by.binding('user')).getText()).toEqual('Harry Potter');
        browser.sleep(2000);
    });

    it('Validating deposit', function () {
        customer_page_details.deposit('1000');
        element(by.binding('message')).getText().then(function (text) {
            console.log(text);
        });

        expect(element(by.binding('message')).getText()).toEqual('Deposit Successful');
        browser.sleep(2000);
    });

    it('Validating withdraw', function () {
        customer_page_details.withdraw('50');
        element(by.binding('message')).getText().then(function (text) {
            console.log(text);
        });

        expect(element(by.binding('message')).getText()).toEqual('Transaction successful');
        browser.sleep(2000);
    });

});