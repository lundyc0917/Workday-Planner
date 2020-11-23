var currentDayEl = $('#currentDay');
var dayEntryEl = $('.description');
var saveButtonEl = $('.saveBtn');


// Set current date to Jumbotron
function currentDay() {
  var rightNow = moment().format('dddd, MMMM DD, YYYY');
  currentDayEl.text(rightNow);
}
// Run currentDay function
currentDay();


// create For loop to change the background color of the time blocks
for(i = 8; i < 18; i++) {
  var timeSlot = "#hour" + i;
  var currentHour = moment().hour();

  if(i < currentHour) {
    $(timeSlot).addClass("past");
  } else if (i > currentHour) {
    $(timeSlot).addClass("future");
  } else {
    $(timeSlot).addClass("present");
  }
}

// TODO Add save button action to save information in the text box to local storage

saveButtonEl.on("click", function(){
  var scheduleTime = $(this).parent().attr("id");
  var scheduleEntry = $(this).siblings(".description").val();

  localStorage.setItem(scheduleTime, scheduleEntry);
});

// function setDay (){
//   $(".time-block")
// }