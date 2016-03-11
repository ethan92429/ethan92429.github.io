/** the listen function starts the html5 word recognition library and presents
the output in an alert message. */
function listen() {
  var recognition = new webkitSpeechRecognition();
  recognition.onresult = function(event) {
    console.log(event);
    alert(event.results[0][0].transcript);
  };
  recognition.start();
}
function alertMe(waitForInSeconds, buttonId) {
  setButtonDisabled(true, buttonId);
  for (i = 0; i <= waitForInSeconds; i++) {
    setTimeout(setProgressBar, i * 1000, i / waitForInSeconds);
  }
  setTimeout(alert, waitForInSeconds * 1000, "Time for a break!");
  // alert("Time for a break!");
  setTimeout(setButtonDisabled, 1000 * waitForInSeconds, false, buttonId);
}
function setButtonDisabled(disable, buttonId) {
  $("#" + buttonId).prop('disabled', disable);
}
function setProgressBar(i){
  $("progress").attr("value", i);
}
