var Phillip = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'img/phillip.png');
  this.preferences = ['Phillip', 'Magee', 'Marcus', 'Fred'];
  this.bustCount=1;
};
Phillip.prototype = Object.create(Dancer.prototype);
Phillip.prototype.constructor = Phillip;
Phillip.prototype.oldStep = Phillip.prototype.step;
Phillip.prototype.step = function(){
  this.oldStep();
  var danceMoves = {
    'animation' : 'hop .5s alternate infinite',
    '-webkit-animation' : 'hop .5s alternate infinite'
  };
  this.$node.css(danceMoves);
};
