'use strict';

/* 1 задание */

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
    
    /*2 задание*/
    
    alert("Ваш бюджет на день: "+appData.budget/30);

    var num = "33721", // создаем переменную "num"
        multiplication = num[0]*num[1]*num[2]*num[3]*num[4]; // умножение цифр переменной
        console.log(multiplication); // вывод в консоль результата
    var cube = multiplication**3;
        console.log(String(cube)[0]+String(cube)[1])
    
    
    
    
    
    
    
   
