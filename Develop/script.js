// Set Current day in Jumbotron
var currentDayEl = $('#currentDay')
  
function currentDay() {
  var rightNow = moment().format('dddd, MMMM DD, YYYY');
  currentDayEl.text(rightNow);
}
// Run currentDay function
currentDay();


// create For loop to change the background color of the time blocks
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

// TODO Add save button action to save information in the text box to local storage