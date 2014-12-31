var TeamSorter = require('./team.js'),
	audio = require('./audio.js'),
	houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin'],
	ts,
	soundFiles = {
		'Gryffindor': '/sorting-party/audio/gr.mp3',
		'Hufflepuff': '/sorting-party/audio/h.mp3',
		'Ravenclaw': '/sorting-party/audio/r.mp3',
		'Slytherin': '/sorting-party/audio/s.mp3'
	}


exports.remaining = 0;
exports.init = function(playersCount) {
	exports.ts = new TeamSorter(houses.length, playersCount);
	this.remaining = this.ts.availableTeams.length;

	for(var i=0; i<houses.length; i++) {
		audio.loadSound(soundFiles[houses[i]],function() {});	
	}
};

exports.pickTeam = function() {
	var teamIdx = exports.ts.pickTeam();
	this.remaining = this.ts.availableTeams.length;
	audio.playSound(soundFiles[houses[teamIdx]]);
	return houses[teamIdx];
};

exports.reset = function() {
	this.init();
}