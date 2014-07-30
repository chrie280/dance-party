var Magee = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'img/magee.png');
  this.preferences = ['Magee', 'Phillip', 'Marcus', 'Fred'];
  this.bustCount = 1;
};
Magee.prototype = Object.create(Dancer.prototype);
Magee.prototype.constructor = Magee;
Magee.prototype.oldStep = Magee.prototype.step;
Magee.prototype.step = function(){
  this.oldStep();
  var interval = Math.max(this.timeBetweenSteps/1000, .4);
   var danceMoves = {
    '-webkit-animation' : 'move ' + interval +'s alternate infinite',
    'animation' : 'move ' + interval +'s alternate infinite'
     };
  this.$node.css(danceMoves);
};
