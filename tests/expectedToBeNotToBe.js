
describe("Calculator tests",function(){
    var expected_text;

    // beforeEach(function(){
    //     browser.get("https://juliemr.github.io/protractor-demo/");
    // })

    // afterEach(function(){
    //     element(by.binding("latest")).getText().then(function(text){
    //         console.log("Result is: ",text);
    //     })
    // })

    it("Test case: 1 ",function(){
        browser.get("https://juliemr.github.io/protractor-demo/");      
        element(by.model('first')).sendKeys('7');
        element(by.model('second')).sendKeys('7');
        element(by.buttonText('Go!')).click();
        browser.sleep(4000);
        expected_text = element(by.binding("latest")).getText();
        browser.sleep(2000);

    })

    it("Validate 7 + 7 = 14 ", function(){
      
        expected_text.then(function(text){
            console.log("Total value: ",text);
            // expect(text).toBe('14');
             //expect(text).not.toBe('10');
             expect(parseInt(text)).toBe(14);

        })
       
    })

}) 