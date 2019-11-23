var context=new AudioContext();
function Nota(frecuencia){
    var oscillator = context.createOscillator();
    tiempo = context.createGain();
    oscillator.connect(tiempo);
    oscillator.type="sawtooth";
    oscillator.frequency.value=frecuencia;
    tiempo.connect(context.destination);
    oscillator.start(0);
    tiempo.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+1.5)
    
}