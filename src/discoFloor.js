var DiscoFloor = function() {
  DanceFloor.call(this);
  this.lineUpAnimation = 'easeOutBounce';
  this.$body.css({'background-image' : "url('img/background.jpg')"});
}

DiscoFloor.prototype = Object.create(DanceFloor.prototype);
DiscoFloor.prototype.constructor = DiscoFloor;

