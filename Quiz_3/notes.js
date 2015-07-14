var previous = 0
var next = 1
var current = 0
var howManyTimes = 50
var placeToPrint = document.getElementById("ourlist")

while(howManyTimes > 0) {
	current = previous + next;
	placeToPrint.innerHTML += "<div>" + current + "</div>";
	previous = next;
	next = current;
	howManyTimes = howManyTimes - 1
	
}

<body>
	<div id="ourlist">
	</div>
	<script src="application.js"></script>
</body>