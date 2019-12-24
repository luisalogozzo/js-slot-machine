var RandomNumLeft;
var RandomNumCenter;
var RandomNumRight;
var count = 0;
var Gioca = document.getElementById('gioca');
var Tentativi = document.getElementById('tentativi');


Gioca.addEventListener('click',
function () {
document.getElementById('container').className = 'visible'
document.getElementById('title').className = 'hidden'
Gioca.onclick = function(){
count++;
Tentativi.innerHTML = 'Tentativi: ' + count;
}
console.log(Tentativi.innerHTML);
RandomNumLeft = Math.floor(Math.random() * 5);
if (RandomNumLeft == 0) {
 document.getElementById('image-left').className = 'cherries';
} else if (RandomNumLeft == 1) {
  document.getElementById('image-left').className = 'seven';
} else if (RandomNumLeft == 2) {
  document.getElementById('image-left').className = 'banana';
} else if (RandomNumLeft == 3) {
  document.getElementById('image-left').className = 'melon';
} else if (RandomNumLeft == 4) {
  document.getElementById('image-left').className = 'bell';
}

RandomNumCenter = Math.floor(Math.random() * 5);
if (RandomNumCenter == 0) {
 document.getElementById('image-center').className = 'cherries';
} else if (RandomNumCenter == 1) {
  document.getElementById('image-center').className = 'seven';
} else if (RandomNumCenter == 2){
  document.getElementById('image-center').className = 'banana';
} else if (RandomNumCenter == 3){
  document.getElementById('image-center').className = 'melon';
} else if (RandomNumCenter == 4){
  document.getElementById('image-center').className = 'bell';
}

RandomNumRight = Math.floor(Math.random() * 5);
if (RandomNumRight == 0) {
 document.getElementById('image-right').className = 'cherries';
} else if (RandomNumRight == 1) {
  document.getElementById('image-right').className = 'seven';
} else if (RandomNumRight == 2) {
  document.getElementById('image-right').className = 'banana';
} else if (RandomNumRight == 3) {
  document.getElementById('image-right').className = 'melon';
} else if (RandomNumCenter == 4){
  document.getElementById('image-right').className = 'bell';
}

if (RandomNumLeft == RandomNumRight && RandomNumLeft == RandomNumCenter) {
  document.getElementById('esito').innerHTML = 'Congratulazioni, hai vinto!';
} else {
  document.getElementById('esito').innerHTML = 'Hai perso. Ritenta.';
}
});
