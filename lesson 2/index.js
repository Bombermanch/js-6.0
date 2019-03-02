"use strict";

/* 1 задание */

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),    
    appData = {
        budget: money,
        timeData: time, 
        expenses: {},
        optionalExpenses : {},
        income: [],
        savings: false
        
    };  


/*ПЕРВЫЙ СПОСОБ*/
for(let i = 0; i < 2; i++) {
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



appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100 ){
    console.log("Минимальный уровень достатка");
}else if(appData.moneyPerDay > 500 && appData.moneyPerDay < 1500){
    console.log("Средний уровень достатка");
}else if(appData.moneyPerDay > 1500){
    console.log("Высокий уровень достатка");
}else{
    console.log("Произошла ошибка!");
}

