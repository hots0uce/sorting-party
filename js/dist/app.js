(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ui = require('./ui.js');


ui.init();

},{"./ui.js":4}],2:[function(require,module,exports){
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
},{"./team.js":3}],3:[function(require,module,exports){


var TeamSorter = function(numberOfTeams, numberOfPlayers) {
	var i=0, j=0;
	//this.teams = teams;
	this.availableTeams = [];
	this.numberOfTeams = numberOfTeams;
	this.numberOfPlayers = numberOfPlayers;

	this.playersPerTeam = Math.ceil(this.numberOfPlayers / this.numberOfTeams);

	for( ; i<this.numberOfTeams; i++ ) {
		j=0;
		for( ; j<this.playersPerTeam; j++ ) {
			this.availableTeams.push(i);
		}
	}

	this.shuffleTeams();

}, fn = TeamSorter.prototype;

fn.shuffleTeams = function() {
    for(var j, x, i = this.availableTeams.length; i; j = Math.floor(Math.random() * i), x = this.availableTeams[--i], this.availableTeams[i] = this.availableTeams[j], this.availableTeams[j] = x);
    
    return this;
}

fn.pickTeam = function() {
	var team = this.availableTeams.shift();

	this.shuffleTeams();
	return team;
};

module.exports = TeamSorter;

},{}],4:[function(require,module,exports){
var hogwartz = require('./hogwartz'),
	ts, results;

window.hogwartz = hogwartz;


exports.init = function() {
	var inTeams = $('.in-teams'),
		inPlayers = $('.in-players'),
		pickBtn = $('.js-pick-team');

	results = {
		'Gryffindor': {
			el: $('.house-Gryffindor .count')
		},
		'Hufflepuff': {
			el: $('.house-Hufflepuff .count')
		},
		'Ravenclaw': {
			el: $('.house-Ravenclaw .count')
		},
		'Slytherin': {
			el: $('.house-Slytherin .count')
		}
	};

	hogwartz.init(inPlayers.val());
	pickBtn.off('click').on('click',this.pick);
	inPlayers.off('change').on('change',function(e) {
		exports.reset();
	});
};

exports.pick = function(e) {
	e && e.preventDefault && e.preventDefault();
	if(hogwartz.remaining > 0) {

		var team = hogwartz.pickTeam();

		exports.updateRemaining();
		results[team].el.text(new Number(results[team].el.text())+1);
	}
};

exports.updateRemaining = function() {
	$('.remaining').text(hogwartz.remaining);
};

exports.reset = function() {
	this.init();
	$('.count').text('0');
	this.updateRemaining();
}
},{"./hogwartz":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhnaXVmZnJpZGEvcHJvamVjdHMvc29ydGluZy1wYXJ0eS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9zZXBoZ2l1ZmZyaWRhL3Byb2plY3RzL3NvcnRpbmctcGFydHkvanMvc3JjL2Zha2VfNDE0MjkzZmYuanMiLCIvVXNlcnMvam9zZXBoZ2l1ZmZyaWRhL3Byb2plY3RzL3NvcnRpbmctcGFydHkvanMvc3JjL2hvZ3dhcnR6LmpzIiwiL1VzZXJzL2pvc2VwaGdpdWZmcmlkYS9wcm9qZWN0cy9zb3J0aW5nLXBhcnR5L2pzL3NyYy90ZWFtLmpzIiwiL1VzZXJzL2pvc2VwaGdpdWZmcmlkYS9wcm9qZWN0cy9zb3J0aW5nLXBhcnR5L2pzL3NyYy91aS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHVpID0gcmVxdWlyZSgnLi91aS5qcycpO1xuXG5cbnVpLmluaXQoKTtcbiIsInZhciBUZWFtU29ydGVyID0gcmVxdWlyZSgnLi90ZWFtLmpzJyksXG5cdGhvdXNlcyA9IFsnR3J5ZmZpbmRvcicsJ0h1ZmZsZXB1ZmYnLCdSYXZlbmNsYXcnLCdTbHl0aGVyaW4nXSxcblx0dHM7XG5cblxuZXhwb3J0cy5yZW1haW5pbmcgPSAwO1xuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24ocGxheWVyc0NvdW50KSB7XG5cdGV4cG9ydHMudHMgPSBuZXcgVGVhbVNvcnRlcihob3VzZXMubGVuZ3RoLCBwbGF5ZXJzQ291bnQpO1xuXHR0aGlzLnJlbWFpbmluZyA9IHRoaXMudHMuYXZhaWxhYmxlVGVhbXMubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5waWNrVGVhbSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGVhbUlkeCA9IGV4cG9ydHMudHMucGlja1RlYW0oKTtcblx0dGhpcy5yZW1haW5pbmcgPSB0aGlzLnRzLmF2YWlsYWJsZVRlYW1zLmxlbmd0aDtcblx0cmV0dXJuIGhvdXNlc1t0ZWFtSWR4XTtcbn07XG5cbmV4cG9ydHMucmVzZXQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5pbml0KCk7XG59IiwiXG5cbnZhciBUZWFtU29ydGVyID0gZnVuY3Rpb24obnVtYmVyT2ZUZWFtcywgbnVtYmVyT2ZQbGF5ZXJzKSB7XG5cdHZhciBpPTAsIGo9MDtcblx0Ly90aGlzLnRlYW1zID0gdGVhbXM7XG5cdHRoaXMuYXZhaWxhYmxlVGVhbXMgPSBbXTtcblx0dGhpcy5udW1iZXJPZlRlYW1zID0gbnVtYmVyT2ZUZWFtcztcblx0dGhpcy5udW1iZXJPZlBsYXllcnMgPSBudW1iZXJPZlBsYXllcnM7XG5cblx0dGhpcy5wbGF5ZXJzUGVyVGVhbSA9IE1hdGguY2VpbCh0aGlzLm51bWJlck9mUGxheWVycyAvIHRoaXMubnVtYmVyT2ZUZWFtcyk7XG5cblx0Zm9yKCA7IGk8dGhpcy5udW1iZXJPZlRlYW1zOyBpKysgKSB7XG5cdFx0aj0wO1xuXHRcdGZvciggOyBqPHRoaXMucGxheWVyc1BlclRlYW07IGorKyApIHtcblx0XHRcdHRoaXMuYXZhaWxhYmxlVGVhbXMucHVzaChpKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLnNodWZmbGVUZWFtcygpO1xuXG59LCBmbiA9IFRlYW1Tb3J0ZXIucHJvdG90eXBlO1xuXG5mbi5zaHVmZmxlVGVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IodmFyIGosIHgsIGkgPSB0aGlzLmF2YWlsYWJsZVRlYW1zLmxlbmd0aDsgaTsgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gdGhpcy5hdmFpbGFibGVUZWFtc1stLWldLCB0aGlzLmF2YWlsYWJsZVRlYW1zW2ldID0gdGhpcy5hdmFpbGFibGVUZWFtc1tqXSwgdGhpcy5hdmFpbGFibGVUZWFtc1tqXSA9IHgpO1xuICAgIFxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mbi5waWNrVGVhbSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGVhbSA9IHRoaXMuYXZhaWxhYmxlVGVhbXMuc2hpZnQoKTtcblxuXHR0aGlzLnNodWZmbGVUZWFtcygpO1xuXHRyZXR1cm4gdGVhbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGVhbVNvcnRlcjtcbiIsInZhciBob2d3YXJ0eiA9IHJlcXVpcmUoJy4vaG9nd2FydHonKSxcblx0dHMsIHJlc3VsdHM7XG5cbndpbmRvdy5ob2d3YXJ0eiA9IGhvZ3dhcnR6O1xuXG5cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgaW5UZWFtcyA9ICQoJy5pbi10ZWFtcycpLFxuXHRcdGluUGxheWVycyA9ICQoJy5pbi1wbGF5ZXJzJyksXG5cdFx0cGlja0J0biA9ICQoJy5qcy1waWNrLXRlYW0nKTtcblxuXHRyZXN1bHRzID0ge1xuXHRcdCdHcnlmZmluZG9yJzoge1xuXHRcdFx0ZWw6ICQoJy5ob3VzZS1HcnlmZmluZG9yIC5jb3VudCcpXG5cdFx0fSxcblx0XHQnSHVmZmxlcHVmZic6IHtcblx0XHRcdGVsOiAkKCcuaG91c2UtSHVmZmxlcHVmZiAuY291bnQnKVxuXHRcdH0sXG5cdFx0J1JhdmVuY2xhdyc6IHtcblx0XHRcdGVsOiAkKCcuaG91c2UtUmF2ZW5jbGF3IC5jb3VudCcpXG5cdFx0fSxcblx0XHQnU2x5dGhlcmluJzoge1xuXHRcdFx0ZWw6ICQoJy5ob3VzZS1TbHl0aGVyaW4gLmNvdW50Jylcblx0XHR9XG5cdH07XG5cblx0aG9nd2FydHouaW5pdChpblBsYXllcnMudmFsKCkpO1xuXHRwaWNrQnRuLm9mZignY2xpY2snKS5vbignY2xpY2snLHRoaXMucGljayk7XG5cdGluUGxheWVycy5vZmYoJ2NoYW5nZScpLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKGUpIHtcblx0XHRleHBvcnRzLnJlc2V0KCk7XG5cdH0pO1xufTtcblxuZXhwb3J0cy5waWNrID0gZnVuY3Rpb24oZSkge1xuXHRlICYmIGUucHJldmVudERlZmF1bHQgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRpZihob2d3YXJ0ei5yZW1haW5pbmcgPiAwKSB7XG5cblx0XHR2YXIgdGVhbSA9IGhvZ3dhcnR6LnBpY2tUZWFtKCk7XG5cblx0XHRleHBvcnRzLnVwZGF0ZVJlbWFpbmluZygpO1xuXHRcdHJlc3VsdHNbdGVhbV0uZWwudGV4dChuZXcgTnVtYmVyKHJlc3VsdHNbdGVhbV0uZWwudGV4dCgpKSsxKTtcblx0fVxufTtcblxuZXhwb3J0cy51cGRhdGVSZW1haW5pbmcgPSBmdW5jdGlvbigpIHtcblx0JCgnLnJlbWFpbmluZycpLnRleHQoaG9nd2FydHoucmVtYWluaW5nKTtcbn07XG5cbmV4cG9ydHMucmVzZXQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5pbml0KCk7XG5cdCQoJy5jb3VudCcpLnRleHQoJzAnKTtcblx0dGhpcy51cGRhdGVSZW1haW5pbmcoKTtcbn0iXX0=
