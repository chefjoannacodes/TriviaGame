//our stopwatch object
// var stopwatch = {

//     time: 30000,

//     reset: function() {
//         stopwatch.time = 30000,

//         //change display div to "30:00."
//         $("#time-left").html("00:30");
//     },
//     start: function() {
//         //use setInterval to start the count here.
//         intervalId = setInterval(stopwatch.count, 30000);
//         console.log("set interval within start object", stopwatch.start);
//     },
//     stop: function() {
//         //use the clearInterval to stop the count here
//         clearInterval(intervalId);
//         console.log("clear interval within stop object", clearInterval);
//     },
//     //get te current time and pass that into the stopwatch.timeConverter function, 
//     // and save the result in the variable.
//     count: function() {
//         //decrement time by 1 second
//         stopwatch.time--;
//         console.log("our decremetor", stopwatch.count);

//         //get the current time, pass it into stopwatch.timeConverter function and save the result in a variable
//         var converted = stopwatch.timeConverter(stopwatch.time);
//         console.log(converted);

//         //use the variable we just created to show time in display div
//         $("#time-left").html(converted);
//     },


// function endGame() {

// if (time <= 0 && values[i].length === 0) {
//         alert("Time's Up!");
//          stop();   
//          startGame();
//         };

//      endGame();
// console.log("our end game function", endGame);   
        
// };

// //variable that will hold the button's display when "start" is clicked
// var delayButtonAlert;

// //set out window alert to run one second after the function is called
// var windowTimeout = setTimeout(function() {
//     alert("Alert #1");
// }, 1000);

// $(".start-button").on("click", function() {
//     //set the button's display to run 1 second after the functions's called.
//     delayButtonAlert = setTimeout(function() {
//         //html.display timer here
//         alert("Alert #2");
//     }, 1000);
// });
// //clear or hide timer once "submit" button is pushed
//     $("#submit").on("click", function() {
//         clearTimeout(windowTimeout);
//     });
//     console.log("the running time", windowTimeout);
//     console.log("the setTimeout", setTimeout);


//convert values into strings to process in check answer function
    // var chosenAnswer = values.split("");
    // console.log("our split array", chosenAnswer);





    //     var selectedChoiceRight = false;

    //     // for (var i = 0; i < rightAnswers[i].length; i++){
    //         if (rightAnswers.split("") === values.split("")) {
    //             selectedChoiceRight = true;
    //             winCounter++;
    //             alert("correct!!!!");
    //             console.log("Our win counter", winCounter);
    //     }else if(values.length === 0) {
    //         alert("you don't have any more time left");
    //     }
        
    // };
//     //run loop if true above
//     if (selectedChoiceRight) {
//         for (i = 0; i < rightAnswers[i].length; i++) {
//             if (rightAnswers[i] === chosenAnswer) {
//                     values[i] = chosenAnswer;
//             }
//             console.log("inside our checkChoice function", values);
//         }
    
//     //if choice is wrong alert user and store in loseCounter
// }else{
//     loseCounter++;
//     values[i].push(choice);
//     alert("Wrong answer");
// }
// console.log("our lose counter inside checkChoice function", loseCounter);

// };


//checkChoice();
// Array.prototype.diff = function(values) {
//  var checkArr = [];
//  for (var i in this) {
//      if(values.indexOf( this[i] ) > -1){
//          checkArr.push( this[i]);
//      }
//  }
//  return checkArr;
//  alert ("Correct!!");
// };
// console.log("These two match", rightAnswers.diff(values));
// end Click choice function+++++++++*/

