var HomePage = function () {

    this.loginAsCustomer = function () {
        element(by.buttonText('Customer Login')).click();
    };

    this.loginAsbankManager = function () {
        element(by.buttonText('Bank Manager Login')).click();
    };

};

module.exports = new HomePage();