describe('Handling IFrames', function(){

    it('Handling IFrames',function(){

        browser.ignoreSynchronization=true;
        browser.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");

        element.all(by.tagName('iframe')).each(function(frame){
           // console.log("Total frames: ",frame.length)
            frame.getAttribute('id').then(function(text){
                console.log("Frame id: ",text);
            })
            
        })

        element.all(by.tagName("iframe")).count().then(function(size){
            console.log("Total frames: ",size)
        })

        browser.switchTo().frame("iframeResult").then(function(){
            element(by.xpath("html/body/button")).click();
        })

        browser.switchTo().defaultContent();
            element(by.xpath("html/body/div[5]/div/a[5]")).click();
        

    })
})