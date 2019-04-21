
$(document).ready(function(){
    
    //GameViewModel
    function GameViewModel(){

      //set variables
      // Tyler's Changes
      let self = this;
      self.firstName = ko.observable("");
      self.lastName = ko.observable("");
      // End Tyler's Changes

      
      self.correctAnswers = ko.observable(8); //BE SURE TO SET TO 0
      self.incorrectAnswers = ko.observable(0); //BE SURE TO SET TO 0
      
      //COMPUTED OBSERVABLE TO ADD INCORRECT AND CORRECT ANSWERS FOR A TOTAL QUESTIONS ANSWERED
      self.totalAnswers = ko.computed(function() {
        return this.correctAnswers() + this.incorrectAnswers();
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
      
      /* Tyler Armstrong
      // pull First and last data from name startGame model form and store into variables!!!!
      // Diplay Name where needed
      */

      /* Tyler's Response:
      // Done. I set firstName & var lastName to ko.observables (i.e. this.firstName). For example, 
      // anytime you want to reference the first name, just use 'data-bind="value: firstName"'
      */

      /* Josh Price
      // ajax question and loop them to create categories and question squars
      // add click that passes a "questionId" param to model
      */

      /* Drew Hanson
      // set up model and function to take param of "questionId"from click and pull corresponding data from the ajax
      // loop through potential answers
      */

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