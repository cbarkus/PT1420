var canvas = document.getElementById("board");
var drawing = canvas.getContext("2d");
//THis is the ball
var pos = {x: 10, y: 10, vx: 15, vy: 15, sx: 10, sy: 10};
var interval;

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);

function loop() {
	drawing.clearRect(0,0,canvas.width, canvas.height);
	//Adjust our postion by velocity of x
	pos.x = pos.x + pos.vx;
	//Adjust our postion by velocity of y
	pos.y = pos.y + pos.vy;
	drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);
}

interval = setInterval(loop, 50);
