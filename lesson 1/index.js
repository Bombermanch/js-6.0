'use strict';

/* 1 задание */

var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),    
    appData = {
        budget: money,
        timeData: time, 
        expenses: {},
        optionalExpenses : {},
        income: [],
        savings: false        
    };
    var firstQuestion = prompt("Введите обязательную статью расходов", ""),
        secondQuestion = +prompt("Во сколько обойдётся?", "");
     
    
    appData.expenses[firstQuestion] = secondQuestion;
    

    alert("Ваш бюджет на день: "+appData.budget/30);
    console.log(appData.expenses.firstQuestion);


    
    /*2 задание*/
    
    

    var num = "33721"; // создаем переменную "num"
        for (let i = 0; i < num.length; i++){ // умножение цифр переменной
            var mult = 1;
            mult *= +num[i];
            console.log(mult);
        } 
    
       
    
    
    
    
    
    
    
    
   
