'use strict';

var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    article = prompt("Введите обязательную статью расходов", ""),
    amount = +prompt("Во сколько обойдётся?", ""),
    appData = {
        budget: money,
        timeData: time, 
        expenses: {
            article:amount
        },
        optionalExpenses : {},
        income: [],
        savings: false
        
    };   
    
    alert("Ваш бюджет на день: "+appData.budget/30);
    
    
    
    
    
    
    
   
