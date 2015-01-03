window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var sounds = {};

exports.loadSound = function(url,cb) {
  var request = new XMLHttpRequest(),
      dfd = $.Deferred();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      sounds[url] = buffer;
      dfd.resolve(buffer);
    }, dfd.reject);
  }
  request.send();

  return dfd.promise();
};

exports.playSound = function(url) {
  var source = context.createBufferSource(); // creates a sound source
  
  source.buffer = sounds[url];                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);  
}