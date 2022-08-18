var count = 0;

var _dirt = document.getElementsByClassName("dirt");
var _mole = document.getElementsByClassName("mole");
var points = document.querySelectorAll(".points");
var mole1 = document.querySelectorAll(".mole");
var strbtn= document.querySelector('#_start');
var startmole= document.querySelector('#_mole_');
var startdirt= document.querySelector('#_mud_');


function start() {
//   startdirt.style.visibility = "hidden";
  startmole.style.visibility = "hidden";
  strbtn.style.visibility = "hidden";

  for (var i = 0; i < 6; i++) {
    _dirt[i].style.visibility = "visible";
  }
  for (var i = 0; i < 2; i++) {
    points[i].style.visibility = "visible";
  }
  setInterval(rand, 2000);
};

function rand() {
  var random = Math.floor(Math.random()*6) + 1;
  var y = random;
  mole1[y].style.visibility = "visible";
  mole1[y].onclick = currentpoints;
  function hide() {
    mole1[y].style.visibility = "hidden";
  }
  setTimeout(hide, 1000);
}

function currentpoints() {
  ++count;
  points[1].textContent = count;
}
