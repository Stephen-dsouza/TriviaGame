$(document).ready(function () {
  //global variables
  var CorrectAnswer = 0;
  var WrongAnswer = 0;
  var Unanswered = 0;
  var Timer = 30;

  var TriviaQuestions = [{
    Question: "Where does Season 1 opening scene take place?",
    Choices: ["Hawkins Middle School", "Will's home", "Hawkins National Laboratory", "Hawkins Police Station"],
    ValidAnswer: 2
  }, {
    question: "In what decade is the Netflix series set?",
    choices: ["1960s", "1970s", "1980s", "1990s"],
    validAnswer: 2

  }, {
    Question: "Wills Favorite song from the punk rock band The Clash is…",
    Choices: ["Magnificent Seven", "Should I Stay or Should I Go", "Straight to Hell", "Lost in the Supermarket"],
    ValidAnswer: 1

  }, {
    Question: "Name of the boys favorite board game.",
    Choices: ["Ghost Castle", "Dungeons & Dragons", "Hero Quest", "Crossbows & Catapults"],
    ValidAnswer: 1
  }];
  // Add click listener to start button 


  $("#startButton").on("click", function () {
    $(this).hide();
    // counter = setInterval(timer, 1000); 
    startGamePlay();
    
  });

  //start the game
 

  function startGamePlay() {
    $(".questions span").append(TriviaQuestions[0].Question);
    $(".buttonOne").append(TriviaQuestions[0].Choices[0]);


  }
  //display the question with 4 choices
 

 
  //start the timer for each question



  //Get the value of click . IF not clicked and time out go to next question

  //If end of questions give correct answer, wrong answer, unanswered questions and dispay along with restart option.
});