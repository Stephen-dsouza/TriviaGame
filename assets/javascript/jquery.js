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
      }];

      var correctAnswer = 0;
      var wrongAnswer = 0;
      var unanswered = 0;
      var timer = 5;
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

      function checkIfQuestionsAvailable() {
        if (questionNumber < triviaQuestions.length) {
          return true;
        } else {
          $("#gameHeader,#gameChoices").hide();
          $("#gameScore").show();
          $(".answeredScore span").html(correctAnswer);
          $(".unansweredScore span").html(unanswered);
          $(".wrongAnswerScore span").html(wrongAnswer);
          $("#restartButton").on("click", function () {
              $("#gameScore").hide();
              //Question and choices are shown
              $("#gameContainer").show();
          });
        }

      }

      function startGamePlay() {
        questionWithChoices(questionNumber)
        runTimer()

      }
      //Capture the button click
      $(".btn").on("click", function () {
        buttonClickEvent = $(this).text();
        //stop the timer as click has been captured
        stopTimer()
        //increase the count of question number
        questionNumber++;
        if (checkIfQuestionsAvailable()) {
          //if the button click matches the answer questions still 
          if (buttonClickEvent === triviaQuestions[questionNumber - 1].ValidAnswer) {
            //Add 10 points to the score
            correctAnswer ++;
            $(".score span").html(correctAnswer);
          }
          // wrong answer is clicked
          else {
            //Increase the wrong answer count
            wrongAnswer++;
          }
          //Go to the next Question
          startGamePlay();
        } 
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
            startGamePlay()}
          }
          //  ...run the stop function.Go to next question and restart timer
          //  Alert the user that time is up.

        }

        function stopTimer() {
          clearInterval(intervalId);
          timer = 5;
        }
        //Get the value of click . IF not clicked and time out go to next question

        //If end of questions give correct answer, wrong answer, unanswered questions and dispay along with restart option.

      
      });