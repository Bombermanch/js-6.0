"use strict";

let str = "урок-3-был слишком легкий";
    str = str.replace(/-/g, ' ');
    str = str.slice(-6);
    str = str.replace(str.slice(-2), "oо");

console.log(str);

let arr = [20, 33, 1, "Человек", 2, 3];
var sum = 0;
function cube(){    
    for (let i = 0; i < arr.length; i++){
        
        if (isNaN(arr[i])) {              
            arr.splice(i, i, i, i);
        } else{
            arr[i] = Math.pow(arr[i], 3);
            sum += arr[i];

        } 
                   
    }    
}
cube();

console.log(Math.sqrt(sum));










