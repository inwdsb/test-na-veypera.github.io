function submitQuiz() {
    var answers = {
      q1: "b",
      q2: "b",
      q3: "a",
      q4: "b",
      q5: "a",
      q6: "c",
      q7: "a"
    };
    
    var score = 0;
    var totalQuestions = 7;
    
    for (var i = 1; i <= totalQuestions; i++) {
      var radios = document.getElementsByName('q' + i);
      for (var j = 0; j < radios.length; j++) {
        if (radios[j].checked && radios[j].value === answers['q' + i]) {
          score++;
        }
      }
    }
    
    alert("Вы набрали " + score + " из " + totalQuestions + " баллов!");
  }