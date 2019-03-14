window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    function hideTabContent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');            
        }
    }
    hideTabContent(1);
    
    

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;        
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Таймер
    
    let deadline = '2019-03-15 09:00:00';
    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date());
        if (t < 0){
            t = 0;
        }
    let seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            if (t.hours < 10) hours.textContent = '0' + t.hours;     
            minutes.textContent = t.minutes;
            if (t.minutes < 10) minutes.textContent = '0' + t.minutes;
            seconds.textContent = t.seconds;
            if (t.seconds < 10) seconds.textContent = '0' + t.seconds;
            

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);

    // Модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close'),
        btn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', function(){
            overlay.style.display = 'block';
            btn[i].classList.add('more-splash');          
            
        });
        
    }

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        
        
    });
    popupClose.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
    });

    // Модеальное окно в табах

    

    
    
});
    
