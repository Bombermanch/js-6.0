window.addEventListener('DOMContentLoaded', () => { // ES6
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

    info.addEventListener('click', (e) => { // ES6
        let target = e.target;        
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
    
    let deadline = '2019-03-16 09:00:00';
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
            if (t.hours < 10) hours.textContent = `0${t.hours}`;   // ES6  
            minutes.textContent = t.minutes;
            if (t.minutes < 10) minutes.textContent = `0${t.minutes}`; // ES6
            seconds.textContent = t.seconds;
            if (t.seconds < 10) seconds.textContent = `0${t.seconds}`; // ES6
            

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
        btn[i].addEventListener('click', () => { // ES6
            overlay.style.display = 'block';
            btn[i].classList.add('more-splash');
            document.body.style.overflow = 'hidden';          
            
        });
        
    }

    more.addEventListener('click', () => { // ES6
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
        
        
    });
    popupClose.addEventListener('click', () => { // ES6
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Плавная прокрутка

    let anchors = document.querySelectorAll('a[href*="#"]')

    for (let elem of anchors) {
        elem.addEventListener('click', (e) => { // ES6
            e.preventDefault();
            
            let linkElem = elem.getAttribute('href');
            
            document.querySelector('' + linkElem).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    }

    // send form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('#form'),
        contactInput = contactForm.getElementsByTagName('input'),
        input = form.getElementsByTagName('input'),        
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    
                    
                    

                    request.onreadystatechange = function(){
                        if (request.readyState < 4){
                            resolve();
                        } else if(request.readyState === 4){
                            if (request.status == 200 && request.status < 300){
                                resolve();
                            }
                            else{
                                reject();
                            }
                        }
                    }
                    let obj = {};
                    data.forEach(function(value, key){
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                })
            } // end postData

            function clearInput(){
                for(let i = 0; i < input.length; i++){
                    input[i].value = '';
                }
            }

            postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput());
                    
        });
    }
    sendForm(form);
    sendForm(contactForm); //end send form
            

        


         

    // Валидация полей
    let phone = document.getElementsByName('phone');
    for(let i = 0; i < phone.length; i++){
        phone[i].addEventListener('input', () =>{
            if(!validation(phone[i].value)){                
                phone[i].value = phone[i].value.slice(0,-1);                    
                
                }            
        });           
        
    }
    function validation (input)  {

        return /(^(8|\+7)\d{0,10}|^\+\d{0,11})$/.test(input);
    } // end
    
    // slider 
     
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');    
    showSlides(slideIndex);
    function showSlides(n){
        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }        

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    
    function plusSlides(n){
       showSlides(slideIndex += n);
    }
    function currentSlide(n){
        showSlides(slideIndex = n)
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });
    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(e){
       for (let i = 0; i < dots.length + 1; i++){
           if(e.target.classList.contains('dot') && e.target == dots[i-1]){
               currentSlide(i);
           }
       } 
    });

    // calc
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0,
        counterBlockInput = document.querySelectorAll('.counter-block-input');
        

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function(){
            personSum = +this.value;
            total = (daysSum + personSum)*4000;

            if(restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
                totalValue.innerHTML = 0;
            } else{
                totalValue.innerHTML = total;
            }
        });
        restDays.addEventListener('change', function(){
            daysSum = +this.value;
            total = (daysSum + personSum)*4000;

            if(restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
                totalValue.innerHTML = 0;
            } else{                
                totalValue.innerHTML = total;
            }
        });
        
        place.addEventListener('change', function(){
            if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0'){
                totalValue.innerHTML = 0;
                
            }else{                
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
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
        
            
        
});