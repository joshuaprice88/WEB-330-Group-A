
$(document).ready(function(){
  
   //Name Modal button id="startGame" is clicked will trigger startContent to hide and gameContent to show
   $("#startGame").click(function(){
      $("#startContent").hide();
      $("#gameContent").show();
      
      //pull data from form and store into variables!!!!

      //close modal
      $('#startModal').modal('toggle');
    });

    //Question Modal Submit answer button
    $("#submitAnswer").click(function(){
      
      //check to see it answer has been selected if yes go to next step if no return to question.
      //pull answer input and check if correct return true or false
      //if true add 1 to correct answered variable to display correct answers to user
      //if false add 1 to incorrect answered variable to display correct answers to user

      //close modal
      $('#questionModal').modal('toggle');

    });

    //sets questionImage source
    $(".questionImage").attr('src', 'images/question-mark.svg');

    //on click event to change the image source
    $(".questionImage").click(function(){
      
      //Change image source
      $(this).attr('src', 'images/js.png');
    });
    

}); //END OF DOCUMENT.READY FUNCTION