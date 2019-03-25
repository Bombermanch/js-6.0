window.addEventListener('DOMContentLoaded', () => { // ES6
    'use strict';
    
    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js'),
        scroll = require('./parts/slowly-scroll.js'),
        ajax = require('./parts/ajax.js'),
        valid = require('./parts/valid.js'),
        slider = require('./parts/slider.js'),
        calculator = require('./parts/calculator.js');
    tabs();
    timer();
    modal();
    scroll();
    ajax();
    valid();
    slider();
    calculator();      
});