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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhnaXVmZnJpZGEvcHJvamVjdHMvc29ydGluZy1wYXJ0eS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9zZXBoZ2l1ZmZyaWRhL3Byb2plY3RzL3NvcnRpbmctcGFydHkvanMvc3JjL2Zha2VfMWJlMWEwMDYuanMiLCIvVXNlcnMvam9zZXBoZ2l1ZmZyaWRhL3Byb2plY3RzL3NvcnRpbmctcGFydHkvanMvc3JjL2hvZ3dhcnR6LmpzIiwiL1VzZXJzL2pvc2VwaGdpdWZmcmlkYS9wcm9qZWN0cy9zb3J0aW5nLXBhcnR5L2pzL3NyYy90ZWFtLmpzIiwiL1VzZXJzL2pvc2VwaGdpdWZmcmlkYS9wcm9qZWN0cy9zb3J0aW5nLXBhcnR5L2pzL3NyYy91aS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHVpID0gcmVxdWlyZSgnLi91aS5qcycpO1xuXG5cbnVpLmluaXQoKTtcbiIsInZhciBUZWFtU29ydGVyID0gcmVxdWlyZSgnLi90ZWFtLmpzJyksXG5cdGhvdXNlcyA9IFsnR3J5ZmZpbmRvcicsJ0h1ZmZsZXB1ZmYnLCdSYXZlbmNsYXcnLCdTbHl0aGVyaW4nXSxcblx0dHM7XG5cblxuZXhwb3J0cy5yZW1haW5pbmcgPSAwO1xuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24ocGxheWVyc0NvdW50KSB7XG5cdGV4cG9ydHMudHMgPSBuZXcgVGVhbVNvcnRlcihob3VzZXMubGVuZ3RoLCBwbGF5ZXJzQ291bnQpO1xuXHR0aGlzLnJlbWFpbmluZyA9IHRoaXMudHMuYXZhaWxhYmxlVGVhbXMubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5waWNrVGVhbSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGVhbUlkeCA9IGV4cG9ydHMudHMucGlja1RlYW0oKTtcblx0dGhpcy5yZW1haW5pbmcgPSB0aGlzLnRzLmF2YWlsYWJsZVRlYW1zLmxlbmd0aDtcblx0cmV0dXJuIGhvdXNlc1t0ZWFtSWR4XTtcbn07XG5cbmV4cG9ydHMucmVzZXQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5pbml0KCk7XG59IiwiXG5cbnZhciBUZWFtU29ydGVyID0gZnVuY3Rpb24obnVtYmVyT2ZUZWFtcywgbnVtYmVyT2ZQbGF5ZXJzKSB7XG5cdHZhciBpPTAsIGo9MCwgcmVtID0gMCwgbW9kaWZpZWRDb3VudHMgPSB7fSwgc2h1ZmZsZWRUZWFtcyA9IFtdLCB0b3RhbCA9IDA7XG5cdHRoaXMuYXZhaWxhYmxlVGVhbXMgPSBbXTtcblx0dGhpcy5udW1iZXJPZlRlYW1zID0gbnVtYmVyT2ZUZWFtcztcblx0dGhpcy5udW1iZXJPZlBsYXllcnMgPSBudW1iZXJPZlBsYXllcnM7XG5cblx0dGhpcy5yZW1haW5kZXIgPSB0aGlzLm51bWJlck9mUGxheWVycyAlIHRoaXMubnVtYmVyT2ZUZWFtcztcblx0dGhpcy5wbGF5ZXJzUGVyVGVhbSA9IE1hdGguZmxvb3IodGhpcy5udW1iZXJPZlBsYXllcnMgLyB0aGlzLm51bWJlck9mVGVhbXMpO1xuXG5cdGNvbnNvbGUubG9nKHRoaXMucmVtYWluZGVyKTtcblxuXHQvLyBJIGRvbid0IGxpa2UgdGhpcywgYnV0IE5ZRSBpcyBvbiB3ZWRuZXNkYXlcblxuXHRpZih0aGlzLnJlbWFpbmRlciA+IDApIHtcblx0XHRmb3IoOyBpPHRoaXMubnVtYmVyT2ZUZWFtczsgaSsrKSB7XG5cdFx0XHRzaHVmZmxlZFRlYW1zLnB1c2goaSk7XG5cdFx0fVxuXHRcdGk9MDtcblx0XHRmb3IoOyByZW08dGhpcy5yZW1haW5kZXI7IHJlbSsrKSB7XG5cdFx0XHR0aGlzLnNodWZmbGUoc2h1ZmZsZWRUZWFtcyk7XG5cdFx0XHRtb2RpZmllZENvdW50c1tzaHVmZmxlZFRlYW1zLnNoaWZ0KCldID0gMTtcblx0XHR9XG5cdH1cblxuXHRmb3IoIDsgaTx0aGlzLm51bWJlck9mVGVhbXM7IGkrKyApIHtcblx0XHRqPTA7XG5cdFx0dG90YWwgPSBtb2RpZmllZENvdW50c1tpXSA/IG1vZGlmaWVkQ291bnRzW2ldICsgdGhpcy5wbGF5ZXJzUGVyVGVhbSA6IHRoaXMucGxheWVyc1BlclRlYW07XG5cdFx0Y29uc29sZS5sb2cobW9kaWZpZWRDb3VudHMpO1xuXHRcdGNvbnNvbGUubG9nKGksdG90YWwpO1xuXHRcdGZvciggOyBqPHRvdGFsOyBqKysgKSB7XG5cdFx0XHR0aGlzLmF2YWlsYWJsZVRlYW1zLnB1c2goaSk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaHVmZmxlKHRoaXMuYXZhaWxhYmxlVGVhbXMpO1xuXG59LCBmbiA9IFRlYW1Tb3J0ZXIucHJvdG90eXBlO1xuXG5mbi5zaHVmZmxlID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgZm9yKHZhciBqLCB4LCBpID0gYXJyLmxlbmd0aDsgaTsgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gYXJyWy0taV0sIGFycltpXSA9IGFycltqXSwgYXJyW2pdID0geCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZuLnBpY2tUZWFtID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0ZWFtID0gdGhpcy5hdmFpbGFibGVUZWFtcy5zaGlmdCgpO1xuXG5cdHRoaXMuc2h1ZmZsZSh0aGlzLmF2YWlsYWJsZVRlYW1zKTtcblx0cmV0dXJuIHRlYW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1Tb3J0ZXI7XG4iLCJ2YXIgaG9nd2FydHogPSByZXF1aXJlKCcuL2hvZ3dhcnR6JyksXG5cdHRzLCByZXN1bHRzO1xuXG53aW5kb3cuaG9nd2FydHogPSBob2d3YXJ0ejtcblxuXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbigpIHtcblx0dmFyIGluVGVhbXMgPSAkKCcuaW4tdGVhbXMnKSxcblx0XHRpblBsYXllcnMgPSAkKCcuaW4tcGxheWVycycpLFxuXHRcdHBpY2tCdG4gPSAkKCcuanMtcGljay10ZWFtJyk7XG5cblx0cmVzdWx0cyA9IHtcblx0XHQnR3J5ZmZpbmRvcic6IHtcblx0XHRcdGVsOiAkKCcuaG91c2UtR3J5ZmZpbmRvciAuY291bnQnKVxuXHRcdH0sXG5cdFx0J0h1ZmZsZXB1ZmYnOiB7XG5cdFx0XHRlbDogJCgnLmhvdXNlLUh1ZmZsZXB1ZmYgLmNvdW50Jylcblx0XHR9LFxuXHRcdCdSYXZlbmNsYXcnOiB7XG5cdFx0XHRlbDogJCgnLmhvdXNlLVJhdmVuY2xhdyAuY291bnQnKVxuXHRcdH0sXG5cdFx0J1NseXRoZXJpbic6IHtcblx0XHRcdGVsOiAkKCcuaG91c2UtU2x5dGhlcmluIC5jb3VudCcpXG5cdFx0fVxuXHR9O1xuXG5cdGhvZ3dhcnR6LmluaXQoaW5QbGF5ZXJzLnZhbCgpKTtcblx0cGlja0J0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJyx0aGlzLnBpY2spO1xuXHRpblBsYXllcnMub2ZmKCdjaGFuZ2UnKS5vbignY2hhbmdlJyxmdW5jdGlvbihlKSB7XG5cdFx0ZXhwb3J0cy5yZXNldCgpO1xuXHR9KTtcbn07XG5cbmV4cG9ydHMucGljayA9IGZ1bmN0aW9uKGUpIHtcblx0ZSAmJiBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcblx0aWYoaG9nd2FydHoucmVtYWluaW5nID4gMCkge1xuXG5cdFx0dmFyIHRlYW0gPSBob2d3YXJ0ei5waWNrVGVhbSgpO1xuXG5cdFx0ZXhwb3J0cy51cGRhdGVSZW1haW5pbmcoKTtcblx0XHRyZXN1bHRzW3RlYW1dLmVsLnRleHQobmV3IE51bWJlcihyZXN1bHRzW3RlYW1dLmVsLnRleHQoKSkrMSk7XG5cdH1cbn07XG5cbmV4cG9ydHMudXBkYXRlUmVtYWluaW5nID0gZnVuY3Rpb24oKSB7XG5cdCQoJy5yZW1haW5pbmcnKS50ZXh0KGhvZ3dhcnR6LnJlbWFpbmluZyk7XG59O1xuXG5leHBvcnRzLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuaW5pdCgpO1xuXHQkKCcuY291bnQnKS50ZXh0KCcwJyk7XG5cdHRoaXMudXBkYXRlUmVtYWluaW5nKCk7XG59Il19
