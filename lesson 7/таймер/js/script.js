

function addTimer(){    
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        timer = document.querySelector('.timer');    

    if(hours < 10){
        hours = '0' + hours;
    } else if (minutes < 10){
        minutes = '0' + minutes;
    } else if (seconds < 10){
        seconds = '0' + seconds;
    }

    timer.textContent = hours + '\:' + minutes + '\:' + seconds;    

}
setInterval(addTimer, 1000);



