var SelectWrapper = require('../tests/select-wrapper');
var mySelect = new SelectWrapper(by.id("userSelect"));

describe('Testing Banking Application', function(){

    it('Customer Login Test', function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage().window().maximize();
        element(by.partialButtonText('Customer')).click();
        //browser.sleep(3000);
        mySelect.selectByText("Harry Potter");
       // element(by.model("custId")).$("[value='2']").click();
    })
})
