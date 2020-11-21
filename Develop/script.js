var hourArray = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

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