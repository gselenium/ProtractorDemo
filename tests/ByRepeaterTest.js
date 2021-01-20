describe("Locator testing By Repeater",function(){

    it("Adding few records in a table: ",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("6");
        element(by.id("gobutton")).click();

    }) 

    it("Get the data or rows from table: ",function(){
        element.all(by.repeater("result in memory").row(0)).getText().then(function(text){
            console.log("Row text: ",text);
        })
        browser.sleep(2000)
})

it("Get the data or columns from table: ",function(){
    element.all(by.repeater("result in memory").column("result.timestamp")).getText().then(function(text){
        console.log("Column text: ",text);
    })
    browser.sleep(2000)
})

it("Printing the entire table data: ",function(){
    element.all(by.repeater("result in memory")).getText().then(function(text){
        console.log("Complete table text: ",text);
    })
    browser.sleep(2000)
})

it("Printing the entire table data using the rows concept: ",function(){
    element.all(by.repeater("result in memory")).getText().then(function(rows){
        var noOfRows = rows.length;
        console.log("Total No of Rows: ",noOfRows)
        for(var i=0;i<noOfRows;i++){
            var table = element(by.repeater("result in memory").row(i)).getText();
                table.then(function(text){
                    console.log(text)  
            })
        }
       
    })
    browser.sleep(2000)
})


})