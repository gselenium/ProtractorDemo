var Objects = require('../Objects.json');
var using  = require('jasmine-data-provider');

describe('Gmail Application testing, Datadriven using Json file',function(){
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.get(Objects.baseurl);
        browser.manage().window().maximize();
    })

    function plusProvider(){
        return [
            {username:Objects.userdetails.username1,password:Objects.userdetails.password1},
            {username:Objects.userdetails.username2,password:Objects.userdetails.password2}
        ]

    };

    using(plusProvider, function(data){
        it('Gmail Login test',function(){
            console.log("Navigating gmail url");
            element(by.css("#identifierId")).sendKeys(data.username);
            element(by.buttonText(Objects.locators.loginpage.next)).click();
            console.log(data.password);
    
        })
    })    

})