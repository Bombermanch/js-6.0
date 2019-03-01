"use strict";

let week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  
  for(var i = 6; i > -1; i-- ){
    var p = document.createElement('p');
    if(i < 5 && i != 4){        
        p.innerHTML = week[i] + "<br>";
        document.body.insertBefore(p, document.body.firstChild);
    } else if(i == 4) {
        let k = document.createElement('i');
        k.innerHTML = week[i] + "<br>";
        document.body.insertBefore(k, document.body.firstChild);
    } else {        
        let b = document.createElement('b');
        b.innerHTML = week[i] + "<br>";
        document.body.insertBefore(b, document.body.firstChild);
    }   
    
  }
  /* 2 ЗАДАНИЕ*/
  let arr = ["34435", "43223", "34344", "16789", "76789", "56089", "55789"];
  for(i = 0; i < 7; i++){
      if (arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7){
          console.log(arr[i]);
      }
  }