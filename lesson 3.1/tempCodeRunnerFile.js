let arr = [20, 33, 1, "Человек", 2, 3];
var sum = 0;
function sumCubeNumber(){     
    for (let i = 0; i < arr.length; i++){
        
        if (isNaN(arr[i])) {              
            arr.splice(i, i, i, i);
        } else{
            sum += Math.pow(arr[i], 3);
            

        } 
                   
    }    