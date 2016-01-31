/**
 * Created by joshuasisley on 1/30/16.
 */
// Starts the timer when the button is pressed
function startTimer() {
    var inputNumber = document.getElementById('number-input').value;
    console.log('here is the input number');
    console.log(inputNumber);
    countUp(inputNumber);
}

function countUp(maxNumber) {
    var baseNum = 1;
    var displayedNumber = document.getElementById('displayed-number');
    var fingersDiv = document.getElementById('fingers-box');
    var toesDiv = document.getElementById('toes-box');
    var intervalId = setInterval(function(){
        console.log('interval gets called');
        var newNum = baseNum++;
        if (newNum < maxNumber) {
            if (newNum % 5 === 0 && newNum % 3 === 0) {
                fingersDiv.style.backgroundColor = 'green';
                toesDiv.style.backgroundColor = 'red';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 5 === 0) {
                fingersDiv.style.backgroundColor = 'transparent';
                toesDiv.style.backgroundColor = 'red';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 3 === 0) {
                toesDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.backgroundColor = 'green';
                displayedNumber.innerHTML = newNum.toString();
            }
            else {
                toesDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.backgroundColor = 'transparent';
                displayedNumber.innerHTML = newNum.toString();
            }
        }
        if (newNum == maxNumber) {
            if (newNum % 5 === 0 && newNum % 3 === 0) {
                fingersDiv.style.backgroundColor = 'green';
                toesDiv.style.backgroundColor = 'red';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 5 === 0) {
                fingersDiv.style.backgroundColor = 'transparent';
                toesDiv.style.backgroundColor = 'red';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 3 === 0) {
                toesDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.backgroundColor = 'green';
                displayedNumber.innerHTML = newNum.toString();
            }
            else {
                toesDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.backgroundColor = 'transparent';
                displayedNumber.innerHTML = newNum.toString();
            }
            displayedNumber.innerHTML = newNum.toString();
            clearInterval(intervalId);
        }
    }, 1000);
}