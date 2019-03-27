
$(document).ready(function(){
  
   //Name Modal button id="startGame" is clicked will triger startContent to hide and gameContent to show
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
      //if true add 1 to correct asnwered variable to display correct answers to user
      //if false add 1 to incorrect asnwered variable to display correct answers to user

      //close modal
      $('#questionModal').modal('toggle');
    });
    

}); //END OF DOCUMENT.READY FUNCTION