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
    var answ1 = prompt("Введите обязательную статью расходов", ""),
        answ2 = +prompt("Во сколько обойдётся?", ""),
        answ3 = prompt("Введите обязательную статью расходов", ""),
        answ4 = +prompt("Во сколько обойдётся?", "");
    appData.expenses.answ1 = answ2;
    appData.expenses.answ3 = answ4;

    alert("Ваш бюджет на день: "+appData.budget/30);


    
    /*2 задание*/
    
    

    var num = "33721", // создаем переменную "num"
        multiplication = num[0]*num[1]*num[2]*num[3]*num[4]; // умножение цифр переменной
        console.log(multiplication); // вывод в консоль результата
    var cube = multiplication**3;
        console.log(String(cube)[0]+String(cube)[1])
    
    
    
    
    
    
    
   
