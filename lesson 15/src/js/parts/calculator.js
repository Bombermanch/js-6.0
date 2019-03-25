function calculator(){
    "use strict";
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0,
        counterBlockInput = document.querySelectorAll('.counter-block-input'),
        placeKoef = place.options[place.selectedIndex].value;
        

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function(){
        personSum = +this.value;
        

        if(restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
            totalValue.innerHTML = 0;
        } else{
            total = daysSum * personSum*4000;
            totalValue.innerHTML = total*placeKoef;
        }
    });
    restDays.addEventListener('change', function(){
        daysSum = +this.value;
        

        if(restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
            totalValue.innerHTML = 0;
        } else{     
            total = daysSum * personSum * 4000;           
            totalValue.innerHTML = total*placeKoef;
        }
    });
    
    place.addEventListener('change', function(){
        if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0'){
            totalValue.innerHTML = 0;
            
        }else{                
            total = daysSum * personSum * 4000;
            placeKoef = this.options[this.selectedIndex].value;
            totalValue.innerHTML = total * placeKoef;
        }
    });
    function validCounterBlockInput(input){
        
        return /\d/.test(input)
    }
    for (let i = 0; i < counterBlockInput.length; i++){
        counterBlockInput[i].addEventListener('input', function(){
            if (!validCounterBlockInput(counterBlockInput[i].value)){
                counterBlockInput[i].value = counterBlockInput[i].value.slice(0, -1);
            }
        })
        
    }      
        
}

module.exports = calculator;