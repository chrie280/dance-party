var TechnoFloor = function() {
  DanceFloor.call(this);
  this.lineUpAnimation = 'easeInExpo';
  this.lineUpDelay = 2000;
  this.yOffset = .40;
  this.$body.css({'background-image' : "url('img/techno.jpg')"});
  $('.music').attr('src', 'audio/techno.mp3');
}

TechnoFloor.prototype = Object.create(DanceFloor.prototype);
TechnoFloor.prototype.constructor = TechnoFloor;



//Winner Notification
  //Death Effect
  //Reset
  //dance off music
//Code cleanup
