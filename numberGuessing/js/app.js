"use strict";

let maxNum;
let randNum;

document.querySelector("#start").addEventListener("click",e => { 
    maxNum = document.querySelector("#startCont input[type='number']").value;
    document.querySelector("#startCont").style.display = "none";
    document.querySelector("#cont").style.display = "flex";
    document.querySelector("#phrase").innerHTML += " "+maxNum;
    randNum = Math.floor(Math.random()*maxNum) + 1;
    console.log(randNum);
    document.querySelector("#cont input[type='number']").value = null; 
    document.querySelector("#cont input[type='number']").max =  maxNum; 
});

document.querySelector("#try").addEventListener("click",e => { 
    const numPicked = document.querySelector("#cont input[type='number']").value;

    if(numPicked > 100 || numPicked < 1)
    {
        document.querySelector("#res").innerHTML = "out of range";
        document.querySelector("#res").style.color = "red";
        return;
    }

    if(randNum == numPicked)
    {
        document.querySelector("#res").innerHTML = "you win!";
        document.querySelector("#res").style.color = "green";
    }
    else
    {
        if(numPicked > randNum)
        {
            document.querySelector("#res").innerHTML = "too high";
            document.querySelector("#res").style.color = "red";
        }
        else
        {
            document.querySelector("#res").innerHTML = "too low";
            document.querySelector("#res").style.color = "red";
        }
      
    }

});