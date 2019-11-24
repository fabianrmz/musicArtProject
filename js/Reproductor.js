var cancion = document.getElementById("myAudio"); 

var stringe =[329.64, 349.24,0,392,0,440,0,493.92,523.28,0,587.36,0,659.26,698.48,0,784,0,880,0,987.84,1046.57,0,1174.72]
var stringB =[246.96,261.6,0,293.68,0,329.64,349.24,0,392,0,440,0,493.92,523.28,0,587.36,0,659.26,698.48,0,784,0,880]
var stringG =[196, 0,220,0,246.96,261.54, 0,293.68,0,329.64,349.24,0,392,0,440,0,493.92,523.28,0,587.36,0,659.28,698.48]
var stringD =[146.84, 0, 164.82, 174.62, 0, 196, 0, 220, 0, 246.96, 261.64, 0, 293.68, 0, 329.64, 349.24, 0, 329.64,349.24,0,392,0,440,0,493.92,523.28]
var stringA =[110, 0, 123.48, 130.82, 0, 146.84, 0, 164.82, 174.62, 0, 196, 0, 220, 0, 246.96, 261.64, 0, 293.68, 0, 329.64, 349.24, 0, 392]
var stringE =[82.41, 87.31, 0, 98, 0, 110, 0, 123.48, 130.82, 0, 146.84, 0, 164.82, 174.62, 0, 196, 0, 220, 0, 246.96, 261.64, 0, 293.68]
var songOn=false;
var tableNotes=[[329.64, 349.24,0,392,0,440,0,493.92,523.28,0,587.36,0,659.26,698.48,0,784,0,880,0,987.84,1046.57,0,1174.72],[246.96,261.6,0,293.68,0,329.64,349.24,0,392,0,440,0,493.92,523.28,0,587.36,0,659.26,698.48,0,784,0,880],[196, 0,220,0,246.96,261.54, 0,293.68,0,329.64,349.24,0,392,0,440,0,493.92,523.28,0,587.36,0,659.28,698.48], [146.84, 0, 164.82, 174.62, 0, 196, 0, 220, 0, 246.96, 261.64, 0, 293.68, 0, 329.64, 349.24, 0, 329.64,349.24,0,392,0,440,0,493.92,523.28], [110, 0, 123.48, 130.82, 0, 146.84, 0, 164.82, 174.62, 0, 196, 0, 220, 0, 246.96, 261.64, 0, 293.68, 0, 329.64, 349.24, 0, 392], [82.41, 87.31, 0, 98, 0, 110, 0, 123.48, 130.82, 0, 146.84, 0, 164.82, 174.62, 0, 196, 0, 220, 0, 246.96, 261.64, 0, 293.68]]

function playAudio() { 
  cancion.play(); 
} 

function pauseAudio() { 
  cancion.pause(); 
} 
function startImprovise(){
  playAudio()
  sleep(13000)
  start();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function start(){
  songOn=true;
  
  var x=Math.floor(Math.random() * 6);
  var y= Math.floor(Math.random() * 23);
  while(tableNotes[x][y]==0){
    x=Math.floor(Math.random() * 6);
    y= Math.floor(Math.random() * 23);
  }
  
  var count=0;
  while(songOn){

    
    playTone(tableNotes[x][y], "sawtooth", 1);
    console.log(tableNotes[x][y])

    while(!(x>=0 && x<=5 && y<=23 && y>=0) && tableNotes[x][y]==0){
      x+=getRndInteger(-1,2);
      y+=getRndInteger(-1,2);
    }

    count++
    if(count==4){
      x=Math.floor(Math.random() * 6);
      y= Math.floor(Math.random() * 23);
      count=0;
    }
    sleep(3000)
    
  }

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}