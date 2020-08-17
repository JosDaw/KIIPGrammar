  //This is the script for 38 questions
  // scripts here:

  function submitQuiz() {
	console.log('submitted');

  // get each answer score
	function answerScore (qName) {
	  var radiosNo = document.getElementsByName(qName);

	  for (var i = 0, length = radiosNo.length; i < length; i++) {
		  if (radiosNo[i].checked) {
	  // do something with radiosNo
		  var answerValue = Number(radiosNo[i].value);
		}
	  }
	  // change NaNs to zero
	  if (isNaN(answerValue)) {
		answerValue = 0;
	  }
	  return answerValue;
	}

  // calc score with answerScore function
  var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')+ answerScore('q5')+ answerScore('q6')
  + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10')+ answerScore('q11')+ answerScore('q12')+ answerScore('q13')
  + answerScore('q14')+ answerScore('q15')+ answerScore('q16')+ answerScore('q17')+ answerScore('q18')+ answerScore('q19')+ answerScore('q20')
  + answerScore('q21')+ answerScore('q22')+ answerScore('q23')+ answerScore('q24')+ answerScore('q25')+ answerScore('q26')+ answerScore('q27')
  + answerScore('q28')+ answerScore('q29')+ answerScore('q30')+ answerScore('q31')+ answerScore('q32')+ answerScore('q33')+ answerScore('q34')
  + answerScore('q35')+ answerScore('q36')+ answerScore('q37')+ answerScore('q38'));
  console.log("CalcScore: " + calcScore); // it works!

    

   // Add additional scores in here.
    
 // calculate "possible score" integer
 var questionCountArray = document.getElementsByClassName('question');

 var questionCounter = 0;
 for (var i = 0, length = questionCountArray.length; i < length; i++) {
   questionCounter++;
 }

// show score as "score/possible score"
 var showScore = "Your Score: " + calcScore +"/" + questionCounter;
// if 4/4, "perfect score!"
 if (calcScore === questionCounter) {
   showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
 };
 document.getElementById('userScore').innerHTML = showScore;
}

function revealAnswer() {

  var x = document.querySelectorAll("[id*='correct']");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = "#e63946";
  }
    
}

$(document).ready(function() {

$('#submitButton').click(function() {
 $(this).addClass('hide');
});



});

