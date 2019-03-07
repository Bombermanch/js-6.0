let menuItems = document.querySelectorAll('.menu-item'),
    menuItemNew = document.createElement('li'),
    menu = document.querySelector('.menu'),
    header = document.querySelector('.title'),
    question = document.querySelector('#prompt')
    advertising = document.querySelector('.adv');
    document.body.style.background = 'url(img/apple_true.jpg)';
menu.insertBefore(menuItems[2], menuItems[1]);
menuItemNew.classList.add('menu-item');
menuItemNew.innerHTML = 'Пятый пункт';
menu.appendChild(menuItemNew);
header.innerHTML = 'Мы продаём только подлинную технику Apple';
advertising.remove();
question.textContent = prompt("Ваше отношение к технике Apple", "");


    
