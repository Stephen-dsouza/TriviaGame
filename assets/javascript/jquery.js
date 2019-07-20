$(document).ready(function () {
  //global variables
  var TriviaQuestions = [{
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
  }];

  var CorrectAnswer = 0;
  var WrongAnswer = 0;
  var Unanswered = 0;
  var Timer = 10;
  var intervalId;
  var ButtonClickEvent;
  var QuestionNumber = 0;

  // Add click listener to start button and hide the game question and choices.
  $("#gameHeader,#gameChoices").hide();
  //On click,Enter button is hidden 
  $("#startButton").on("click", function () {
    $(this).hide();
    //Question and choices are shown
    $("#gameHeader,#gameChoices").show();
    startGamePlay();

  });

  function startGamePlay() {
    
  
    QuestionWithChoices(QuestionNumber)
    runTimer()
    
  }
  //Capture the button click
  $("#buttonOne,#buttonTwo,#buttonThree,#buttonFour").on("click", function () {
    ButtonClickEvent = $(this).text();
    console.log($(this).text());
    stopTimer()
    //if the button click matches the answer questions still remain
    if (ButtonClickEvent === TriviaQuestions[QuestionNumber].ValidAnswer && QuestionNumber < TriviaQuestions.length) {
      //increase the count of question number
      QuestionNumber++;
      //Add 10 points to the score
      CorrectAnswer+= 10;
      console.log(CorrectAnswer);
      //Go to the next Question
    }//butoon is clicked and questions are exhausted
    
    // wrong answer is clicked
    else {
      //Increase the wrong answer count
      WrongAnswer++;
      //increase the count of question number
      QuestionNumber++;
      console.log("Wrong answer");
      //Go to the next Question
    }
    startGamePlay();
  });



  console.log(CorrectAnswer);

  //function to select the question with 4 choices and display the score
  function QuestionWithChoices(q1) {
    $(".questions span").html(TriviaQuestions[q1].Question);
    $("#buttonOne").html(TriviaQuestions[q1].Choices[0]);
    $("#buttonTwo").html(TriviaQuestions[q1].Choices[1]);
    $("#buttonThree").html(TriviaQuestions[q1].Choices[2]);
    $("#buttonFour").html(TriviaQuestions[q1].Choices[3]);
    $(".score span").html(CorrectAnswer);
  }

  //start the timer for each question
  //Clear the timer
  function runTimer() {
    // clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    //  Decrease number by one.
    Timer--;
    //  Show the Timer.
    $(".timer span").html(Timer);
    //  Once number hits zero...
    if (Timer === 0) {
        stopTimer();
        QuestionNumber++;
        startGamePlay()
      }
      //  ...run the stop function.Go to next question and restart timer
      //  Alert the user that time is up.
    
  }

  function stopTimer() {
    clearInterval(intervalId);
    Timer = 10;
  }
  //Get the value of click . IF not clicked and time out go to next question

  //If end of questions give correct answer, wrong answer, unanswered questions and dispay along with restart option.

  function EndofGAme(){
  stopTimer();
      CorrectAnswer = CorrectAnswer + 10;
      $(".modal").show();}
});