var TeamSorter = require('./team.js'),
	houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin'],
	ts;


exports.remaining = 0;
exports.init = function(playersCount) {
	exports.ts = new TeamSorter(houses.length, playersCount);
	this.remaining = this.ts.availableTeams.length;
};

exports.pickTeam = function() {
	var teamIdx = exports.ts.pickTeam();
	this.remaining = this.ts.availableTeams.length;
	return houses[teamIdx];
};

exports.reset = function() {
	this.init();
}