var i=0;
var mem = [];
function fib(n){

	var previous;
	var current;
	var temp;
	
	if (n == 0)
	{
		return n;
	}
	else
	{
		previous = 1;
		current = 1;
	

		for (i = 3; i<=n; i++)
	    {
		  temp = previous + current;
		  previous  = current;
		  current = temp;
    }
	   return current;
   }
}
for (var i = 0; i <= 50; i += 1) {
    document.writeln('// ' + i + ': ' + fib(i));