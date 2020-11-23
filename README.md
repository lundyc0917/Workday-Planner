# Workday-Planner
A planner for your current workday.


## Link to Site
https://lundyc0917.github.io/Workday-Planner/

## Motivation
Create a daily planner to add tasks to in order to stay organized throughout the day.

## Build Status
build | working

## Screen Shot
![planner-screenshot](https://user-images.githubusercontent.com/71233342/99986292-000dd300-2d7d-11eb-86f4-b27d0e479ebc.png)


## Framework

Built Using:
 - JavaScript
 - HTML
 - CSS

## Features

When the page is opened up, the user is able to see today's date and hourly time slots for hours between 8:00 AM and 5:00 PM.  The user is able to add information to each time slot and save the information for each time slot.  As the day progresses and the page is refreshed, the time slots change colors to indicate current hour, past hour, and future hour.

## Code Example

.js code

Changing colors based on current time:

`````````````````````````
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
`````````````````````````
