let homepage = require('../pages/homepage.js');

describe('demo calculator tests',function(){

    it('addition test', function(){
       // browser.get("https://juliemr.github.io/protractor-demo/");
        homepage.get("https://juliemr.github.io/protractor-demo/");
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('5');
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('6');
       // element(by.css('[ng-click="doAddition()"]')).click();
       homepage.clickGoButton();       
       browser.sleep(6000);
       homepage.verifyResult('11');

    }); 
});