var Fred = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
   this.$node.attr('src', 'img/fred.png');

};
Fred.prototype = Object.create(Dancer.prototype);
Fred.prototype.constructor = Fred;
Fred.prototype.oldStep = Fred.prototype.step;
Fred.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
