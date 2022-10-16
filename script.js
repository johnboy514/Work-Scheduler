// Added current day at the top of the planner (moment)
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

// Variables for now (current hour) and HTML timeBlock (to change color for it)
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

// Function to check each hour block to see if it is past (gray), present (red), or future (green)
$.each(timeBlock, function () {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});

// Is the text box that lets you save things to local storage for events
$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

// Array is used to go through to see which block the text input is saved to and store it on the same line
timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm","3pm", "4pm", "5pm"];
varTimeId = ["#nineAm", "#tenAm", "#elevenAm", "#twelvePm", "#onePm", "#twoPm", "#threePm", "#fourPm", "#fivePm"];
varLS = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm];
arrayPos = 0;

  $(document).ready(function () {

    for (let i = 0; i < timeArray.length; i++) {
        if (localStorage[timeArray[arrayPos]] !== null && localStorage[timeArray[arrayPos]] !== undefined) {
            varLS[arrayPos] = $("<p>" + localStorage[timeArray[arrayPos]] + "</p>");
            $(varTimeId[arrayPos]).append(varLS[arrayPos][0].innerText);
            arrayPos++;
            } else {
            ("");
            arrayPos++;
        }
    }
  });