"use strict";

let str = "урок-3-был слишком легкий";

let noBackspace = str.replace(/-/g, ' ');
console.log(noBackspace);

let easy = noBackspace.replace(/легкий/, ' ');

