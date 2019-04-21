
$(document).ready(function(){
    
    //GameViewModel
    function GameViewModel(){

      //set variables
      // Tyler's Changes
      let self = this;
      self.firstName = ko.observable("");
      self.lastName = ko.observable("");
      // End Tyler's Changes

      
      self.correctAnswers = ko.observable(0); //BE SURE TO SET TO 0
      self.incorrectAnswers = ko.observable(0); //BE SURE TO SET TO 0
      
      //COMPUTED OBSERVABLE TO ADD INCORRECT AND CORRECT ANSWERS FOR A TOTAL QUESTIONS ANSWERED
      self.totalAnswers = ko.computed(function() {
        return this.correctAnswers() + this.incorrectAnswers();
      }, self);

      self.overallPercentage = ko.computed(function() {
        return (this.correctAnswers() / this.totalAnswers() * 100).toFixed(0) + "%";
      }, self);




      //CUSTOM BINDING TO DISPLAY RANKING
      ko.bindingHandlers.ranking = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
          var value = ko.unwrap(valueAccessor());
          //alert(value);
          
            if(value >= 8){
              $(element).text("Expert");
            }
            if(value === 6 || value === 7){
              $(element).text("Novice");
            } 
            if(value < 5){
              $(element).text("Beginner");
            }
          
        }
      };
         

      //Name Modal button id="startGame" when clicked will trigger startContent to hide and gameContent to show
      $("#startGame").click(function(){
        $("#startContent").hide();
        $("#gameContent").show();
        //close modal
        $('#startModal').modal('toggle');
      });

      //Question Modal Submit answer button
      $("#submitAnswer").click(function(){
        //close modal
        $('#questionModal').modal('toggle');
      });

      //sets questionImage source
      $(".questionImage").attr('src', 'images/question-mark.svg');

      //on click event to change the image source of .questionImage but only the one that is clicked
      $(".questionImage").click(function(){
        //Change image source
        $(this).attr('src', 'images/js.png');
        //makes image not clickable
        $(this).parent().css("pointer-events", 'none');
      });
      
      /* Josh Price
      // ajax question and loop them to create categories and question squars
      // add click that passes a "questionId" param to model
      */

     $.getJSON("https://wthomason.github.io/bioSite/data/questions.json", function(data, status) {
      if(status !== 'success') {
        alert("Something went wrong while fetching questions, please try again.");
        return;
      } 
      console.log("your in the ajax baby!!")
      const $dynamicQuestions = $('#dynamicQuestions');
      const categories = data.data.categories;
      
      // empty current category/questions section
      $dynamicQuestions.html('');
      $dynamicQuestions.data('data',data.data.questions);
      // dynamically populate category/questions
      for(let category of categories) {
        const questions = data.data.questions.map(function(question, i) {
          question.questionId = i;
          return question;
        }).filter(function(question) {
          return question.category === category;
        });

        $dynamicQuestions.append(categoryTemplate(category,questions));
        

        //sets questionImage source
        $(".questionImage").attr('src', 'images/question-mark.svg');

        //on click event to change the image source of .questionImage but only the one that is clicked
        $(".questionImage").click(function(){
          //Change image source
          $(this).attr('src', 'images/js.png');
          //makes image not clickable
          $(this).parent().css("pointer-events", 'none');
        });
      }
      console.log(data.data)
    });

      /* Drew Hanson
      // set up model and function to take param of "questionId"from click and pull corresponding data from the ajax
      // loop through potential answers
      
     function questionId ()
      var question1;
      if (answer=a)
     question1 = "correct";
    } 
    else if (answer !==a) {
      question1 = "incorrect";

      function questionId ()
      var question2;
      if (answer=b)
     question2 = "correct";
    } 
    else if (answer !==b) {
      question2 = "incorrect";

      function questionId ()
      var question1;
      if (answer=a)
     question3 = "correct";
    } 
    else if (answer !==a) {
      question3 = "incorrect";

      function questionId ()
      var question4;
      if (answer=a)
     question4 = "correct";
    } 
    else if (answer !==a) {
      question4 = "incorrect";

      function questionId ()
      var question5;
      if (answer=b)
     question5 = "correct";
    } 
    else if (answer !==b) {
      question5 = "incorrect";

      function questionId ()
      var question6;
      if (answer=a)
     question6 = "correct";
    } 
    else if (answer !==a) {
      question6 = "incorrect";

      function questionId ()
      var question7;
      if (answer=b)
     question7 = "correct";
    } 
    else if (answer !==b) {
      question7 = "incorrect";

      function questionId ()
      var question8;
      if (answer=a)
     question8 = "correct";
    } 
    else if (answer !==a) {
      question8 = "incorrect";

      function questionId ()
      var question9;
      if (answer=a)
     question9 = "correct";
    } 
    else if (answer !==a) {
      question9 = "incorrect";

      function questionId ()
      var question10;
      if (answer=c)
     question10 = "correct";
    } 
    else if (answer !==c) {
      question10 = "incorrect";
    }
      
      /* Tyler and Drew
      // create function that will check when question submit button is clicked to do the following
      // check to see it answer has been selected if yes go to next step if no stay on question.
      // pull answer input and check if correct return true or false
      // if true add +1 to correct answered variable to display correct answers to user
      // if false add +1 to incorrect answered variable to display correct answers to user
      */

      /* William Thomason
      // create function that will take the computed observable totalAnswers and see it it is equal to 10
      // if so then direct user to resualts page
      // take Answers variables and display the grading criteria according to rubric.
      
       Ranking criteria:
        Expert: 8-10 correct answers
        Novice: 6-8 correct answers
        Beginner: Less than 6 correct answers
        var total = 0;
      
     if(total === 10){
      $("#startContent").hide();
      $("#gameContent").hide();
      $("#results").show();        
        
     }
      */
          
     
  };//END OF VIEW MODEL

  //applying the bindings in the GameViewModel
  // Tyler's Change: corrected binding's application
  ko.applyBindings(new GameViewModel());

}); //END OF DOCUMENT.READY FUNCTION

function categoryTemplate(category, questions) {
  return `
    <div class="col-lg-4 text-center">
        <h4>${category}</h4>
        ${questions.map(function(question) {
          return questionTemplate(question);
        }).join('')}
    </div>
  `;
}
function questionTemplate(question) {
  return `
  <div class="row">
    <div class=" col-lg-12 text-center">
        <a href="" data-toggle="modal" data-target="#questionModal" onclick="showQuestionOptions('${question.questionId}')">
            <img  alt="js" class="img-thumbnail questionImage">
        </a>
    </div>
  </div>
  `;
}

function answerTemplate(key, answer) {
  return `
  <div class="form-check">
      <input class="form-check-input" type="radio" name="answer" id="${key}" value="${key}">
      <label class="form-check-label" for="${key}">
          ${answer}
      </label>
  </div>
  `;
}

function showQuestionOptions(questionId) {
  
  // Modal is showing
  // questionId is available here

  const $dynamicQuestions = $('#dynamicQuestions');
  const questions =  $dynamicQuestions.data('data');

  const question = questions[questionId];

  const $questionModal = $('#questionModal');
  $('#question', $questionModal).html(question.question);
  const $answers = $('#answers', $questionModal);
  
  $answers.html('');
  if(question.a) $answers.append(answerTemplate('a', question.a));
  if(question.b) $answers.append(answerTemplate('b', question.b));
  if(question.c) $answers.append(answerTemplate('c', question.c));
  if(question.d) $answers.append(answerTemplate('d', question.d));

}