
var counters = 1;
function counter_plus_one()
{
    console.clear();
    console.log(counters);
    counters++;

}

var counter = setInterval(counter_plus_one,1000);