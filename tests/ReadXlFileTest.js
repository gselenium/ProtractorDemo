var XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
var first_sheet_name = workbook.SheetNames[0];

var address_of_cell = 'B2';

var worksheet = workbook.Sheets[first_sheet_name];
//console.log(address_of_cell);

var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) { /* iterate through sheets */
    var worksheet = workbook.Sheets[y];
    console.log(y)
    for (z in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if(z[0] === '!') continue;
        console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
    }
});