var Marcus = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'img/marcus.png')
};
Marcus.prototype = Object.create(Dancer.prototype);
Marcus.prototype.constructor = Marcus;
Marcus.prototype.oldStep = Marcus.prototype.step;
Marcus.prototype.step = function(){
  this.oldStep();
  var timeInSec = Math.max(this.timeBetweenSteps/300, .5);
  var danceMoves = {
    '-webkit-animation': 'spin ' +timeInSec +'s linear infinite',
    'animation' : 'spin ' +timeInSec + 's linear infinite'
  };
  this.$node.css(danceMoves);
};
