function modal (){
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
}

module.export = modal;