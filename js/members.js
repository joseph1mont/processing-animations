// Loading bar 70Sec
$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 1;
      $("#dynamic1")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= 100)
          clearInterval(interval);
  }, 700);
});

// Loading bar 10Sec
$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 1;
      $("#dynamic2")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= 100)
          clearInterval(interval);
  }, 100);
});

// Loading bar 60Sec
$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 1;
      $("#dynamic3")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= 100)
          clearInterval(interval);
  }, 600);
});

var timeleft = 70;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown1").innerHTML = timeleft + " Months Left";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown1").innerHTML = "Finished"
  }
}, 1000);

$(function () {
  var timerId = 0;
  var ctr=0;
  var max=10;

  timerId = setInterval(function () {
    // interval function
    ctr++;
    $('#blips > .progress-bar').attr("style","width:" + ctr*max + "%");

    // max reached?
    if (ctr==max){
      clearInterval(timerId);
    }
  }, 7000); // Change total time here
});


var timeleft2 = 10;
var downloadTimer2 = setInterval(function(){
  document.getElementById("countdown2").innerHTML = timeleft2 + " Months Left";
  timeleft2 -= 1;
  if(timeleft2 <= 0){
    clearInterval(downloadTimer2);
    document.getElementById("countdown2").innerHTML = "Finished"
  }
}, 1000);

$(function () {
  var timerId2 = 0;
  var ctr2=0;
  var max2=10;

  timerId2 = setInterval(function () {
    // interval function
    ctr2++;
    $('#blips > .progress-bar').attr("style","width:" + ctr2*max2 + "%");

    // max reached?
    if (ctr2==max2){
      clearInterval(timerId2);
    }
  }, 1000); // Change total time here
});

var timeleft3 = 60;
var downloadTimer3 = setInterval(function(){
  document.getElementById("countdown3").innerHTML = timeleft3 + " Months Left";
  timeleft3 -= 1;
  if(timeleft3 <= 0){
    clearInterval(downloadTimer3);
    document.getElementById("countdown3").innerHTML = "Finished"
  }
}, 1000);

$(function () {
  var timerId3 = 0;
  var ctr3=0;
  var max3=10;

  timerId3 = setInterval(function () {
    // interval function
    ctr3++;
    $('#blips > .progress-bar').attr("style","width:" + ctr3*max3 + "%");

    // max reached?
    if (ctr3==max3){
      clearInterval(timerId3);
    }
  }, 6000); // Change total time here
});
