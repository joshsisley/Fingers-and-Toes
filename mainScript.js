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
    var intervalId = setInterval(function(){
        console.log('interval gets called');
        var newNum = baseNum++;
        if (newNum < maxNumber) {
            console.log(newNum);
            document.getElementById('displayed-number').innerHTML = newNum.toString();
        }
        if (newNum == maxNumber) {
            document.getElementById('displayed-number').innerHTML = newNum.toString();
            clearInterval(intervalId);
        }
    }, 1000);
}