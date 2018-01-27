var ManagerPageDetails = function () {

    this.addCustomer = function (firstName, lastName, postCode) {
        element(by.buttonText('Add Customer')).click();
        element(by.model('fName')).sendKeys(firstName);
        element(by.model('lName')).sendKeys(lastName);
        element(by.model('postCd')).sendKeys(postCode);
        element(by.css('div button[type=submit]')).click();
    };

    this.openAccount = function () {
        element(by.buttonText('Open Account')).click();
        element(by.model('custId')).element(by.css("[value='2']")).click();
        element(by.model('currency')).element(by.css("[value='Dollar']")).click();
        element(by.buttonText('Process')).click();
    };

    this.verifyCustomerExistence = function (customer) {
        element(by.buttonText('Customers')).click();
        element(by.model('searchCustomer')).sendKeys(customer);
    };

};

module.exports = new ManagerPageDetails();