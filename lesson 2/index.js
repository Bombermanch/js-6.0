'use strict';

/* 1 задание */

var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    article = prompt("Введите обязательную статью расходов", ""),
    amount = +prompt("Во сколько обойдётся?", ""),
    appData = {
        budget: money,
        timeData: time, 
        expenses: {},
        optionalExpenses : {},
        income: [],
        savings: false
        
    };  
for(let i = 1; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов", ""),
        b = +prompt("Во сколько обойдётся?", "");
    if ((typeof(a)) === 'string' && (typeof(a)) != null
     && (typeof(b)) !=null && a != '' && b != '' && a.length < 50){
        appData.expenses[a] = b;
    } else {
        i--;
    }
};

/*let i = 0;
while(i > 3){
    let a = prompt("Введите обязательную статью расходов", ""),
        b = +prompt("Во сколько обойдётся?", "");
        
    if ((typeof(a)) === 'string' && (typeof(a)) != null
     && (typeof(b)) !=null && a != '' && b != '' && a.length < 50){
        appData.expenses[a] = b;
        
    } else {
        
    }
    i++;
    
}*/

alert(appData.budget / 30);
    

    
    
    
    
    
    
    
   
