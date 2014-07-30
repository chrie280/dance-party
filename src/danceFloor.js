var DanceFloor = function() {
  this.$body = $("body");

};

DanceFloor.prototype.timeToStep = function(combatantOneIndex, combatantTwoIndex){
  var height = $('body').height() * 0.80;
  var width = $('body').width();
  var combatantOne = dancers[combatantOneIndex];
  var combatantTwo = dancers[combatantTwoIndex];

  combatantOne.$node.animate({
    top: height + 'px',
    left: width * 0.35 + 'px'},
    this.lineUpDelay * .5, this.lineUpAnimation);
  combatantTwo.$node.animate({
    top: height + 'px',
    left: width * 0.55 + 'px'},
    this.lineUpDelay * .5, this.lineUpAnimation);

  this.lineEmUp(combatantOneIndex, combatantTwoIndex);
  setTimeout(function(){
    combatantOne.bustMove("bounce", {distance: 250}, 400)}
  ,3000);
  setTimeout(function(){
    combatantTwo.bustMove("shake", {distance: 150}, 400);}
  ,4000);
  setTimeout(function(){
    combatantOne.bustMove("bounce", {distance: 400}, 800)}
  ,5000);
  setTimeout(function(){
    combatantTwo.bustMove("shake", {distance: 300}, 800);}
  ,6000);
  setTimeout(function(){
    combatantOne.bustMove("bounce", {distance: 700}, 1600)}
  ,7000);
  setTimeout(function(){
    combatantTwo.bustMove("shake", {distance: 600}, 1400);}
  ,8500);
  setTimeout(function(){
    this.tallyVotes(combatantOne, combatantTwo)}
  ,10000);
};

DanceFloor.prototype.lineEmUp = function(skipOne, skipTwo){
  var animation = this.lineUpAnimation;
  var delay = this.lineUpDelay;
  var heightOffset = this.yOffset;
  var intervalWidth = $("body").width() / dancers.length;
  var dancerHeight = $("body").height()*heightOffset;
  for (var i = 0; i < dancers.length; i++) {
    if (i !== skipTwo && i!==skipOne) {
      dancers[i].$node.animate({top:dancerHeight + 'px', left: intervalWidth*i + 'px'}, delay, animation);
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
  return oneVotes > twoVotes? [combatantOne, combatantTwo] : [combatantTwo, combatantOne];
};







