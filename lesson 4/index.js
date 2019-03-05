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
    savings: true,
    chooseExpenses: function(){
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
    },
    chooseOptExpenses: function (){
        for(let i = 1; i < 4; i++) {
            let question = prompt("Статья необязательных расходов", "");          
            appData.optionalExpenses[i] = question;
        }
    },
    detectDayBudget: function (){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function (){
        if(appData.moneyPerDay < 100 ){
            console.log("Минимальный уровень достатка");
        }else if(appData.moneyPerDay > 500 && appData.moneyPerDay < 1500){
            console.log("Средний уровень достатка");
        }else if(appData.moneyPerDay > 1500){
            console.log("Высокий уровень достатка");
        }else{
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function (){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений", ""),
                persent = +prompt("Под какой процент", "");
            
            appData.monthIncome = save/100/12*persent;
            alert("Доход в месяц с вашего депозита " + appData.monthIncome);
        }
    },
    chooseIncome: function(){        
        for(let i = 0; i<1; i++){
            let answ = prompt('Что принесет вам дополнительный доход (Перечислите через запятую)'),
                answ2 = prompt('Может что-то ещё?', '');
            if(isNaN(answ) && answ != null && answ != ""){                
                appData.income = answ.split(', ');
                if (answ2 != "" && answ2 != null){
                    appData.income.push(answ2);
                }                               
                appData.income.sort();
                
            }else{
                i--;
            }
            appData.income.forEach(function(item, i){
                alert('Дополнительные способы заработка:\n' + ((i +1) + ': ' + item));               
                
            });
        }         
    },
    include: function(){
        console.log('Наша программа включает в себя данные:\n')
        for(let key in appData){
            console.log(key + ': ' + appData[key])
        }
    }   

};  




















