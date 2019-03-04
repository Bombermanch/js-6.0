"use strict";

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    };
}
start();
    
let appData = {
        budget: money,
        timeData: time, 
        expenses: {},
        optionalExpenses : {},
        income: [],
        savings: true
        
    };  



function chooseExpenses(){
    for(let i = 0; i < 2; i++) {
        let firstQuestion = prompt("Введите обязательную статью расходов", ""),
            secondQuestion = +prompt("Во сколько обойдётся?", "");
        if ((typeof(firstQuestion)) === 'string' && (typeof(firstQuestion)) != null
         && (typeof(secondQuestion)) !=null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50){
            appData.expenses[firstQuestion] = secondQuestion;
        } else {
            i--;
        }
    }
}
chooseExpenses(); // обязательные расходы
function chooseOptExpenses(){
    for(let i = 1; i < 4; i++) {
        let question = prompt("Статья необязательных расходов", "");          
        appData.optionalExpenses[i] = question;
    }
}
chooseOptExpenses();// необязательные расходы

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget(); // вывод ежедневного бюджета



if(appData.moneyPerDay < 100 ){
    console.log("Минимальный уровень достатка");
}else if(appData.moneyPerDay > 500 && appData.moneyPerDay < 1500){
    console.log("Средний уровень достатка");
}else if(appData.moneyPerDay > 1500){
    console.log("Высокий уровень достатка");
}else{
    console.log("Произошла ошибка!");
}

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений", ""),
            persent = +prompt("Под какой процент", "");
        
        appData.monthIncome = save/100/12*persent;
        alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    }
}
checkSavings();



