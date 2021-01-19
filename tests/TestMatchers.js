//https://github.com/JamieMason/Jasmine-Matchers
//https://jasmine.github.io/api/2.6/matchers.html
describe("Match Title tests",function(){
    var title;

    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
        title = browser.getTitle();
    })

    it("Validate exact title: ", function(){
       title.then(function(text){
       console.log("Application title: ",text);
      // expect(title).toEqual("Super Calculator");    
       expect(title).toMatch("Calculator");      
       })  

       
    })

}) 