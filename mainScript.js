/**
 * Created by joshuasisley on 1/30/16.
 */

var fingersDiv = document.getElementById('fingers-box');
var toesDiv = document.getElementById('toes-box');
// Starts the timer when the button is pressed
function startTimer() {
    var inputNumber = document.getElementById('number-input').value;
    console.log('here is the input number');
    console.log(inputNumber);
    countUp(inputNumber);
}

function restartTimer() {
    var inputNumber = document.getElementById('number-input').value;
    document.getElementById('displayed-number').innerHTML = "0";
    countUp(inputNumber);
}

function clearInput() {
    clearAllIntervals();
    document.getElementById('number-input').value = "";
    document.getElementById('displayed-number').innerHTML = "0";
    fingersDiv.style.color = '#555';
    toesDiv.style.color = '#555';
    toesDiv.style.backgroundColor = 'transparent';
    fingersDiv.style.backgroundColor = 'transparent';
}

function clearAllIntervals() {
    // Make sure to clear out all old intervals to restart or start again
    for (var i = 1; i < 99999; i++) {
        clearInterval(i);
    }
}

function countUp(maxNumber) {
    clearAllIntervals();
    var baseNum = 1;
    var displayedNumber = document.getElementById('displayed-number');
    var intervalId = setInterval(function(){
        console.log(intervalId);
        console.log('interval gets called');
        var newNum = baseNum++;
        console.log(newNum);
        if (newNum < maxNumber) {
            if (newNum % 5 === 0 && newNum % 3 === 0) {
                fingersDiv.style.backgroundColor = 'cornflowerblue';
                fingersDiv.style.color = 'white';
                toesDiv.style.backgroundColor = 'cornflowerblued';
                toesDiv.style.color = 'white';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 5 === 0) {
                fingersDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.color = '#555';
                toesDiv.style.backgroundColor = 'cornflowerblue';
                toesDiv.style.color = 'white';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 3 === 0) {
                toesDiv.style.backgroundColor = 'transparent';
                toesDiv.style.color = '#555';
                fingersDiv.style.backgroundColor = 'cornflowerblue';
                fingersDiv.style.color = 'white';
                displayedNumber.innerHTML = newNum.toString();
            }
            else {
                toesDiv.style.color = '#555';
                fingersDiv.style.color = '#555';
                toesDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.backgroundColor = 'transparent';
                displayedNumber.innerHTML = newNum.toString();
            }
        }
        if (newNum == maxNumber) {
            if (newNum % 5 === 0 && newNum % 3 === 0) {
                fingersDiv.style.backgroundColor = 'cornflowerblue';
                fingersDiv.style.color = 'white';
                toesDiv.style.backgroundColor = 'cornflowerblue';
                toesDiv.style.color = 'white';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 5 === 0) {
                fingersDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.color = '#555';
                toesDiv.style.backgroundColor = 'cornflowerblue';
                toesDiv.style.color = 'white';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 3 === 0) {
                toesDiv.style.backgroundColor = 'transparent';
                toesDiv.style.color = '#555';
                fingersDiv.style.backgroundColor = 'cornflowerblue';
                fingersDiv.style.color = 'white';
                displayedNumber.innerHTML = newNum.toString();
            }
            else {
                fingersDiv.style.color = '#555';
                toesDiv.style.color = '#555';
                toesDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.backgroundColor = 'transparent';
                displayedNumber.innerHTML = newNum.toString();
            }
            displayedNumber.innerHTML = newNum.toString();
            clearInterval(intervalId);
        }
    }, 1000);
}