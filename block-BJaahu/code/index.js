//Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)

// Define object containing methods

// let questionMethods = {
//     isAnswerCorrect: function(index) {
//       return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer: function() {
//       return this.options[this.correctAnswerIndex];
//     }
//   };
  

//   function Questions(title, options, correctAnswerIndex) {
//     let Question = Object.create(questionMethods);
//     Question.title = title;
//    Question.options = options;
//     Question.correctAnswerIndex = correctAnswerIndex;
//   }
//   let firstQuestion = new Question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion = new Question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );

  //Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

// function Question(title, options, correctAnswerIndex) {
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
//   }
  
//   // Add methods to Question prototype
//   Question.prototype={
//     isAnswerCorrect :function(index) {
//     return index === this.correctAnswerIndex;
//   },
//   getCorrectAnswer :function() {
//     return this.options[this.correctAnswerIndex];
//   },
// };
//   // Create objects using new keyword
//   let firstQuestion = new Question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
  
//   let secondQuestion = new Question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );
  
  //Create using class

  class Question {
    constructor(title, options, correctAnswerIndex) {
      this.title = title;
      this.options = options;
      this.correctAnswerIndex = correctAnswerIndex;
    }
  
    isAnswerCorrect(index) {
      return index === this.correctAnswerIndex;
    }
  
    getCorrectAnswer() {
      return this.options[this.correctAnswerIndex];
    }
  }
  let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

  //Write test by creating two objects also test both methods.

  
function Question(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  
  Question.prototype={
    isAnswerCorrect :function(index) {
    return index === this.correctAnswerIndex;
  },
  
  getCorrectAnswer :function() {
    return this.options[this.correctAnswerIndex];
  },
};
  let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );