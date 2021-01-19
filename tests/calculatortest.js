
describe("Calculator tests",function(){

    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
    })

    afterEach(function(){
        element(by.binding("latest")).getText().then(function(text){
            console.log("Result is: ",text);
        })
    })

    it("Test case: 1 ",function(){
      
        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('2');
        element(by.buttonText('Go!')).click();

       
    })

   

    it("Test case: 2 ",function(){
        //browser.get("https://juliemr.github.io/protractor-demo/");
         element(by.model('first')).sendKeys('3');
         element(by.model('second')).sendKeys('4');
         element(by.buttonText('Go!')).click();
     })

     it("Test case: 3 ",function(){
       // browser.get("https://juliemr.github.io/protractor-demo/");
         element(by.model('first')).sendKeys('5');
         element(by.model('second')).sendKeys('6');
         element(by.buttonText('Go!')).click();
     })

     it("Test case: 4 ",function(){
       // browser.get("https://juliemr.github.io/protractor-demo/");
         element(by.model('first')).sendKeys('7');
         element(by.model('second')).sendKeys('8');
         element(by.buttonText('Go!')).click();
     })




})