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