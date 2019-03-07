function getFriendlyNumbers(start, end) {
    let num1, num2;
    for(let i = start; i < end; i++){   
        
    let divArr = getDiv(i);     
        sumArr = sumDiv(divArr);
             
          
    }
    
         
      
    
}
getFriendlyNumbers(1, 300);
function getDiv(n){
    let arr = [];
    for (let i = 1; i < n; i++){
        if (n % i == 0){
            arr.push(i)
        }
    }
    return arr;
}
function sumDiv(arr){
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
      sum += arr[i];  
    }
    return sum;
}




/*module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}*/