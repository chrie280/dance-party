$(document).ready(function(){
  window.dancers = [];

  window.timeToStep = function(combatantOneIndex, combatantTwoIndex){
    var height = $('body').height() * 0.8;
    var width = $('body').width();
    var combatantOne = dancers[combatantOneIndex];
    var combatantTwo = dancers[combatantTwoIndex];

    combatantOne.setPosition(height, width * 0.35);
    combatantTwo.setPosition(height, width * 0.55);

    window.lineEmUp(combatantOneIndex, combatantTwoIndex);

  };

  window.lineEmUp = function (skipOne, skipTwo){
    var intervalWidth = $("body").width() / dancers.length;
    var dancerHeight = $("body").height()*0.55;
    for (var i = 0; i < dancers.length; i++) {
      if (i !== skipTwo && i!==skipOne) {
        dancers[i].$node.animate({top:dancerHeight + 'px', left: intervalWidth*i + 'px'}, 2000, 'easeInBounce');
      }
    }
  };

  $(".lineUpButton").on("click", lineEmUp);

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() * .85) * Math.random(),
      ($("body").width() * .85)* Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
});

