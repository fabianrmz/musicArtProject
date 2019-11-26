var cancion = document.getElementById("myAudio"); 

var stringe =[329.64, 349.24,392,440,493.92,523.28,587.36,659.26,698.48,784,880,987.84,1046.57,1174.72]
var stringB =[246.96,261.6,293.68,329.64,349.24,392,440,493.92,523.28,587.36,659.26,698.48,784,880]
var stringG =[196,220,246.96,261.54,293.68,329.64,349.24,392,440,493.92,523.28,587.36,659.28,698.48]
var stringD =[146.84, 164.82, 174.62, 196,  220,  246.96, 261.64,  293.68,  329.64, 349.24,  329.64,349.24,392,440,493.92,523.28]
var stringA =[110, 123.48, 130.82,  146.84,  164.82, 174.62,  196,  220,  246.96, 261.64,  293.68,  329.64, 349.24,  392]
var stringE =[82.41, 87.31,  98, 110,  123.48, 130.82,  146.84, 164.82, 174.62,  196, 220,  246.96, 261.64,  293.68]
var songOn=false;
var tableNotes=[[329.64, 349.24,392,440,493.92,523.28,587.36,659.26,698.48,784,880,987.84,1046.57,1174.72],[246.96,261.6,293.68,329.64,349.24,392,440,493.92,523.28,587.36,659.26,698.48,784,880],[196,220,246.96,261.54,293.68,329.64,349.24,392,440,493.92,523.28,587.36,659.28,698.48],[146.84, 164.82, 174.62, 196,  220,  246.96, 261.64,  293.68,  329.64, 349.24, 329.64, 349.24, 392, 440],[110, 123.48, 130.82,  146.84,  164.82, 174.62,  196,  220,  246.96, 261.64,  293.68,  329.64, 349.24,  392],[82.41, 87.31,  98, 110,  123.48, 130.82,  146.84, 164.82, 174.62,  196, 220,  246.96, 261.64,  293.68]]
console.log(stringA.length)
function playAudio() { 
  cancion.play(); 
} 

function pauseAudio() { 
  cancion.pause(); 
} 
function startImprovise(){


  playTone(82.41,"triangle", 1);
  start();
  //playTone(tableNotes[0][0],"sawtooth", 1);
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
  var y= Math.floor(Math.random() * 14);
  
  
  var count=0;
  var i;
  var countChord=0;
  for(i=0;i<300;i++){
    playTone(tableNotes[x][y],"sawtooth", .1);
    
    
   console.log(tableNotes[x][y])
   if(x>0 && x<5 ){
    x+=getRndInteger(-1, 2)
   }else{
    x=Math.floor(Math.random() * 6);
   }

   if(y>0 && y<13){
    y+=getRndInteger(-1, 2)
   }else{
    y= Math.floor(Math.random() * 14);
   }

  
    
   
    count++;
    
    if(count==3){

      playTone(tableNotes[x][y],"triangle", .5);
      x=Math.floor(Math.random() * 6);
      y= Math.floor(Math.random() * 14);
     
      count=0;
      
    }else if(count==0){

      playSound("buzzer")

    }


    
    sleep(100)
    
  }
  playSound("buzzer")

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function stop(){
  songOn=false;
 
}

function playNote(frecuency){
  playTone(frecuency,"sawtooth", .75);
}