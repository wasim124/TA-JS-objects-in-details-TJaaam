'Without Object'

const title = 'Where is the capital of Jordan';
const options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
const correctAnswerIndex = 1;

function isAnswerCorrect(answerIndex) {
  return answerIndex === correctAnswerIndex;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// 'Organize using object'
// const question = {
//     title: 'Where is the capital of Jordan',
//     options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     correctAnswerIndex: 1,
    
//     isAnswerCorrect(answerIndex) {
//       return answerIndex === this.correctAnswerIndex;
//     },
    
//     getCorrectAnswer() {
//       return this.options[this.correctAnswerIndex];
//     }
//   };

//   'Use a function to create object'
//   function createQuestion(title, options, correctAnswerIndex) {
//     return {
//       title,
//       options,
//       correctAnswerIndex,
      
//       isAnswerCorrect(answerIndex) {
//         return answerIndex === correctAnswerIndex;
//       },
    
//       getCorrectAnswer() {
//         return options[correctAnswerIndex];
//       }
//     }
//   }
  
//   const question = createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
  
  'Convert the function to use this keyword'
  function Question(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    
    this.isAnswerCorrect = function(answerIndex) {
      return answerIndex === this.correctAnswerIndex;
    };
    
    this.getCorrectAnswer = function() {
      return this.options[this.correctAnswerIndex];
    };
  }
  
  const question = new Question('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
  