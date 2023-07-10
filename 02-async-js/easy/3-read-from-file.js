var fs = require('fs')
function print_file_content(err,data)
{
    if(err)
    {
        console.log(err)
        return
    }
    console.log(data)
}

fs.readFile('a.txt','utf8',print_file_content)

var counters = 1;
for(i = 0; i < 10000000 ; i++)
{
    console.clear()
    console.log(counters)
    counters = counters+1;
}