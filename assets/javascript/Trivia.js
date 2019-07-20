$(document).ready(function () {
  //global variables
  var triviaQuestions = [{
      Question: "Where does Season 1 opening scene take place?",
      Choices: ["Hawkins Middle School", "Will's home", "Hawkins National Laboratory", "Hawkins Police Station"],
      ValidAnswer: "Hawkins National Laboratory"
    }, {
      Question: "In what decade is the Netflix series set?",
      Choices: ["1960s", "1970s", "1980s", "1990s"],
      ValidAnswer: "1980s"

    }, {
      Question: "Wills Favorite song from the punk rock band The Clash is…",
      Choices: ["Magnificent Seven", "Should I Stay or Should I Go", "Straight to Hell", "Lost in the Supermarket"],
      ValidAnswer: "Should I Stay or Should I Go"

    }, {
      Question: "Name of the boys favorite board game.",
      Choices: ["Ghost Castle", "Dungeons & Dragons", "Hero Quest", "Crossbows & Catapults"],
      ValidAnswer: "Dungeons & Dragons"
    }, {
      Question: "Eleven's favorite food is ____",
      Choices: ["Twinkies", "Eggos", "Devil Dogs", "Pop Tarts"],
      ValidAnswer: "Eggos"
    },
    {
      Question: "The number on Eleven’s arm reads…",
      Choices: ["0011", "11", "011", "00011"],
      ValidAnswer: "011"
    },
    {
      Question: "The parallel dimension inhabited by the Demogorgon is referred to as…",
      Choices: ["The Down Under", "The Upside World", "The Upside Down", "The Other Place"],
      ValidAnswer: "The Upside Down"
    },
    {
      Question: "What does Jonathan give Will as he recovers in the hospital?",
      Choices: ["A Movie Ticket", "A Mixtape", "A VHS Movie", "A Rock Band Poster"],
      ValidAnswer: "A Mixtape"
    },
    {
      Question: "What is Bob's Halloween costume?",
      Choices: ["Dragon", "Frankenstein", "Werewolf", "Count Dracula"],
      ValidAnswer: "Count Dracula"
    },
    {
      Question: "Complete Dustin's quote: She will not be able to resist these...",
      Choices: ["Eyes", "Pearls", "Cheeks", "Looks"],
      ValidAnswer:"Pearls"
    }
  ];

var correctAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
var timer = 11;
var intervalId;
var buttonClickEvent;
var questionNumber = 0;

// Add click listener to start button and hide the game question and choices.
$("#gameHeader,#gameChoices,#gameScore").hide();
//On click,Enter button is hidden 
$("#startButton").on("click", function () {
  $(this).hide();
  $("#gameScore").hide();
  //Question and choices are shown
  $("#gameHeader,#gameChoices").show();
  startGamePlay();

});
//Function to check if all the questions have been displayed
function checkIfQuestionsAvailable() {
  //IF questions still available then loop
  if (questionNumber < triviaQuestions.length) {
    return true;
  } 
  //IF all the questions are displayed then show the correct/unAnswered and wrong answer scores
  else {
    $("#gameHeader,#gameChoices").hide();
    $("#gameScore").show();
    $(".answeredScore span").html(correctAnswer);
    $(".unansweredScore span").html(unanswered);
    $(".wrongAnswerScore span").html(wrongAnswer);
    $("#restartButton").on("click", function () {
      
        
        $("#gameScore").hide();
        //Question and choices are shown
        $("#gameHeader,#gameChoices").show();
        reset();
        startGamePlay();
      
      

      
    });
  }

}
//Thi starts the question and timer
function startGamePlay() {
  questionWithChoices(questionNumber)
  runTimer()

}
//Capture the button click
$(".btn").on("click", function () {
  buttonClickEvent = $(this).text();
  //stop the timer as click has been captured
  stopTimer();
  
  //if the button click matches the answer questions still 
  if (buttonClickEvent === triviaQuestions[questionNumber].ValidAnswer) {
    //Add 1 point to the score
    correctAnswer++;
    $(".score span").html(correctAnswer);
  }
  // wrong answer is clicked
  else {
    //Increase the wrong answer count
    wrongAnswer++;
  }

  //Increae the question number count
  questionNumber++;
  // Check if more questions are available to be displayed
  checkIfQuestionsAvailable();
  //Go to the next Question
  startGamePlay();

});

//function to select the question with 4 choices and display the score
function questionWithChoices(q1) {
  $(".questions span").html(triviaQuestions[q1].Question);
  $("#buttonOne").html(triviaQuestions[q1].Choices[0]);
  $("#buttonTwo").html(triviaQuestions[q1].Choices[1]);
  $("#buttonThree").html(triviaQuestions[q1].Choices[2]);
  $("#buttonFour").html(triviaQuestions[q1].Choices[3]);
}

//start the timer for each question
//Clear the timer
function runTimer() {
  // clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  //  Decrease number by one.
  timer--;
  //  Show the Timer.
  $(".timer span").html(timer);
  //  Once number hits zero...
  if (timer === 0) {
    stopTimer();
    questionNumber++;
    unanswered++;
    console.log(unanswered);
    if (checkIfQuestionsAvailable()) {
      startGamePlay()
    }
  }
  //  ...run the stop function.Go to next question and restart timer

}

function stopTimer() {
  clearInterval(intervalId);
  timer = 11;
}

function reset(){
  $(".score span").empty();
correctAnswer = 0;
wrongAnswer = 0;
unanswered = 0;
timer = 11;
intervalId;
buttonClickEvent;
questionNumber = 0;


}
});