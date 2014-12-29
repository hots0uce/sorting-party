

var TeamSorter = function(numberOfTeams, numberOfPlayers) {
	var i=0, j=0;
	//this.teams = teams;
	this.availableTeams = [];
	this.numberOfTeams = numberOfTeams;
	this.numberOfPlayers = numberOfPlayers;

	this.playersPerTeam = Math.ceil(this.numberOfPlayers / this.numberOfTeams);

	for( ; i<teams.length; i++ ) {
		j=0;
		for( ; j<this.playersPerTeam; j++ ) {
			this.availableTeams.push(i);
		}
	}

	this.shuffleTeams();

}, fn = TeamSorter.prototype;

fn.shuffleTeams = function() {
    for(var j, x, i = this.availableTeams.length; i; j = Math.floor(Math.random() * i), x = this.teams[--i], this.teams[i] = this.teams[j], this.teams[j] = x);
    
    return this;
}

fn.pickTeam = function() {
	var team = this.availableTeams.shift();

	this.shuffleTeams();
	return team;
};

module.exports = TeamSorter;
