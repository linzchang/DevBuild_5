function checkAnswer(selection, questionNumber) {
  if (selection == 'incorrect') {
    var outcome = 'wrong';
  } else {
    var outcome = 'right';
  }
  nextQuestion(outcome, questionNumber);
}

function nextQuestion(outcome, questionNumber) {
  var newHTML = [];
  if (outcome == 'wrong') {
    newHTML.push('<div class="response show"><p>Wrong</p>');
  } else {
    newHTML.push('<div class="show"><p>Right</p>');
  }
//  newHTML.push('<button type="button" class="next" onclick="displayNextQuestion(questionNumber)">Next Question</button></div>');
  document.getElementById(questionNumber).className="response";
  $(".response").html(newHTML.join(""));
}

// function displayNextQuestion(questionNumber) {
//   questionNumber ++;
//   document.getElementById(questionNumber).className="question";
// }
