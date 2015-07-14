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
		// we start with fib(2), so previous value is 1, current value  is 1
		previous = 1;
		current = 1;
	
		// we know fib(1) and fib(2), let's get fib(3)..fib(n)
		for (i = 3; i<=n; i++)
	    {
	      // temporary value is previous + current
		  temp = previous + current;
		  //  previous value is now current value
		  previous  = current;
		  //  current value is now temporary value
		  current = temp;
    }
	   return current;
   }
}