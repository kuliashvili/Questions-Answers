const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const isOpen = this.parentNode.classList.contains('open');
    
    // hide all other answers
    questions.forEach(function(otherQuestion) {
      if (otherQuestion !== question) {
        const otherAnswer = otherQuestion.nextElementSibling;
        otherQuestion.parentNode.classList.remove('open');
        otherAnswer.style.maxHeight = 0;
      }
    });
    
    // toggle answer
    this.parentNode.classList.toggle('open');
    answer.style.maxHeight = isOpen ? 0 : answer.scrollHeight + 'px';
  });
});

