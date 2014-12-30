

var TeamSorter = function(numberOfTeams, numberOfPlayers) {
	var i=0, j=0, rem = 0, modifiedCounts = {}, shuffledTeams = [], total = 0;
	this.availableTeams = [];
	this.numberOfTeams = numberOfTeams;
	this.numberOfPlayers = numberOfPlayers;

	this.remainder = this.numberOfPlayers % this.numberOfTeams;
	this.playersPerTeam = Math.floor(this.numberOfPlayers / this.numberOfTeams);

	console.log(this.remainder);

	// I don't like this, but NYE is on wednesday

	if(this.remainder > 0) {
		for(; i<this.numberOfTeams; i++) {
			shuffledTeams.push(i);
		}
		i=0;
		for(; rem<this.remainder; rem++) {
			this.shuffle(shuffledTeams);
			modifiedCounts[shuffledTeams.shift()] = 1;
		}
	}

	for( ; i<this.numberOfTeams; i++ ) {
		j=0;
		total = modifiedCounts[i] ? modifiedCounts[i] + this.playersPerTeam : this.playersPerTeam;
		console.log(modifiedCounts);
		console.log(i,total);
		for( ; j<total; j++ ) {
			this.availableTeams.push(i);
		}
	}

	this.shuffle(this.availableTeams);

}, fn = TeamSorter.prototype;

fn.shuffle = function(arr) {
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    
    return this;
}

fn.pickTeam = function() {
	var team = this.availableTeams.shift();

	this.shuffle(this.availableTeams);
	return team;
};

module.exports = TeamSorter;
