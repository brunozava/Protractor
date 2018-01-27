var CustomerPageDetails = function () {

    this.verifyCustomerSelected = function () {
        element(by.model('custId')).element(by.css("[value='2']")).click();
        element(by.buttonText('Login')).click();
    };

    this.deposit = function (value) {
        element(by.buttonText('Deposit')).click();
        element(by.model('amount')).sendKeys(value);
        element(by.css('.btn.btn-default')).click();
    };

    this.withdraw = function (value) {
        element(by.buttonText('Withdrawl')).click();
        element(by.model('amount')).sendKeys(value);
        element(by.css('.btn.btn-default')).click();
    };



}

module.exports = new CustomerPageDetails();