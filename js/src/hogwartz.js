var TeamSorter = require('./team.js'),
	audio = require('./audio.js'),
	houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin'],
	ts,
	soundFIles = {
		'Gryffindor': '/sorting-party/audio/gr.mp3',
		'Hufflepuff': '/sorting-party/audio/h.mp3',
		'Ravenclaw': '/sorting-party/audio/r.mp3',
		'Slytherin': '/sorting-party/audio/s.mp3'
	}


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
	audio.playSound(soundFilef[houses[teamIdx]]);
	return houses[teamIdx];
};

exports.reset = function() {
	this.init();
}