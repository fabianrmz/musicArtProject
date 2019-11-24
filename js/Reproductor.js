var cancion = document.getElementById("myAudio"); 

var stringe =[329.64, 349.24,392,440,493.92,523.28,587.36,659.26,698.48,784,880,987.84,1046.57,1174.72]
var stringB =[246.96,261.6,293.68,329.64,349.24,392,440,493.92,523.28,587.36,659.26,698.48,784,880]
var stringG =[196,220,246.96,261.54,293.68,329.64,349.24,392,440,493.92,523.28,587.36,659.28,698.48]
var stringD =[146.84, 164.82, 174.62, 196,  220,  246.96, 261.64,  293.68,  329.64, 349.24,  329.64,349.24,392,440,493.92,523.28]
var stringA =[110, 123.48, 130.82,  146.84,  164.82, 174.62,  196,  220,  246.96, 261.64,  293.68,  329.64, 349.24,  392]
var stringE =[82.41, 87.31,  98, 110,  123.48, 130.82,  146.84, 164.82, 174.62,  196, 220,  246.96, 261.64,  293.68]
var songOn=false;
var tableNotes=[[329.64, 349.24,392,440,493.92,523.28,587.36,659.26,698.48,784,880,987.84,1046.57,1174.72],[246.96,261.6,293.68,329.64,349.24,392,440,493.92,523.28,587.36,659.26,698.48,784,880],[196,220,246.96,261.54,293.68,329.64,349.24,392,440,493.92,523.28,587.36,659.28,698.48],[146.84, 164.82, 174.62, 196,  220,  246.96, 261.64,  293.68,  329.64, 349.24,  329.64,349.24,392,440,493.92,523.28],[110, 123.48, 130.82,  146.84,  164.82, 174.62,  196,  220,  246.96, 261.64,  293.68,  329.64, 349.24,  392],[82.41, 87.31,  98, 110,  123.48, 130.82,  146.84, 164.82, 174.62,  196, 220,  246.96, 261.64,  293.68]]
console.log(stringA.length)
function playAudio() { 
  cancion.play(); 
} 

function pauseAudio() { 
  cancion.pause(); 
} 
function startImprovise(){
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
  var y= Math.floor(Math.random() * 155);
  while(tableNotes[x][y]==0){
    x=Math.floor(Math.random() * 6);
    y= Math.floor(Math.random() * 15);
  }
  
  var count=0;
  while(songOn){

    playTone(tableNotes[x][y],"sawtooth", .5);
   
    console.log(tableNotes[x][y])
    console.log(x+" "+y)
    x=x+getRndInteger(-1,2);
    y=y+getRndInteger(-1,2);
    while((x<0 || x>5) && (y>14 || y<0)){
      x=x+getRndInteger(-1,2);
      y=y+getRndInteger(-1,2);
    }
   
    count++;
    if(count==4){
      x=Math.floor(Math.random() * 6);
      y= Math.floor(Math.random() * 15);
      count=0;
    }
    sleep(100)
    
  }

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function stop(){
  songOn=false;
}