var FadingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype.constructor = FadingDancer;
FadingDancer.prototype.oldStep = FadingDancer.prototype.step;
FadingDancer.prototype.step = function(){
  this.oldStep();
  this.$node.fadeToggle(this.timeBetweenSteps);
};
