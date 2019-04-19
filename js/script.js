
$(document).ready(function(){
    
    //GameViewModel
    function GameViewModel(){

      //set variables
      var firstName = ko.observable("");
      var lastName = ko.observable("");
      var correctAnswers = ko.observable(0);
      var incorrectAnswers = ko.observable(0);
      var totalAnswers = correctAnswers + incorrectAnswers;

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
      });
      
      /* Tyler Armstrong
      // pull First and last data from name startGame model form and store into variables!!!!
      // Diplay Name where needed
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
      */
  };

  //applying the bindings in the GameViewModel
  ko.applyBindings(GameViewModel);

}); //END OF DOCUMENT.READY FUNCTION