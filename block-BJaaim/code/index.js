class question{
    constructor(title,options,correctAnswer){
        this.title=title;
        this.options=options;
        this.correctAnswer=correctAnswer;
    }
    isCorrect(answer){
        return answer === this.options[this.correctAnswer];
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswer];
    }
    createUI(){

    }
}

class Quiz{
    constructor(questions){
        this.allQuestions =questions;
        this.activeIndex= 0;
        this.score = 0;
    }
    nextQuestions(){
        this.activeIndex++;
    }
    createUI(){

    }
    updateScore(){
        
    }
}