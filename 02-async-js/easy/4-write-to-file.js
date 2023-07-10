var fs = require('fs');

function write_file_function(err)
{
    if(err)
    {
        console.log(err);return
    }
    console.log("File Written Successfully");
}
fs.writeFile('aa.txt',"This is a test message",'utf8',write_file_function);