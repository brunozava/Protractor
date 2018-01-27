describe('Test Login',function(){

    it('Validate user credentials',function(){

        //Use it
        browser.ignoreSynchronization=true;
        browser.get('http://gmail.com');
        element(by.id('identifierId')).sendKeys('test@test.com');
    });

});