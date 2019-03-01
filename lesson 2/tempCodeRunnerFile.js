while(i > 2){
    let a = prompt("Введите обязательную статью расходов", ""),
        b = +prompt("Во сколько обойдётся?", "");
        
    if ((typeof(a)) === 'string' && (typeof(a)) != null
     && (typeof(b)) !=null && a != '' && b != '' && a.length < 50){
        appData.expenses[a] = b;
        
    } else {
        
    }
    i++;
    
}