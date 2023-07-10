function counter()
{
    var date_time   = new Date().getTime();
    const date_ = new Date(date_time);
    var hour = ("0" + date_.getHours()).slice(-2);
    var minute = ("0" + date_.getMinutes()).slice(-2);
    var seconds = ("0" + date_.getSeconds()).slice(-2);

    var time = `${hour}:${minute}:${seconds}`;
    console.clear();
    console.log(time)
}

var counters = setInterval(counter,1000);
