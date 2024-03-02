document.addEventListener("DOMContentLoaded", function () {
  var dateElement = document.getElementById("date");
  var timeElement = document.getElementById("time");

  // Get current date
  var currentDate = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var formattedDate = currentDate.toLocaleDateString("en-US", options);
  dateElement.textContent = formattedDate;

  // Get current time
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var formattedTime =
    padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
  timeElement.textContent = formattedTime;
});

function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}

console.log("This is a popup!");
