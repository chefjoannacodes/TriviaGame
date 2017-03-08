$(document).ready(function() {

    //Audio Buttons
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/audio/11 Lovin', Touchin',  Squeezin'.m4a");

    var audioElementPetty = document.createElement("audioPetty");
    audioElementPetty.setAttribute("src", "Assets/audio/01 American Girl.m4a");


    //First Questions music buttons
    var journeyAudio = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/audio/02 Don't Stop Believin'.m4a", "02 Don't Stop Believin'.ogg");


    $(".journeyPlayButton").on("click", function() {
        audioElement.play();
    });

    $(".journeyPauseButton").on("click", function() {
        audioElement.pause();
    });

    //Second Question music buttons

    var song = document.createElement("audio");
    song.setAttribute("src", "Assets/audio/01 American Girl.m4a");

    $(".pettyPlayButton").on("click", function() {
        song.play();
        console.log("play", song);
    });

    $(".pettyPauseButton").on("click", function() {
        song.pause();
    });

    //Third Question music buttons
    var freddie = document.createElement("audio");
    freddie.setAttribute("src", "Assets/audio/07 Bicycle Race.m4a");

    $(".queenPlayButton").on("click", function() {
        freddie.play();
    });
    $(".queenPauseButton").on("click", function() {
        freddie.pause();
    });

    // //will hold the correct answer for each question
    // var rightAnswers = ["Journey", "Tom Petty"];
    // //answer is going to be broken into data valuation
    // var answerIntrepreter = [];
    // //will hold all possible answer selction
    // var userSelection = [];
    // will keep track of right or wrong input
    var values = []; //add clicked choices to array


    var winCounter = 0;
    var loseCounter = 0;


    //start on click.
    //this code will run as soon as the page loads
    // window.onload = function() {
    //     $(".start-button").on("click", stopwatch.count);
    // };
    // //variable that will hold our setInterval that runs the stopwatch
    // var intervalId;


    //to lock screen once user chooses an answer
    function skm_LockScreen(str) {

        var lock = document.getElementById('skm_LockPane');
        if (lock)
            lock.className = 'LockOn';
        $(".LockOn").html("Processing your answer");
    };




    setTimeout(start, 1000 * 2);
    setTimeout(timeConverter, 1000 * 2);
    setTimeout(count, 1000 * 2);
    console.log("start", start);
    console.log("time convert", timeConverter);
    console.log("set timeout", setTimeout);




    //timer not in object ===========================
    var time = 20;

    function reset() {

        time = 20;

        $("#time-left").html("00:30");
    };


    function start() {
        intervalId = setInterval(count, 1000);
    };

    function stop() {
        console.log("stopping");
        clearInterval(intervalId);
    };

    function count() {
        if (time === 0) {
            alert("Time's up");
            stop();
        } else {
            time--;
            var converted = timeConverter(time)
            $("#time-left").html(converted);
        };
    };


    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";

        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    };


    //end Timer functions ===========================


    //Question 1
    //object that hold our question, choices, right answer and explanation
    var quiz = {
        Question1: {
            question: "Q1: Who created the song Don't Stop Believin",
            imageUrl: "assets/images/journey.jpg",
            choices: [
                "Boston",
                "Journey",
                "Van Halen",
                "Guns and Roses",
            ],
            correct: "Journey",
            explanation: "Journey released Don't Stop Believin on the Escape Album in 1981."
        }, //first object closing

    }; //var quiz object closing

    $(".band-image").attr("src", quiz.Question1.imageUrl);
    console.log("I found my " + quiz.Question1.imageUrl);

    //  Start Game function =======================
    // 1. Initialize the start button with the timer. make clickable
    // 2. We want to clear the page
    // 3. We want to go to question 1 display after clearing the page
    // 4. We want to make sure to clear all data first
    function hide() {
        $(".container:not(.start-button)").hide();
        $(".start-button").appendTo("body");

    };
    hide();


    function startGame() {
        $(".start-button").show(100000);
        $(".start-button").click(function() {
            $(".start-button").hide();
            $(".second-question").hide();
            //$(".container").show();
            $(".container").show();
            $("#category1").hide();
            $("#correctAnswer").hide();
            $(".third-question").hide();
            // window.onload = function() {
            //     $(".start-button").on("click", reset);

            // };

        });
    };
    startGame();

    // end Start Game+++++++ 

    /* Check Answer function ==========================
    1. Compare the choice the user picks to see if it matches the answer
    2. I want a conditional statement to see if it is the answer
    3. If the letter is right, print correct and explanation, if wrong print wrong with explanation
    function checkAnswer(choice){ //

    }
    end check answer function +++++++*/


    // Click choice function=============
    //    1.It's going to process the choice that the user cliked on
    //    2. it's going to pass it through the checkAnswer function
    //      3. If choice was clicked, lock other choices. Then run check answer function
    // document.onkeyup = function(){

    // };


    //User clicks on an anwser
    //Storing values for choices in an array
    $("#q1a").click(function(i) {
        values.push($(this).val()); //add value to array
        //var a = $(this).attr("value");
        //alert(a);
        checkWrong();
        firstSequence();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);
    });


    $("#q1b").click(function(i) {
        values.push($(this).val()); //add value to array
        //var b = $(this).attr("value");
        //alert(b);
        checkChoice();
        firstSequence();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);

    });

    $("#q1c").click(function(i) {
        values.push($(this).val()); //add value to array
        //var c = $(this).attr("value");
        //alert(c);
        checkWrong();
        firstSequence();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);
    });


    $("#q1d").click(function(i) {
        values.push($(this).val()); //add value to array
        //var d = $(this).attr("value");
        //alert(d);
        checkWrong();
        firstSequence();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);

    });

    /////end question 1 value clicks


    $("#q2a").click(function(i) {
        values.push($(this).val()); //add value to array
        //var a = $(this).attr("value");
        //alert(a);
        checkWrong();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);
        displayQuestionThree();
    });


    $("#q2b").click(function(i) {
        values.push($(this).val()); //add value to array
        //var b = $(this).attr("value");
        //alert(b);
        checkWrong();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);
        displayQuestionThree();

    });

    $("#q2c").click(function(i) {
        values.push($(this).val()); //add value to array
        //var c = $(this).attr("value");
        //alert(c);
        checkWrong();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);
        displayQuestionThree();
    });


    $("#q2d").click(function(i) {
        values.push($(this).val()); //add value to array
        //var d = $(this).attr("value");
        //alert(d);
        checkChoice();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);
        displayQuestionThree();

    });

    //Storing values for choices in an array
    $("#q3a").click(function(i) {
        values.push($(this).val()); //add value to array
        //var a = $(this).attr("value");
        //alert(a);
        checkWrong();
        endGame();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);
    });


    $("#q3b").click(function(i) {
        values.push($(this).val()); //add value to array
        //var b = $(this).attr("value");
        //alert(b);
        checkWrong();
        endGame();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);

    });

    $("#q3c").click(function(i) {
        values.push($(this).val()); //add value to array
        //var c = $(this).attr("value");
        //alert(c);
        checkChoice();
        endGame();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);
    });


    $("#q3d").click(function(i) {
        values.push($(this).val()); //add value to array
        //var d = $(this).attr("value");
        //alert(d);
        checkWrong();
        endGame();
        // skm_LockScreen(); //locks screen after clicked
        console.log("our value array", values);

    });

    function checkChoice() {

        document.getElementById("q1b", "q2d", "q3c").checked = true;
        alert("correct!!!!");
        winCounter++;
        $("#win-counter").html(winCounter);
        console.log("our check choice funciton", checkChoice);
        $("#win-counter").html("Wins: " + winCounter);

        console.log("second display", displayQuestionTwo);

    };

    function checkWrong() {
        document.getElementById("q1a", "q1c", "q1d", "q2a", "q2b", "q2c", "q3a", "q3b", "q3d");
        alert("sorry, wrong answer");
        loseCounter++;
        console.log("our lose counter", loseCounter);
        $("#lose-counter").html("Losses: " + loseCounter);
    };

    // $("#explanation1")
    // .append(quiz.Question1.explanation);
    // .css("color", white);

    //console.log("the explanation" + quiz.Question1.explanation);

    function firstSequence() {
        nextQuestion();
        console.log("second display", displayQuestionTwo);
        displayQuestionTwo();

    };




    //this function will clear the old question after an answer is selected and display the new one
    function nextQuestion() {
        $(".container:not(#time-left, .scoreboard, #lose-counter, #win-counter )").hide();
        $("#time-left, .scoreboard, #lose-counter, #win-counter").appendTo("body");
        $("#category1").hide();
        $("#correctAnswer").hide();

    };

    //display second question
    function displayQuestionTwo() {
        $(".second-question").show();
        $(".second-question").appendTo("body");
        $("#category2, .band-image, .journeyPlayButton, .journeyPlayButton").hide();


    };

    function displayQuestionThree() {
        $(".second-question").hide();
        $("#time-left, .scoreboard, #lose-counter, #win-counter").appendTo("body");
        $("#category3").hide();

        $(".third-question").show();
        $(".third-question").appendTo("body");
        $(".band-image-3, .queenPlayButton, .queenPauseButton").show();

    };

    function endGame() {
        $(".main-section:not(.band-image, category1)").hide();
        $(".band-image, category1").appendTo("body");

        $(".second-question:not(.band-image-2, category2)").hide();
        $(".band-image-2, category2").appendTo("body");

        $(".third-question:not(.band-image-3, category3)").hide();
        $(".band-image-3, category3").appendTo("body");

        $(".container, .second-question, .third-question").hide();
        $("#lose-counter, #win-counter").show();
        alert("That's all folks! Thanks for playing");
    };



    /* Set Timeout function
    1. display timer after the first question loads and display. give 30 seconds
    2. disappear once user hits a choice
    3. If no click in 30 seconds, alert time has run out. Start Game or go to next question.

    */

}); //Document ready closing
