// Display time remaining in span with id dispTimerem.


// For each question, choose the right answer. 

/* Correct answers #q1 - #q1option1; #q2 - #q2option2; #q3 - #q3 - #q3option1; #q4 - #q4option4. */

var timeRem;
var intervalId;

var correctAnswers = ["q1option1", "q2option2", "q3option1", "q4option4"];
var userGuesses = [];
var numCorrect = 0;
var numIncorrect = 0;

var isGamestart = false;

// Functions

//startGame();

function startGame() {
    timeRem = 10;
    $("#dispTimerem").text(timeRem);
    intervalId = setInterval(dispTimerem, 1000);
    isGamestart = true;
    numCorrect = 0; //reset #correct
    numIncorrect = 0; //reset # incorrect
   
    if(timeRem<=0){
        clearInterval(intervalId);
        stopGame();
    }

   
}

//Display time remaining



function dispTimerem (){
    timeRem--;
    $("#dispTimerem").text(timeRem);

}
//Stop the game if all questions are answered or if remTeim=<0;

function stopGame() {

    
    q1Disable();
    q2Disable();
    q3Disable();
    q4Disable();

    }


//Event Listeners for radio buttons. All radio buttons are in a class form-check-input

//Question 1
$(".quest1").on("click", function(){
    var ansValue = $( "input[name='q1']:checked" ).val();
    console.log(ansValue);
    q1Disable();
    //check if correct. If correct increment numCorrect, else increment numIncorrect.
    if(correctAnswers.includes(String(ansValue))){
            
        console.log("great!");
        numCorrect++;
        console.log({numCorrect});
    } else{
        numIncorrect++;
        console.log({numIncorrect});

    }

    

});

//Question 2

$(".quest2").on("click", function(){
    var ansValue = $( "input[name='q2']:checked" ).val();
    console.log(ansValue);
    q2disable();
    //check if correct. If correct increment numCorrect, else increment numIncorrect.
    if(correctAnswers.includes(String(ansValue))){
            
        console.log("great!");
        numCorrect++;
        console.log({numCorrect});
    } else{
        numIncorrect++;
        console.log({numIncorrect});
    }

});

//Question 3

$(".quest3").on("click", function(){
    var ansValue = $( "input[name='q3']:checked" ).val();
    console.log(ansValue);
    userGuesses.push(ansValue);
    q3disable();
     //check if correct. If correct increment numCorrect, else increment numIncorrect.
     if(correctAnswers.includes(String(ansValue))){
            
        console.log("great!");
        numCorrect++;
        console.log({numCorrect});
    } else{
        numIncorrect++;
        console.log({numIncorrect});
    }   
});

//Question 4

$(".quest4").on("click", function(){
    var ansValue = $( "input[name='q4']:checked" ).val();
    console.log(ansValue);
    userGuesses.push(ansValue);
    q4disable();
    //check if correct. If correct increment numCorrect, else increment numIncorrect.
    if(correctAnswers.includes(String(ansValue))){
            
        console.log("great!");
        numCorrect++;
        console.log({numCorrect});
    } else{
        numIncorrect++;
        console.log({numIncorrect});
    }
});

//Disable questions

//Q1
//How do I select the button?

 
function q1Disable(){
    document.getElementById("q1option1").disabled = true;
    document.getElementById("q1option2").disabled = true;
    document.getElementById("q1option3").disabled = true;
    document.getElementById("q1option4").disabled = true;
}

function q2disable(){
    document.getElementById("q2option1").disabled = true;
    document.getElementById("q2option2").disabled = true;
    document.getElementById("q2option3").disabled = true;
    document.getElementById("q2option4").disabled = true;
}

function q3disable(){
    document.getElementById("q3option1").disabled = true;
    document.getElementById("q3option2").disabled = true;
    document.getElementById("q3option3").disabled = true;
    document.getElementById("q3option4").disabled = true;
}

function q4disable(){
    document.getElementById("q4option1").disabled = true;
    document.getElementById("q4option2").disabled = true;
    document.getElementById("q4option3").disabled = true;
    document.getElementById("q4option4").disabled = true;
}

//Start Game



$(".startGame").on("click", startGame);

//check if game is up. This happens when all questions are answered or when time is up. when game is over, reset.




