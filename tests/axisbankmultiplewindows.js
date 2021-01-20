describe('Handling Windows', function(){


    it('Handling multiple windows on Andhra Bank',function(){


        browser.ignoreSynchronization=true;
        browser.get("https://www.unionbankofindia.co.in/english/home.aspx");

        //element(by.xpath("(//*[@class='close_button'])[1]")).click();
        browser.sleep(3000);
        element(by.linkText("Andhra")).click();
        browser.sleep(15000)

        /*browser.getAllWindowHandles().then(function(handles){

            browser.switchTo().window(handles[1]).then(function(){

                browser.getTitle().then(function(text){

                    console.log("Second window title = "+text);
                })
            })
        })    */
        
        let windowHandles = browser.getAllWindowHandles();
        let firstWindow, secondWindow;

        windowHandles.then(function(handles){
            firstWindow = handles[0];
            secondWindow = handles[1];
            console.log("firstWindow: ",firstWindow);
            console.log("secondWindow: ",secondWindow);
            browser.sleep(15000)

        browser.switchTo().window(secondWindow).then(function(){
            element(by.css("#content > a > img")).click();
        })       
    })
    })
})   