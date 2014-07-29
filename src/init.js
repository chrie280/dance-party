$(document).ready(function(){
  window.dancers = [];
  $(".lineUpButton").on("click", function(event){
    // get length of dancers
    // use lengh to build width interval (body width/dancers length)
    var intervalWidth = $("body").width() / dancers.length;
    var dancerHeight = $("body").height()*0.55;
    // iterate over dancers array
    for (var i = 0; i < dancers.length; i++) {
      // call setPosition with fixed height & width interval
      dancers[i].setPosition(dancerHeight, intervalWidth*i);
    }
  });

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
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
});

