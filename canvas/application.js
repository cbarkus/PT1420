var canvas = document.getElementById("board");
var drawing = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
var playerLeft;
var playerRight;
var scores;

//This is the ball
var pos = {x: 10, y: 10, vx: 10, vy: 10, sx: 10, sy: 10};
//This is the paddle
var padR = {x: canvas.width * 0.85, y: (canvas.height / 2), sx: 20, sy: canvas.height / 5.6};
var padL = {x: canvas.width * 0.15, y: (canvas.height / 2), sx: 20, sy: canvas.height / 5.6};
var interval;
var dist = canvas.height / 5;

drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);

function loop() {
	drawing.clearRect(0,0,canvas.width, canvas.height);
	
//Adjust our postion by velocity of x and y
	pos.x = pos.x + pos.vx;
	pos.y = pos.y + pos.vy;
	
	if(pos.x > padR.x && pos.y > padR.y) {
		if(pos.x < (padR.x + padR.sx) && pos.y < (padR.y + padR.sy)) {
			pos.vx = pos.vx * -1;
		}
	}
	if(pos.x > padL.x && pos.y > padL.y) {
		if(pos.x < (padL.x + padL.sx) && pos.y < (padL.y + padL.sy)) {
			pos.vx = pos.vx * -1;	
		}
	}		

//change direction if it hits a wall
	if(pos.x >= canvas.width - 20) {pos.vx = pos.vx * -1; }
	if(pos.y >= canvas.height - 20) {pos.vy = pos.vy * -1; }
	if(pos.x <= 0) {pos.vx = pos.vx * -1; }
	if(pos.y <= 0) {pos.vy = pos.vy * -1; }
		
	drawing.fillRect(padR.x, padR.y, padR.sx, padR.sy);
	drawing.fillRect(padL.x, padL.y, padL.sx, padL.sy);	drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);
}

document.onkeydown = function(e) {
	
	if(e.keyCode == 38) {
		if(padR.y <= 0) {
			return false;
		}
			padR.y = padR.y - dist;
			return false;
	} else if (e.keyCode == 40) {
		if((padR.y + padR.sy) >= canvas.height) {
			return false;
		} 
		padR.y = padR.y + dist;
			return false;
		}
		if(e.keyCode == 87) {
			if(padL.y <= 0) {
			return false;
		}
			padL.y = padL.y - dist;
			return false;
	} else if (e.keyCode == 83) {
		if((padL.y + padL.sy) >= canvas.height) {
			return false;
		} 
			padL.y = padL.y + dist;
			return false;
		}
}

interval = setInterval(loop, 20);
