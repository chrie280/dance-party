var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="dancer"></img>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.getAtMe();
};

Dancer.prototype.step = function() {
  var that = this;
  setTimeout(function(){that.step();}, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.getAtMe = function(){
  for (var i = 0; i<window.dancers.length; i++){
    if (!(this instanceof dancers[i].constructor)){
      if (Math.abs(this.$node.offset().top - dancers[i].$node.offset().top) < 300){
        var height = $('body').height() * .8;
        var width = $('body').width();
        this.setPosition(height, width * .4);
        dancers[i].setPosition(height, width * .6);
        var lineUp = function(){
          var intervalWidth = $("body").width() / dancers.length;
          var dancerHeight = $("body").height()*0.55;
          // iterate over dancers array
          for (var j = 0; j < dancers.length-1; j++) {
            if (j !== i){
              dancers[j].setPosition(dancerHeight, intervalWidth*j);
            }
          }
        }();
      }
    }
  }
};
//on invocation
//iterate through dancer array
  //if type === different
  //check distance
  //  //if distance < limit
  //    DANCE OFF MOFO

