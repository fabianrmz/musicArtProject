


var stringe =[329.64, 349.24,370,392,415.32,440,466.16,493.92,523.28,554.40,587.36,622.24,659.26,698.48,739.99,784,830.64,880,932.32,987.84,1046.57]
var stringB =[]
var stringG =[]
var stringA =[]
var stringE =[82.41,87.31]
console.log(stringe.length)

function notas(){
    var i;
    for(i=0;i<stringe.length;i++){
        
        ReproducirNota(stringe[i])

        sleep(500)
    }
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }