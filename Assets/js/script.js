// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
// });
var currentHour = dayjs().format();
$(document).ready(function () {


  // var saveButton = $(".btn");
  // // var input = $(this)
  // //   .siblings('.description')
  // //   .val("");

  $('.saveBtn').on('click', function () {
    // get nearby values
    var value = $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');
  
    // save in localStorage
    localStorage.setItem(key, value);
    localStorage.getItem(value);

  });
// function displayValue(){
//   localStorage.getItem(value);
//   $("#hour-10").append(value);
// }
document.querySelector('#display-9').value = localStorage.getItem("hour-9");
document.querySelector('#display-10').value = localStorage.getItem("hour-10");
document.querySelector('#display-11').value = localStorage.getItem("hour-11");
document.querySelector('#display-12').value = localStorage.getItem("hour-12");
document.querySelector('#display-1').value = localStorage.getItem("hour-1");
document.querySelector('#display-2').value = localStorage.getItem("hour-2");
document.querySelector('#display-3').value = localStorage.getItem("hour-3");
document.querySelector('#display-4').value = localStorage.getItem("hour-4");
document.querySelector('#display-5').value = localStorage.getItem("hour-5");

var displayDate = dayjs().format('dddd, MMMM DD');
$('#currentDay').text(displayDate);
});

//Conditional Statement??
// if(timerValue > time-block){
//   document.querySelector("#hour-10").classList.add(".past")
//   document.querySelector("#hour-10").classList.remove(".present")
// }

// dayjs().hour() // gets current hour
// newDate = dayjs().hour(12) // returns new dayjs object
// console.log(newDate);

let possibleTimes=[9, 10, 11, 12, 1, 2, 3, 4, 5]

var currentHour = dayjs().get('hour');
console.log(currentHour);

if(currentHour > timeBlocks)

var timeBlock9am = document.querySelector('#hour9');



