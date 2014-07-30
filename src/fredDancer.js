var Fred = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
   this.$node.attr('src', 'img/fred.png');
   this.preferences = ['Fred', 'Phillip', 'Magee', 'Marcus'];
};
Fred.prototype = Object.create(Dancer.prototype);
Fred.prototype.constructor = Fred;
Fred.prototype.oldStep = Fred.prototype.step;
Fred.prototype.step = function(){
  var scaleArr = [-1,1];
  var scale = scaleArr[Math.floor(Math.random() * 2)];
  var danceMoves = {
    '-webkit-animation': 'twist .4s alternate infinite',
    'animation' : 'twist .4s alternate infinite'
  };
  this.oldStep();
  this.$node.css(danceMoves);
};
