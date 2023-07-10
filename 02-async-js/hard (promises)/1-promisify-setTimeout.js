/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { error } = require("console");

function wait(n) 
{
    delay(n).then(() => {
        console.log("String has been printed aftre 3s")
    })
    .catch((error) =>{
        console.log("error:",error);
    });
}



wait(3);