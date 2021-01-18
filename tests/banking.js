const { hasUncaughtExceptionCaptureCallback } = require("process");

describe("Banking Application test", function(){
    it("Validate customer Login verification test",function(){
        browser.get("http://way2automation.com/angularjs-protractor/banking/#/login");
        element(by.buttonText('Customer Login')).click();
        browser.sleep(2000);
        //Assertions to verify Application title:
        expect(browser.getTitle()).toContain("Protractor practice");
        element.all(by.css("#userSelect option")).then(function(items){
            console.log("Total items in the dropdownbox: "+items.length);
            console.log("Printing all the item names from the dropdownbox: ");
            for(i=0;i<items.length;i++){
                items[i].getText().then(function(text){
                    console.log(text);
                })
            }
           // browser.sleep(2000);
            //element(by.model("custId")).element(by.css("[value='2']")).click();
            //second way of using css method:
            element(by.model("custId")).$("[value='2']").click();
           // browser.sleep(2000);
           element(by.buttonText('Login')).click();
           browser.sleep(2000);
        //    element(by.binding("user")).getText().then(function(text){
        //        console.log("Welcome user is ",text);
        //    })
         });
        expect(element(by.binding("user")).getText()).toEqual("Harry Potter");

    });
});