
let date;
date = new Date();
document.getElementById("currentDay").innerHTML = Date();



var container = document.getElementById("container");
//var row = container.insertRow()
   



var timeSlots = document.querySelector(".container")
function days(current) {
    var week = new Array();
    var first = ((current.getDate() - current.getDay()) + 1);
    for (var i = 0; i < 7; i++) {
      week.push(
        new Date(current.setDate(first++))
      );
    }
  }


