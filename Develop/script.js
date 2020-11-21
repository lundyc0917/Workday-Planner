var currentDayEl = $('#currentDay')
  
function currentDay() {
  var rightNow = moment().format('dddd, MMMM DD, YYYY');
  currentDayEl.text(rightNow);
}

currentDay();


for(i = 8; i < 18; i++) {
  var textEntry = "#hour" + i;
  var currentHour = moment().hour();
  if(i < currentHour) {
    $(textEntry).addClass("past");
  } else if (i > currentHour) {
    $(textEntry).addClass("future");
  } else {
    $(textEntry).addClass("present");
  }
}