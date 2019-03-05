"use strict";

function replaceString(str, searchWord, changeWord){
	let newStr =  str[0].toUpperCase() + str.slice(1).replace(/-/g, ' ');  // 1 пункт 
		console.log(newStr); // 2 пункт
	let easy = newStr.slice(newStr.indexOf(searchWord));		
	let easyoo = easy.replace(easy.slice(-2), changeWord);
		alert(easyoo); // 3 пункт
	
}
replaceString('урок-3-был слишком легкий', "легкий", "оо"); 





let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0,
    sqrt;

function sumCubeNumber(){     
    for (let i = 0; i < arr.length; i++){
        
        if (!isNaN(arr[i])) {              
            sum += Math.pow(arr[i], 3);
            sqrt = Math.sqrt(sum);
        } else{
            sqrt = "NaN";
        }                   
    }    
}
sumCubeNumber();
console.log(sqrt.toFixed(2)); // 4 пункт    


function stringRecovery (arg){
    if (typeof arg != "string"){        
        alert("Аргумент не строка!");
    }else if(arg.length > 50){
        alert(arg.trim().slice(0, 50) + '(...)');
    }else {
        alert(arg.trim());
    }
}
stringRecovery(' fffggfggfgfg   ');
