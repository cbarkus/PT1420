var canvas = document.getElementById("board");
var drawing = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

//This is the ball
var pos = {x: 10, y: 10, vx: 10, vy: 10, sx: 10, sy: 10};
//This is the paddle
var pad = {x: canvas.width * 0.85, y: (canvas.height / 2), sx: 20, sy: canvas.height / 5.6};
var interval;
var dist = canvas.height / 5;



drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);


function loop() {
	drawing.clearRect(0,0,canvas.width, canvas.height);
	
	//Adjust our postion by velocity of x and y
	pos.x = pos.x + pos.vx;
	pos.y = pos.y + pos.vy;
	
	if(pos.x > pad.x && pos.y > pad.y) {
		if(pos.x < (pad.x + pad.sx) && pos.y < (pad.y + pad.sy)) {
			pos.vx = pos.vx * -1;
		}
	}

	//change direction if it hits a wall
	if(pos.x >= canvas.width - 20) {pos.vx = pos.vx * -1; }
	if(pos.y >= canvas.height - 20) {pos.vy = pos.vy * -1; }
	if(pos.x <= 0) {pos.vx = pos.vx * -1; }
	if(pos.y <= 0) {pos.vy = pos.vy * -1; }
		
	drawing.fillRect(pad.x, pad.y, pad.sx, pad.sy);	drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);
}

document.onkeydown = function(e) {
	
	if(e.keyCode == 38) {
		if(pad.y <= 0) {
			return false;
		}
			pad.y = pad.y - dist;
			return false;
	} else if (e.keyCode == 40) {
		if((pad.y + pad.sy) >= canvas.height) {
			return false;
		} 
		pad.y = pad.y + dist;
			return false;
			
		}
}

interval = setInterval(loop, 10);
