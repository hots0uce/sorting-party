var TeamSorter = require('./team.js'),
	audio = require('./audio.js'),
	houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin'],
	ts,
	soundFile = '/sorting-party/audio/test.mp3';


exports.remaining = 0;
exports.init = function(playersCount) {
	exports.ts = new TeamSorter(houses.length, playersCount);
	this.remaining = this.ts.availableTeams.length;

	audio.loadSound(soundFile,function() {

	});
};

exports.pickTeam = function() {
	var teamIdx = exports.ts.pickTeam();
	this.remaining = this.ts.availableTeams.length;
	audio.playSound(soundFile);
	return houses[teamIdx];
};

exports.reset = function() {
	this.init();
}