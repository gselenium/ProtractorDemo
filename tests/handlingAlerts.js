describe('Handling Alerts', function(){


    it('Handling Alerts',function(){

        browser.ignoreSynchronization=true;
        browser.get("https://mail.rediff.com/cgi-bin/login.cgi");
    
        element(by.xpath("//*[@name='proceed']")).click();

       var alert = browser.switchTo().alert();
       alert.getText().then(function(text){

        console.log(text);
       })

       browser.sleep(3000);

       alert.accept();
       browser.sleep(3000);
       //alert.sendKeys("sdfsdf");

        element(by.xpath("//*[@id='login1']")).sendKeys("govardhan.selenium@gmail.com");

    })

})