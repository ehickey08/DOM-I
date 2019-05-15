let allDigits = document.querySelectorAll('.digit');
//individual counters for each digit place
let hundredthsCounter = 0;
let tenthsCounter = 0;
let onesCounter = 0;
let tensCounter = 0;

//function to be called once the setInterval is called
let count = function() {
    hundredthsCounter++; //will iterate once every 10 ms, or 1/100 of a second
    if(hundredthsCounter<10){ //while a single digit, let the last digit of timer = the counter
        allDigits[4].textContent = hundredthsCounter;
    } else {
        hundredthsCounter=0;//once I hit ten, I need to reset it to 0 and add to the next counter
        allDigits[4].textContent = hundredthsCounter;
        tenthsCounter++; //add to next column of the counter
    }

    if(tenthsCounter<10){
        allDigits[3].textContent = tenthsCounter;
    } else{
        tenthsCounter = 0;
        allDigits[3].textContent = tenthsCounter;
        onesCounter++
    }

    if(onesCounter<10){
        allDigits[1].textContent = onesCounter;
    } else{
        onesCounter = 0;
        allDigits[1].textContent = onesCounter;
        tensCounter++;
    }

    if(tensCounter===1){ //once I hit exactly 10 seconds, make it say 10:00 in red, stop the timer, and allow reset, disable pause, and bounce in animation
        allDigits[0].textContent = tensCounter;
        allDigits[1].textContent = 0;
        allDigits[3].textContent = 0;
        allDigits[4].textContent = 0;
        allDigits.forEach (el => el.classList.add('redDigit'));
        window.clearInterval(myTimer);
        resetButton.disabled = false;
        pauseButton.disabled = true; 
        digitDiv.style.animation = 'bounce-in 1.5s ease-in'; //causes bounce in animation once 10s is hit
    } else {
        allDigits[0].textContent = 0;
    }
    
}
//create the 3 buttons
let startButton = document.createElement('button');
let resetButton = document.createElement('button');
let pauseButton = document.createElement('button');
//create div to hold the buttons, as well as the other divs that will be used
let buttonDiv = document.createElement('div');
let digitDiv = document.querySelector('.digits');
let parentDiv = document.createElement('div');
let body = document.querySelector('body');

//add buttons to buttonDiv
buttonDiv.appendChild(startButton);
buttonDiv.appendChild(pauseButton);
buttonDiv.appendChild(resetButton);

//add parentDiv to body
body.appendChild(parentDiv);
//add digit and button divs to the parent
parentDiv.appendChild(digitDiv);
parentDiv.appendChild(buttonDiv);

//style the parent div
parentDiv.style.display = 'flex';
parentDiv.style.flexDirection = 'column';
parentDiv.style.width = '60%';
parentDiv.style.marginTop = '10%';
parentDiv.style.justifyContent = 'space-around';
parentDiv.style.height = '40vh'
//center the digits
digitDiv.style.textAlign = 'center';

//style the button div
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'space-between';
//create selector for all buttons
let buttons = document.querySelectorAll('button');
//style all buttons
let buttonStyling = function(el) { //function to be used as callback in .forEach below
    el.style.width = '20vh';
    el.style.height = '8vh'
    el.style.margin = '3%'
}

buttons.forEach (buttonStyling);

//add text to each button
startButton.textContent = 'Start Timer';
resetButton.textContent = 'Reset Timer';
pauseButton.textContent = 'Pause Timer';

//create eventlistener for startbutton, it will start the timer, disable the start button, and disable the reset button
startButton.addEventListener('click', (event) => {
    myTimer = window.setInterval (count, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = true;
});


let paused = false; //used to see if I need to pause or resume the timer
pauseButton.disabled = true;
pauseButton.addEventListener('click', (event) => {
    if(!paused){ //will be true the first time it is clicked
        window.clearInterval(myTimer); //stops the timer
        paused = true; 
        pauseButton.textContent = 'Resume Timer'; //change text of button
        resetButton.disabled = false; //allow for option to reset the timer
    } else { //will occur once the button is paused and is clicked as 'resume'
        myTimer = window.setInterval (count, 10); //restart timer
        paused = false;
        pauseButton.textContent = 'Pause Timer';
        resetButton.disabled = true;
    }
});

//create eventListener for resetButton
resetButton.addEventListener('click', (event) => {
    //need all digits back to 0, in black, except the colon
    allDigits.forEach(el => el.textContent = 0);
    allDigits.forEach(el => el.classList.remove('redDigit'));
    allDigits[2].textContent = ':'
    //reset all the counters
    tenthsCounter = 0;
    hundredthsCounter = 0;
    onesCounter = 0;
    tensCounter = 0;
    //in case you did so while timer was paused, reset the pause button traits
    pauseButton.textContent = 'Pause Timer';
    paused = false;
    //make the start and pause button back to normal
    startButton.disabled = false;
    pauseButton.disabled = true;
});