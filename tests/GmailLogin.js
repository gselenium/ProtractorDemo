var Objects = require('../Objects.json');

describe('Gmail Application testing, Datadriven using Json file',function(){
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.get(Objects.baseurl);
        browser.manage().window().maximize();
    })

    it('Gmail Login test',function(){
        console.log("Navigating gmail url");
        element(by.css("#identifierId")).sendKeys(Objects.userdetails.username1);
        element(by.buttonText(Objects.locators.loginpage.next)).click();

    })

})