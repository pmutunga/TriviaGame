// Display time remaining in span with id dispTimerem.


// For each question, choose the right answer. 

/* Correct answers #q1 - #q1option1; #q2 - #q2option2; #q3 - #q3 - #q3option1; #q4 - #q4option4. */

var timeRem;
var intervalId;//Variable that will hold our interval ID when the user clicks start. We will use it later to stop the counter.

var correctAnswers = ["q1option1", "q2option2", "q3option1", "q4option4"];
var userGuesses = [];
var numCorrect = 0;
var numIncorrect = 0;
var isGamestart = false;
var questsAnswered = 0; //this tracks the number of answered questions


//Questions 


$(".quest1, .quest2, .quest3, .quest4").css("visibility", "hidden");

$("#userMsg").css("visibility", "hidden"); //Hide time remaining

// Functions




//check if game is up. This happens when all questions are answered or when time is up. when game is over, reset.

//startGame(); This function runs when a user clicks the start button. It displays time remaining and allows user to select answers.

function startGame() {
    $(".startGame").css("visibility", "hidden");//hide start button
    
    //reset isGamestart, numCorrect and numIncorrect
    
    isGamestart = true;
    numCorrect = 0; //reset #correct
    numIncorrect = 0; //reset # incorrect
    userGuesses = [];
    questsAnswered = 0;
    timeRem = 10; //set and display remaining time
    
    $("#userMsg").css("visibility", "visible"); //show time remaining
    $("#dispuserMsg").text(""); //Clear user message
    $("#dispTimerem").text(timeRem);

    $("#dispCorrect").text(" ");
    $("#dispIncorrect").text(" ");

    clearInterval(intervalId); ////  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    intervalId = setInterval(dispTimerem, 1000);
    
    
    $(".quest1, .quest2, .quest3, .quest4").css("visibility", "visible"); //display questions
    $("input[type=radio]").attr('disabled', false);
    $( ".quest1rad, .quest2rad, .quest3rad, .quest4rad" ).prop( "checked", false );//uncheck all radio buttons


    }
  

function dispTimerem() {
   
    if(timeRem!=0){
        timeRem--; //decrement time remaining by 1
        $("#dispTimerem").text(timeRem);
    } else {
        stopGame();
        $("#dispuserMsg").text("Time is Up!"); //display user message
        $("#dispCorrect").text("Correct Answers: " + numCorrect + " ");
        $("#dispIncorrect").text("Incorrect Answers: " + numIncorrect);
    }
   
}


//Stop the game if all questions are answered or if remTeim=<0;

function stopGame() {
   
    clearInterval(intervalId); //stop timer

    //disable question selection
    
    // q1disable();
    // q2disable();
    // q3disable();
    // q4disable();

    //show start button
    $(".startGame").css("visibility", "visible");

    }


//Event Listeners for radio buttons. All radio buttons are in a class form-check-input

//Question 1
$(".quest1rad").on("click", function(){
    var ansValue = $( "input[name='q1']:checked" ).val();
    console.log(ansValue);
    questsAnswered++;
    $(".quest1rad").attr('disabled', true);
    //check if correct. If correct increment numCorrect, else increment numIncorrect.
    if(correctAnswers.includes(String(ansValue))){
            
        console.log("great!");
        numCorrect++;
        console.log({numCorrect});
    } else{
        numIncorrect++;
        console.log({numIncorrect});

    }
 
    checkifAnswered();
});

//Question 2

$(".quest2rad").on("click", function(){
    var ansValue = $( "input[name='q2']:checked" ).val();
    console.log(ansValue);
    questsAnswered++;
    $(".quest2rad").attr('disabled', true);
    //check if correct. If correct increment numCorrect, else increment numIncorrect.
    if(correctAnswers.includes(String(ansValue))){
            
        console.log("great!");
        numCorrect++;
        console.log({numCorrect});
    } else{
        numIncorrect++;
        console.log({numIncorrect});
    }
    checkifAnswered();
});

//Question 3

$(".quest3rad").on("click", function(){
    var ansValue = $( "input[name='q3']:checked" ).val();
    console.log(ansValue);
    questsAnswered++;
    userGuesses.push(ansValue);
    $(".quest3rad").attr('disabled', true);
     //check if correct. If correct increment numCorrect, else increment numIncorrect.
     if(correctAnswers.includes(String(ansValue))){
            
        console.log("great!");
        numCorrect++;
        console.log({numCorrect});
    } else{
        numIncorrect++;
        console.log({numIncorrect});
    }   
    checkifAnswered();
});

//Question 4

$(".quest4rad").on("click", function(){
    var ansValue = $( "input[name='q4']:checked" ).val();
    console.log(ansValue);
    questsAnswered++;
    userGuesses.push(ansValue);
    $(".quest4rad").attr('disabled', true);
    //check if correct. If correct increment numCorrect, else increment numIncorrect.
    if(correctAnswers.includes(String(ansValue))){
            
        console.log("great!");
        numCorrect++;
        console.log({numCorrect});
    } else{
        numIncorrect++;
        console.log({numIncorrect});
    }
    checkifAnswered();
});



//Check if all questions are answered

function checkifAnswered(){
    console.log(questsAnswered);
    if(questsAnswered !== 4){
        $("#dispTimerem").text(timeRem);
        $("#dispuserMsg").text("Keep going ");
    } else {
        console.log("you've answered all questions!");
        $("#dispuserMsg").text("You've answered all questions!");
        
        $("#dispCorrect").text("Correct Answers: " + numCorrect + " ");
        $("#dispIncorrect").text("Incorrect Answers: " + numIncorrect);
        stopGame();
    }
    
}


//Start Game

$(document).ready(function(){
    $(".startGame").on("click", startGame);
});
