const answerOptions = document.querySelector('.answer-options');
const nextQuestionBtn = document.querySelector('.next-question-btn')

let quizCategory = 'programming';
let currentQuestion = null

// Fetch a random from pased on the selected category
const getRandomQuestion = () => {
  const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

  const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
  return randomQuestion;
}
const handleAnswer = (option, answerIndex) => {
  const isCorrect = currentQuestion
}

// Render the current question and its options in the quiz
const renderQuestion = () => {
  currentQuestion = getRandomQuestion();
  if(!currentQuestion) return;
  console.log(currentQuestion);

  // Update the UI
  answerOptions.innerHTML = '';
  document.querySelector('.question-text').textContent = currentQuestion.question;


  // Create option <li> elements and append them, and add click event listeners
    currentQuestion.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.classList.add('answer-option');
    li.textContent = option;
    answerOptions.appendChild(li);
    li.addEventListener('click', () => handleAnswer(li, index ))
  })
}

renderQuestion();

nextQuestionBtn.addEventListener('click', renderQuestion)