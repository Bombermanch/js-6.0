function scroll (){
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
}

module.export = scroll;