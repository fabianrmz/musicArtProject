var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
function playNote(frequency, duration) {
    // create Oscillator node
    var oscillator = audioCtx.createOscillator();
  
    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  
    setTimeout(
      function() {
        oscillator.stop();
        playMelody();
      }, duration);
  }
  

  function playMelody() {
    if (notes.length > 0) {
      note = notes.pop();
      playNote(note[0], 1000 * 256 / (note[1] * tempo));
    }
  }