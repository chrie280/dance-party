var DanceFloor = function() {

  this.$body = $("body");
  this.cssStyles = {
    'background-image' : "url('img/background2.jpg')"
  };

  this.$body.css(this.cssStyles);
  this.lineUpAnimation = 'linear';
};

DanceFloor.prototype.timeToStep = function(combatantOneIndex, combatantTwoIndex){
  var height = $('body').height() * 0.8;
  var width = $('body').width();
  var combatantOne = dancers[combatantOneIndex];
  var combatantTwo = dancers[combatantTwoIndex];

  combatantOne.setPosition(height, width * 0.35);
  combatantTwo.setPosition(height, width * 0.55);

  this.lineEmUp(combatantOneIndex, combatantTwoIndex);
};

DanceFloor.prototype.lineEmUp = function(skipOne, skipTwo){
  var animation = this.lineUpAnimation;
  var intervalWidth = $("body").width() / dancers.length;
  var dancerHeight = $("body").height()*0.55;
  for (var i = 0; i < dancers.length; i++) {
    if (i !== skipTwo && i!==skipOne) {
      dancers[i].$node.animate({top:dancerHeight + 'px', left: intervalWidth*i + 'px'}, 2000, animation);
    }
  }
};


