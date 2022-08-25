var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle="red";
ctx.fillRect(50,50,150,100);

ctx.strokeStyle="blue";
ctx.strokeRect(250,50,150,100);

ctx.fillStyle="orange";
ctx.roundRect(50,200,150,100,[10]);
ctx.fill();

ctx.clearRect(40,40,140,50);
// ctx.clearRect(0,0,canvas.width,canvas.height);\

ctx.font="30px Arial";
ctx.fillStyle="green";
ctx.fillText("hello world",200,200);

ctx.lineWidth=1;
ctx.strokeStyle="purple";
ctx.strokeText("hello world",200,200);
// ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);