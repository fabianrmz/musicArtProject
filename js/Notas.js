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
  

