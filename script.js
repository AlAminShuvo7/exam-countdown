// Officer Cash
var oc = setInterval(go, 1000, new Date("2025-08-08T10:00:00+06:00").getTime(), "oc-22");

//Officer General
var og = setInterval(go, 1000, new Date("2025-08-15T10:00:00+06:00").getTime(), "og-22");

//47th BCS Preliminary
var bsc47p = setInterval(go, 1000, new Date("2025-09-19T10:00:00+06:00").getTime(), "bcs-47p");

// 49th BCS
var bsc49 = setInterval(go, 1000, new Date("2025-10-03T10:00:00+06:00").getTime(), "bcs-49");

// 47th BCS Written 
var bsc47w = setInterval(go, 1000, new Date("2025-11-27T10:00:00+06:00").getTime(), "bcs-47w");

function go(timeStamp, n) {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = timeStamp - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
  }
  if (hours < 10) {
        hours = "0" + hours;
  }
  let paint,r,g,b,temp;
    if (days > 60) {
        paint = "rgb(0,0,255)";
    }
    else if (days <= 60 && days > 30) {
        temp = days - 30;
        r = 0;
        g = Math.floor((30 - temp) * 4.25);
        b = Math.floor(8.5 * temp);
        paint = "rgb(" + r + "," + g + "," + b + ")";
    }
    else if (days <= 30 && days >= 0) {
        temp = days;
        r = Math.floor((30 - temp) * 8.5);
        g = Math.floor(4.25 * temp);
        b = 0;
        paint = "rgb(" + r + "," + g + "," + b + ")";
    }
  if (days < 10) {
        days = "0" + days;
  }
    
  // Output the result in an element with id="demo"
  document.getElementById(n).innerHTML = days + "Day(s) " + hours + ":"
  + minutes + ":" + seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
      document.getElementById(n).innerHTML = "EXPIRED";
    }
    
    document.getElementById(n).style.color = paint;
}