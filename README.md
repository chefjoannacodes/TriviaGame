# TriviaGame


## Live Link 
 - https://chefjoannacodes.github.io/TriviaGame/

## This program is a basic Trivia game with the theme of Classic Rock songs. The user begins by pressing the "Start" button in which a timer starts counting down. The user must answer all the questions in the given amount of time or the game will end. The user has to check on an answer for the program to process the data. After the question is answered, an alert will let the user know if the choice was right or wrong. The scoreboard will also update as 'wins' or 'losses'. And then the next question will appear. The user has the choice to 'play' and 'pause' the band's song to help identify the answer.  

## Requirements
#### Using Javascript and jQuery make a Trivia game.

1. Create a trivia form with multiple choice or true/false options (your choice).

2. The player will have a limited amount of time to finish the quiz. 

3. The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

4. Don't let the player pick more than one answer per question.

5. Include a countdown timer.

## Technologies Used
#### 
- HTML
- CSS
- Javascript
- jQuery

## Code Explaination
- In the HTML, I used 'input type="radio"' in order for the format of possible answers to be in a "checked" or "unchecked" form. I made a function to go to the next question right after the previous question was answered as a way to 'lock' the choices, and not allow the user to click more than one option. 

```
- <input type="radio" name="q1" value="Journey" id="q1b">
                <label for="q1b">Journey</label>
```

-In the javascript file, I used the id for each possible answer and stored them in with the  function checkChoice(), or function checkWrong(). The first function holds the correct answers and their ids, while the second function holds the wrong choices. 


```
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
```

- While I know this is a lengthy js file, I wanted to understand the logic well. My goal is to make a large 'var quiz' object with objects inside, which hold all the questions and their properties to simplify my code, i.e :

```
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

```





