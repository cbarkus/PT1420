function fib(n)
{
    if (n <= 1)
     {
        return n;
     }
    else
    {
      return fib(n-1) + fib(n-2);
    }
}
for (var i = 0; i <= 50; i += 1) {
    document.writeln('// ' + i + ': ' + fib(i));
}
var i=0;
var mem = [];
function fib(n){
	var x;
    if (n <= 1)
	{
		x =  n;
	}
	else
	{
		if (mem[n-1] == null)
		    mem[n-1] = fib(n-1);
		if (mem[n-2] == null)
		    mem[n-2] = fib(n-2);

		y = mem[n-1];
		z = mem[n-2];
		x = y + z;
	}
	return x;
}
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