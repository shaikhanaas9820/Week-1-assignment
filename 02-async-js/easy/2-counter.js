
var counters = 1;
function counter_plus_one()
{
    console.clear()
    console.log(counters)
    counters++;
    setTimeout(counter_plus_one,1000);
}

setTimeout(counter_plus_one,1000);