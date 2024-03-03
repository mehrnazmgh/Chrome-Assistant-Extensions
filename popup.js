function dateTime() {
  let currentTime = new Date();
  let options = { year: "numeric", month: "long", day: "numeric" };
  let currentUTCTime = currentTime.toLocaleDateString("fa-IR", options);
  // .toLocaleDateString('fa-IR')
  // .toUTCString)()
  return currentUTCTime;
}
function clock() {
  var date = new Date();
  var hourOffset = 3;
  date.setUTCHours(date.getUTCHours(), date.getUTCMinutes());
  var time = date.getTime();
  date.setUTCFullYear(date.getUTCFullYear(), 2, 22);
  var dstStart = date.getTime();
  date.setUTCFullYear(date.getUTCFullYear(), 8, 22);
  var dstEnd = date.getTime();
  if (time > dstStart && time < dstEnd) hourOffset = 4;
  date.setUTCHours(date.getUTCHours() + hourOffset, date.getUTCMinutes() + 30);
  var output =
    date.getUTCHours() +
    ":" +
    date.getUTCMinutes() +
    ":" +
    date.getUTCSeconds();
  document.getElementById("clock").innerHTML = output;
}
function setElement(currentUTCTime) {
  // find id = time in html page and this is about content part
  var dateTimeElement = document.getElementById("time");

  (dateTimeElement.textContent = currentUTCTime), clock();
}

document.addEventListener("DOMContentLoaded", function () {
  // set default value
  const currentUTCTime = dateTime();
  setElement(currentUTCTime);

  // update default value each 1s
  setInterval(() => {
    const currentUTCTime = dateTime();
    setElement(currentUTCTime);
  }, 1000); // Run updateTime() every second
});
