describe('Testing Agular application',function(){

    it('Understanding the Promises',function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');

        element(by.css('.btn.btn-primary.btn-lg')).click();

        //console.log(browser.getTitle());
        browser.getTitle().then(function(title){
            console.log(title);
        })
        var title = browser.getTitle();
        if(title=="Protractor practice website - Banking App"){
            console.log("Title matches");
        }else{
            console.log("Title does not matches");
        }
    })
})