$(document).ready(function() {

    // Audio Buttons
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/audio/11 Lovin', Touchin',  Squeezin'.m4a");

    console.log("our js fil is linked right", audioElement);
    // Theme Button
    $(".theme-button").on("click", function() {
        audioElement.play();
    });

    $(".pause-button").on("click", function() {
        audioElement.pause();
    });


    var journeyAudio = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/audio/02 Don't Stop Believin'.m4a");
    $(".journeyPlayButton").on("click", function() {
        audioElement.play();
    });

    $(".journeyPauseButton").on("click", function() {
        audioElement.pause();
    });




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

}); //Document ready closing
