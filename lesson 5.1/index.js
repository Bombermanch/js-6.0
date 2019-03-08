function formatDate(date) {

    let day = date.getDate();
    if (day < 10) day = '0' + day;
  
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
  
    let year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;
  
    return day + '.' + month + '.' + year;
  }
  
  let nowDate = new Date(); 
  alert(formatDate(nowDate));


function getDayOfWeek(date){
    let numDayOfWeek = date.getDay(),
        dayOfWeek;
    switch(numDayOfWeek){
        case 0: dayOfWeek = 'Воскресенье';
        break;
        case 1: dayOfWeek = 'Понедельник';
        break;
        case 2: dayOfWeek = 'Вторник';
        break;
        case 3: dayOfWeek = 'Среда';
        break;
        case 4: dayOfWeek = 'Четверг';
        break;
        case 5: dayOfWeek = 'Пятница';
        break;
        case 6: dayOfWeek = 'Суббота';
        break;
    }
    return dayOfWeek;
}
alert(getDayOfWeek(nowDate));

function getDifference(){
    let firstDate = document.querySelector('#firstDate'),
        secondDate = document.querySelector('#firstDate'),
        result = document.querySelector('#result');
        result.value = +firstDate.value - +secondDate.value;

}
getDifference(); 
     