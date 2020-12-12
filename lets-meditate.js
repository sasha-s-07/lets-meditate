window.onload = letsMeditate

//window onload function
function letsMeditate(){
//variables
var rainAudio = document.getElementById("rainSound");
var rainImage = document.getElementById("rainImg");

var oceanAudio = document.getElementById("oceanSound");
var oceanImage = document.getElementById("oceanImg");

var rainforestAudio = document.getElementById("rainforestSound");
var rainforestImage = document.getElementById("rainforestImg");

var pauseBtn = document.getElementById("pause-btn")

var twominBtn = document.getElementById("twoMin");
var threeminBtn = document.getElementById("threeMin");
var fiveminBtn = document.getElementById("fiveMin");

//function to play rain audio
function playrainAudio (){

    rainAudio.play();
}
//function to play ocean audio
function playoceanAudio (){

    oceanAudio.play();
}
//function to play rainforest audio
function playrainforestAudio (){

    rainforestAudio.play();
}

///function to stop playing sound after 2 mins
var buttonTimer;
function twominTimer(){
  buttonTimer = setTimeout(stopMusic,120000);

threeminBtn.style.display = "none";
fiveminBtn.style.display = "none";
}
///function to stop playing sound after 3 mins
function threeminTimer(){
  buttonTimer = setTimeout(stopMusic,180000);
  twominBtn.style.display = "none";
  fiveminBtn.style.display = "none";
}
///function to stop playing sound after 5 mins
function fiveminTimer(){
  buttonTimer = setTimeout(stopMusic,300000);
  twominBtn.style.display = "none";
  threeminBtn.style.display = "none";
}
///function to stop playing sound 
function stopMusic (){
rainAudio.pause();
oceanAudio.pause();
rainforestAudio.pause();
}
///event listeners
  rainImage.onclick = playrainAudio;
  oceanImage.onclick = playoceanAudio;
  rainforestImage.onclick = playrainforestAudio;
  twominBtn.onclick = twominTimer;
  threeminBtn.onclick = threeminTimer;
  fiveminBtn.onclick = fiveminTimer;
  pauseBtn.onclick = stopMusic;

} //end of letsMeditate function
