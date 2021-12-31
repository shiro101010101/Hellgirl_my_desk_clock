



//display current time
console.log("readjs");


var sound = new Audio("./jigoku.mp3")
sound.play()

function realtimeClock(){

  var rtClock = new Date();
  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  var amPM = (hours <12) ? "AM" : "PM";

  hours = (hours > 12 ) ? hours - 12 : hours;

  hours =("0"+ hours).slice(-2);
  minute = ("0"+minutes).slice(-2);
  seconds = ("0"+seconds).slice(-2);

  document.getElementById('clock').innerHTML=
  hours + " : " + minutes +":" +seconds + " " +amPM;
  var t = setTimeout(realtimeClock,500);

}

  console.log("function realtimeClock");
