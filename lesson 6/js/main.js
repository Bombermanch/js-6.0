let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    incomeItem = document.querySelector('.choose-income'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    calcBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    chooseIncome = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
let money, time;

startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();    
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
}); 
expensesBtn.addEventListener('click', function(){
    let sum = 0;
    for(let i = 0; i < expensesItem.length ; i++) {
        let firstQuestion = expensesItem[i].value,
            secondQuestion = expensesItem[++i].value;
        
        if ((typeof(firstQuestion)) != null
            && (typeof(secondQuestion)) !=null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50){
            appData.expenses[firstQuestion] = secondQuestion;
            sum += +secondQuestion;
            
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

function disabledBtn(){
    // Обязательные расходы
    for (i = 0; i < expensesItem.length; i++){
        if (expensesItem[i].value == ""){
            expensesBtn.style.background = 'gray';
            expensesBtn.style.cursor = 'not-allowed';
        }
        expensesItem[i].addEventListener('input', function(){
            for (i = 0; i < expensesItem.length; i++){
                if (expensesItem[i].value == undefined || expensesItem[i].value == ''){
                    expensesBtn.disabled = true;
                    expensesBtn.style.background = 'gray';
                    expensesBtn.style.cursor = 'not-allowed';
                } else if (expensesItem[i].value != undefined || expensesItem[i].value != ''){
                    expensesBtn.disabled = false;
                    expensesBtn.style.cursor = 'pointer';
                    expensesBtn.style.background = 'orange'; 
                }
            }
        });
    }
    // Необязательные расходы
    for (i = 0; i < optionalExpensesItem.length; i++){
        if (optionalExpensesItem[i].value == ""){
            optionalExpensesBtn.style.background = 'gray';
            optionalExpensesBtn.cursor = 'not-allowed';
        }
        optionalExpensesItem[i].addEventListener('input', function(){
            for (i = 0; i < optionalExpensesItem.length; i++){
                if (optionalExpensesItem[i].value == undefined || optionalExpensesItem[i].value == ''){
                    optionalExpensesBtn.disabled = true;
                    optionalExpensesBtn.style.background = 'gray';
                    optionalExpensesBtn.style.cursor = 'not-allowed';
                } else if (optionalExpensesItem[i].value != undefined || expensesItem[i].value != ''){
                    optionalExpensesBtn.disabled = false;
                    optionalExpensesBtn.style.cursor = 'pointer';
                    optionalExpensesBtn.style.background = 'orange'; 
                }
            }
        });
    }

    // дневной бюджет
    

    
}

disabledBtn();






    

optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;          
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});
calcBtn.addEventListener('click', function(){

    if(appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed() - +(appData.expenses/30) ;
        daybudgetValue.textContent = appData.moneyPerDay;
        if(appData.moneyPerDay < 100 ){
            levelValue.textContent = 'Низкий уровень достатка';
            levelValue.style.color = 'red';
        }else if(appData.moneyPerDay > 500 && appData.moneyPerDay < 1500){
            levelValue.textContent = 'Средний уровень достатка';
            levelValue.style.color = 'orange';
        }else if(appData.moneyPerDay > 1500){
            levelValue.textContent = 'Высокий уровень достатка';
        }else{
            levelValue.textContent = 'Произошла  ошибка';
            levelValue.style.color = 'red';
        }
    } else{
        daybudgetValue.textContent = 'Произошла ошибка';
        levelValue.style.color = 'red';
    }
    
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
})

checkSavings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;

    } else{
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    } else{
        percentValue.readonly = true;
        sumValueValue.readonly = true;
    }

});

percentValue.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +sumValue.value,
            persent = +prsentValue.value;
        appData.monthIncome = sum/100/12*persent;
        appData.yearIncome = sum/100*persent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    } else{
        percentValue.readonly = true;
        sumValueValue.readonly = true;
    }
});


function start(){
    
}
start();
    
let appData = {
    budget: money,
    timeData: time, 
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: false,
    chooseExpenses: function(){
        
    },
    chooseOptExpenses: function (){
        
    },
    detectDayBudget: function (){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function (){
       
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


if (appData.budget == '' || appData.budget == undefined){
    calcBtn.style.background = 'gray';
    calcBtn.style.cursor = 'not-allowed';
    calcBtn.disabled = true;
} else{
    calcBtn.style.background = 'gray';
    calcBtn.style.cursor = 'pointer';
    calcBtn.disabled = false;
}
