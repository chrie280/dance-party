var DanceFloor = function() {
  this.$body = $('body');

};

DanceFloor.prototype.timeToStep = function(combatantOneIndex, combatantTwoIndex){
  $('.music').attr('src', 'audio/danceOff.mp3');
  var height = $('body').height() * 0.80;
  var width = $('body').width();
  var combatantOne = dancers[combatantOneIndex];
  var combatantTwo = dancers[combatantTwoIndex];

  combatantOne.$node.animate({
    top: height + 'px',
    left: width * 0.35 + 'px'},
    this.lineUpDelay * .1, this.lineUpAnimation);
  combatantTwo.$node.animate({
    top: height + 'px',
    left: width * 0.55 + 'px'},
    this.lineUpDelay * .1, this.lineUpAnimation);

  this.lineEmUp(combatantOneIndex, combatantTwoIndex);
  setTimeout(function(){
    combatantOne.bustMove('bounce', 200, 350);
  },3000);
  setTimeout(function(){
    combatantTwo.bustMove('shake', 125, 350);
  },3500);
  setTimeout(function(){
    combatantOne.bustMove('bounce', 200, 350);
  },5000);
  setTimeout(function(){
    combatantTwo.bustMove('shake', 125, 350);
  },6000);
  setTimeout(function(){
    combatantOne.bustMove('bounce', 200, 350);
  },7000);
  setTimeout(function(){
    combatantTwo.bustMove('shake', 125, 350);
  },8500);
  setTimeout(this.tallyVotes.bind(this, combatantOne, combatantTwo), 10000);
};

DanceFloor.prototype.lineEmUp = function(skipOne, skipTwo){
  var animation = this.lineUpAnimation;
  var delay = this.lineUpDelay;
  var heightOffset = this.yOffset;
  var intervalWidth = $('body').width() / window.dancers.length;
  var dancerHeight = $('body').height()*heightOffset;
  for (var i = 0; i < dancers.length; i++) {
    if (i !== skipTwo && i!==skipOne) {
      window.dancers[i].$node.animate({top:dancerHeight + 'px', left: intervalWidth*i + 'px'}, delay, animation);
    }
  }
};

DanceFloor.prototype.tallyVotes = function(combatantOne, combatantTwo) {
  var oneVotes = 0;
  var twoVotes = 0;
  window.dancers.forEach(function(dancer){
    for (var i = 0; i < 4; i++) {
      if (dancer.preferences[i] === combatantOne.preferences[0]) {
        oneVotes++;
        break;
      }
      if (dancer.preferences[i] === combatantTwo.preferences[0]) {
        twoVotes++;
        break;
      }
    }
  });
  oneVotes >= twoVotes ? this.resolution(combatantOne, combatantTwo) : this.resolution(combatantTwo, combatantOne);
};

DanceFloor.prototype.resolution = function(winner, loser) {
  $('.danceOff').text(winner.preferences[0].toUpperCase() + " WINS!!!!!");
  $('.danceOff').css({color: 'orange'});
  $('.danceOff').toggle("pulsate", 5000);
  $(winner.$node).effect("scale", {percent:4000}, 4000);
  $(loser.$node).effect("explode", {pieces:16}, 1500);
  setTimeout(function(){location.reload()}, 3000);
};










