var SelectWrapper = require('../tests/select-wrapper');
var mySelect = new SelectWrapper(by.id("userSelect"));
var locator = require('../tests/customlocators');

describe("Bank Manager Application Testing, ", function(){

    it("Bank Manager Login functionality", function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        element(by.ngClick("manager()")).click();

    })

    it("Validate add customer: ", function(){        
        element(by.ngClick("addCust()")).click();
        element(by.model("fName")).sendKeys("Govardhan");
        element(by.model("lName")).sendKeys("Karnati");
        element(by.model("postCd")).sendKeys("1100225");
        element(by.css(".btn.btn-default")).click();
        browser.sleep(2000)
        alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){
            console.log("Alert Text: "+text)
        })
        alertDialog.accept();
        browser.sleep(2000)
    })
})
