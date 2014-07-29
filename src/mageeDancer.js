var Magee = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'img/magee.png')
};
Magee.prototype = Object.create(Dancer.prototype);
Magee.prototype.constructor = Magee;
Magee.prototype.oldStep = Magee.prototype.step;
Magee.prototype.step = function(){
  this.oldStep();
  this.$node.fadeToggle(this.timeBetweenSteps);
};
