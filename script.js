//date done
var tDate = new Date();
document.getElementById("currentDay").innerHTML = tDate.toLocaleString();


//local storage set to text box when you click button
var saveButton = document.querySelector("saveBtn");
var Input = document.querySelector("#userInput");

var save = localStorage.getItem("save");

userInput.textContent = "save";

saveButton.addEventListener("click", function (){
    localStorage.setItem("save", save);
    alert("Text saved");
});


//change color of rows with the time


