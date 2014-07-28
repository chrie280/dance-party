var SlidingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;
SlidingDancer.prototype.oldStep = SlidingDancer.prototype.step;
SlidingDancer.prototype.step = function(){
  var colors = ['blue', 'red', 'white', 'yellow', 'Aqua', 'DeepPink', 'LightGreen', 'PaleGoldenRod'];
  var randColor = function(){
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  };
  var randSize = function(){
   return Math.floor(Math.random() * 20);
  };
  this.oldStep();
  this.$node.toggle();
  this.$node.css('border', '' + randSize() + 'px solid ' + randColor());
};
