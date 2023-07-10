var fs = require('fs');

function write_file_function(err)
{
    if(err)
    {
        console.log(err);return
    }
}

function print_file_content(err,data)
{
    if(err)
    {
        return;
    }
    var compressed_data = data.split(" ");
    compressed_data_array = [];
    for (let i = 0; i < compressed_data.length; i++) 
    {
        var element = compressed_data[i];
        if (element.length > 0)
        {
            compressed_data_array.push(element);
        }
    }
    var compressed_data_value = compressed_data_array.join(" ");
    fs.writeFile('aa.txt',compressed_data_value,'utf-8',write_file_function);
}
fs.readFile('aa.txt','utf-8',print_file_content)
