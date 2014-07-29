var Marcus = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'img/marcus.png')
};
Marcus.prototype = Object.create(Dancer.prototype);
Marcus.prototype.constructor = Marcus;
Marcus.prototype.oldStep = Marcus.prototype.step;
Marcus.prototype.step = function(){
  this.oldStep();
  this.$node.fadeToggle(this.timeBetweenSteps);
};
