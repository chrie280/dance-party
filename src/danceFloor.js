var DanceFloor = function() {
  this.$body = $("body");

};

DanceFloor.prototype.timeToStep = function(combatantOneIndex, combatantTwoIndex){
  var height = $('body').height() * 0.80;
  var width = $('body').width();
  var combatantOne = dancers[combatantOneIndex];
  var combatantTwo = dancers[combatantTwoIndex];

  combatantOne.$node.animate({
    top: height + 'px',
    left: width * 0.35 + 'px'},
    this.lineUpDelay * .5, this.lineUpAnimation);
  combatantTwo.$node.animate({
    top: height + 'px',
    left: width * 0.55 + 'px'},
    this.lineUpDelay * .5, this.lineUpAnimation);
  this.lineEmUp(combatantOneIndex, combatantTwoIndex);
};

DanceFloor.prototype.lineEmUp = function(skipOne, skipTwo){
  var animation = this.lineUpAnimation;
  var delay = this.lineUpDelay;
  var heightOffset = this.yOffset;
  var intervalWidth = $("body").width() / dancers.length;
  var dancerHeight = $("body").height()*heightOffset;
  for (var i = 0; i < dancers.length; i++) {
    if (i !== skipTwo && i!==skipOne) {
      dancers[i].$node.animate({top:dancerHeight + 'px', left: intervalWidth*i + 'px'}, delay, animation);
    }
  }
};


