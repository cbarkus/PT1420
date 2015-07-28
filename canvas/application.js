var canvas = document.getElementById("board");
var drawing = canvas.getContext("2d");
var pos = {x: 10, y: 10};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawing.fillRect(pos.x, pos.y, 50, 50)
