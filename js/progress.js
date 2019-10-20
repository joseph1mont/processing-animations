// Text change for Currently Scanning in Processing page
var divs = $('div[id^="CurentlyScanning-"]').hide(),
    i = 0;
(function cycle() {
    divs.eq(i).fadeIn(400)
              .delay(20000)
              .fadeOut(400, cycle);
    i = ++i % divs.length;
    if (i == 0) {
      $('#progress-circle').hide();
      Break;
    };
})();

// Loading bar 60Sec
$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 1;
      $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= 100)
          clearInterval(interval);
  }, 600);
});

// processing and checks Icons
// delay range 0 - 60,000
$('.1').delay(200).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.2').delay(500).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.3').delay(3000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.4').delay(7000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.5').delay(10000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.6').delay(13000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.7').delay(15000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.8').delay(19000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.9').delay(22000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.10').delay(23000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.11').delay(25000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.12').delay(27000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.13').delay(28000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.14').delay(35000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.15').delay(39000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.16').delay(40000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.17').delay(50000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

$('.18').delay(59000).queue(function() {
  $(this).removeClass("processing-gif");
  $(this).addClass("done");
});

// Digital timer
var timeleft = 60; // start counter of 60 sec
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = "Approximately " + timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
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
  }, 6000); // Change total time here
});

 var bar = new ProgressBar.Circle(progressCircle1, {
  color: '#82beab',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 20000, // change first circle duration
  text: {
    autoStyleContainer: false
  },
  from: { color: '#82beab', width: 1 },
  to: { color: '#ff1c64', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + "%");
    }
  }
});
bar.text.style.fontSize = '1rem';

bar.animate(1.0);  // Number from 0.0 to 1.0



setTimeout(function(){
  $("#progressCircle1").fadeOut('fast');
var bar = new ProgressBar.Circle(progressCircle2, {
 color: '#82beab',
 // This has to be the same size as the maximum width to
 // prevent clipping
 strokeWidth: 4,
 trailWidth: 1,
 easing: 'easeInOut',
 duration: 20000,
 text: {
   autoStyleContainer: false
 },
 from: { color: '#82beab', width: 1 },
 to: { color: '#ff1c64', width: 4 },
 // Set default step function for all animate calls
 step: function(state, circle) {
   circle.path.setAttribute('stroke', state.color);
   circle.path.setAttribute('stroke-width', state.width);

   var value = Math.round(circle.value() * 100);
   if (value === 0) {
     circle.setText('');
   } else {
     circle.setText(value + "%");
   }
 }
});
bar.text.style.fontSize = '1rem';
bar.animate(1.0);  // Number from 0.0 to 1.0

} ,20000);


setTimeout(function(){
$("#progressCircle2").fadeOut('fast');
var bar = new ProgressBar.Circle(progressCircle3, {
 color: '#82beab',
 // This has to be the same size as the maximum width to
 // prevent clipping
 strokeWidth: 4,
 trailWidth: 1,
 easing: 'easeInOut',
 duration: 20000,
 text: {
   autoStyleContainer: false
 },
 from: { color: '#82beab', width: 1 },
 to: { color: '#ff1c64', width: 4 },
 // Set default step function for all animate calls
 step: function(state, circle) {
   circle.path.setAttribute('stroke', state.color);
   circle.path.setAttribute('stroke-width', state.width);

   var value = Math.round(circle.value() * 100);
   if (value === 0) {
     circle.setText('');
   } else {
     circle.setText(value + "%");
   }
 }
});
bar.text.style.fontSize = '1rem';

bar.animate(1.0);  // Number from 0.0 to 1.0
} ,40000);

setTimeout(function(){
  $(".progress-circle-text").fadeOut('fast');
} ,60000);
