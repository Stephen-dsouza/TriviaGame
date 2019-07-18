$(document).ready(function () {
      //global variables
      var TriviaQuestions = [{
        Question: "Where does Season 1 opening scene take place?",
        Choices: ["Hawkins Middle School", "Will's home", "Hawkins National Laboratory", "Hawkins Police Station"],
        ValidAnswer: "Hawkins National Laboratory"      }, {
        Question: "In what decade is the Netflix series set?",
        Choices: ["1960s", "1970s", "1980s", "1990s"],
        validAnswer: "1980s"

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
      var Timer = 30;
      var intervalId;
      

      // Add click listener to start button and hide the game question and choices.On click,Questiona nd choices are shown
      $("#gameHeader,#gameChoices").hide();
      $("#startButton").on("click", function () {
        $(this).hide();
        $("#gameHeader,#gameChoices").show();
        // counter = setInterval(timer, 1000); 
        startGamePlay();

      });

      //start the game

      var i = 0;

      function startGamePlay() {

        QuestionWithChoices(i)
        run()
      }

      $("#buttonOne,#buttonTwo,#buttonThree,#buttonFour").on("click", function () {
          var id =$(this).text();
         console.log($(this).text()); 
          if (id === TriviaQuestions[i].ValidAnswer) {
            i++;
            CorrectAnswer++;
            startGamePlay()}

            else {
              Unanswered++;
              console.log("Wrong answer");
              startGamePlay()
            }
          });


        
         console.log(CorrectAnswer);
         console.log(CorrectAnswer);
        //display the question with 4 choices
        function QuestionWithChoices(q1) {
          $(".questions span").html(TriviaQuestions[q1].Question);
          $("#buttonOne").html(TriviaQuestions[q1].Choices[0]);
          $("#buttonTwo").html(TriviaQuestions[q1].Choices[1]);
          $("#buttonThree").html(TriviaQuestions[q1].Choices[2]);
          $("#buttonFour").html(TriviaQuestions[q1].Choices[3]);
        }

        //start the timer for each question

        //Clear the timer
        function run() {
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);;
        }

        function decrement() {
          //  Decrease number by one.
          Timer--;
          //  Show the Timer.
          $(".timer span").html(Timer);
          //  Once number hits zero...
          if (Timer === 0) {
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            alert("Time Up!");

          }
        }

        function stop() {
          clearInterval(intervalId);
        }
        //Get the value of click . IF not clicked and time out go to next question

        //If end of questions give correct answer, wrong answer, unanswered questions and dispay along with restart option.
      });