const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a'
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b'
  },
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a'
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b'
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a'
  },
];

const quiz = document.querySelector('#quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');
const submitBtn = document.querySelector('#submit');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let quizOrder = [];
let score = 0;
const userAnswers = {};

// Заполняем массив quizOrder индексами вопросов
for (let i = 0; i < quizData.length; i++) {
  quizOrder.push(i);
}

// Функция, чтобы перемешать массив в случайном порядке
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Перемешиваем массив quizOrder
shuffleArray(quizOrder);

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[quizOrder[currentQuiz]];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answer => (answer.checked = false));
  disableSubmitButton();
}

function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function showResults() {
  const percentage = (score / quizData.length) * 100;
  let resultHTML = `
    <div class="flex justify-center">
      <div
        class="container h-36 quiz-timeline border border-[#3E3E70] py-2 px-8 rounded-2xl max-w-xl flex justify-center items-center align-middle bg-white mb-4">
        <div class="text-center px-8">
          <h3 class="text-[#3E3E70] font-medium">Your results:</h3>
          <h2 class="text-[#3E3E70] font-semibold text-3xl">${percentage.toFixed(0)}%</h2>
        </div>
        <div class="px-8">
          <p class="border h-28 text-white"></p>
        </div>
        <div class="text-center px-8">
          <h3 class="text-[#3E3E70] font-medium">Correctly answered questions:</h3>
          <h2 class="text-[#3E3E70] font-semibold text-3xl">${score}/${quizData.length}</h2>
        </div>
      </div>
    </div>
  `;
  resultHTML += `
  <div class="flex justify-between">
      <button onclick="location.reload()"
          class="flex justify-center w-full items-center bg-white border border-[#3E3E70] transition duration-700 text-[#3E3E70] hover:bg-[#3E3E70] hover:text-white px-4 py-2 rounded-2xl mb-8 mr-8">Take
          the test again
          <span class="pl-2">
            <?xml version="1.0" encoding="iso-8859-1"?>
            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
              <path style="fill:#3E3E70;" d="M69.816,256H0l93.096,93.096L186.2,256h-69.816c0.224-77.016,62.6-139.4,139.616-139.632
              c22.672,0.432,44.952,6,65.16,16.296l34.896-34.896C325.6,80.144,291.176,70.528,256,69.832
              C153.296,70.112,70.104,153.296,69.816,256z M395.616,256c-0.224,77.016-62.6,139.4-139.616,139.632
              c-22.672-0.432-44.952-6-65.16-16.296l-34.896,34.896c30.456,17.624,64.88,27.24,100.056,27.936
              C358.696,441.872,441.88,358.696,442.184,256H512l-93.096-93.096L325.8,256H395.616z" />
            </svg>
          </span></button>
        <a href="start.html"
          class="flex justify-center w-full bg-white border border-[#3E3E70] transition duration-700 text-[#3E3E70] hover:bg-[#3E3E70] hover:text-white px-4 py-2 rounded-2xl mb-8">Go
          to homepage</a>
      </div>
  `;
  for (let i = 0; i < quizData.length; i++) {
    const userAnswer = userAnswers[i];
    const currentQuizData = quizData[i];
    const isCorrect = userAnswer && userAnswer.answer === currentQuizData.correct;
    const userAnswerText = userAnswer ? currentQuizData[userAnswer.answer] : 'not answered';
    const userAnswerColor = isCorrect ? 'text-green-500' : 'text-red-500';
    const borderClass = isCorrect ? 'border-green-500' : 'border-red-500';
    resultHTML += `
      <div class="grid justify-center">
        <div class="quiz-question__block border ${borderClass} p-4 rounded-2xl bg-white mb-8">
          <h3 class="font-semibold pb-4">${i + 1}. ${currentQuizData.question}</h3>
          <h4 class="text-red-600 font-semibold pb-2">
          <span class="${userAnswerColor}">Your answer: ${userAnswerText}</span>${isCorrect ? '' : `<br> <span class="text-green-500">Correct answer: ${currentQuizData[currentQuizData.correct]}</span>`}</h4>
        </div>
      </div>
    `;
  }
  quiz.innerHTML = resultHTML;
  // Скрыть quiz-timelines
  const quizTimelines = document.getElementById('quiz-timelines');
  quizTimelines.style.display = 'none';
}

function disableSubmitButton() {
  submitBtn.disabled = true;
}

function enableSubmitButton() {
  submitBtn.disabled = false;
}

function checkAnswerSelected() {
  const answerSelected = [...answerEls].some(answerEl => answerEl.checked);
  if (answerSelected) {
    enableSubmitButton();
  } else {
    disableSubmitButton();
  }
}

answerEls.forEach(answerEl => {
  answerEl.addEventListener('change', checkAnswerSelected);
});

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    const currentQuizData = quizData[quizOrder[currentQuiz]];
    const isCorrect = answer === currentQuizData.correct;
    saveUserAnswer(currentQuiz, answer, isCorrect);
    if (isCorrect) score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
    disableSubmitButton();
  } else {
    showResults();
  }
});

// Функция для сохранения ответа пользователя
function saveUserAnswer(questionIndex, answer, isCorrect) {
  userAnswers[questionIndex] = { answer, isCorrect };
}
// После загрузки вопросов
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[quizOrder[currentQuiz]];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  createQuestionNumbers(); // Добавить эту строку
}

// Добавить новую функцию
function createQuestionNumbers() {
  const quizTimeline = document.querySelector('.quiz-timeline');
  quizTimeline.innerHTML = ''; // Очищаем содержимое, чтобы избежать дублирования номеров вопросов

  for (let i = 0; i < quizData.length; i++) {
    const span = document.createElement('span');
    span.classList.add('quiz-timeline__number');
    if (i === currentQuiz) {
      span.classList.add('active', 'bg-[#3E3E70]', 'text-white', 'px-3', 'py-1', 'rounded-full');
    } else if (userAnswers[i]) {
      // Если вопрос уже пройден пользователем, но не активен, красим его фон в красный
      span.classList.add('bg-purple-300', 'text-black', 'px-3', 'py-1', 'rounded-full');
    } else {
      span.classList.add('font-semibold');
    }
    span.innerText = i + 1;
    quizTimeline.appendChild(span);
  }
}