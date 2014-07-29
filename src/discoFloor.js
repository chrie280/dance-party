var DiscoFloor = function() {
  DanceFloor.call(this);
  this.lineUpAnimation = 'easeInExpo';
  this.lineUpDelay = 3000;
  this.yOffset = .55;
  this.$body.css({'background-image' : "url('img/disco.jpg')"});
  $('.music').attr('src', 'audio/disco.mp3');
}

DiscoFloor.prototype = Object.create(DanceFloor.prototype);
DiscoFloor.prototype.constructor = DiscoFloor;

