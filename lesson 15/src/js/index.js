require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => { // ES6
    'use strict';
    
    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js'),
        
        ajax = require('./parts/ajax.js'),
        valid = require('./parts/valid-input.js'),
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