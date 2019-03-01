"use strict";

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


/*ПЕРВЫЙ СПОСОБ*/
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
/* ВТОРОЙ СПОСОБ */
/*let i = 1;
while(i < 2){
    let a = prompt("Введите обязательную статью расходов", ""),
        b = +prompt("Во сколько обойдётся?", "");
        
    if ((typeof(a)) === 'string' && (typeof(a)) != null
     && (typeof(b)) !=null && a != '' && b != '' && a.length < 50){
        appData.expenses[a] = b;
        
    } else {
        i--;
    }
    i++;
} /*

/* ТРЕТИЙ СПОСОБ */

/*let i = 1;
do{    
    let a = prompt("Введите обязательную статью расходов", ""),
        b = +prompt("Во сколько обойдётся?", "");
        
    if ((typeof(a)) === 'string' && (typeof(a)) != null
        && (typeof(b)) !=null && a != '' && b != '' && a.length < 50){
        appData.expenses[a] = b;
        
    } else {
        i--;
    }
    i++;
      
} while(i < 2);
*/

alert(appData.budget / 30);

