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
for (var i = 0; i <= 100; i += 1) {
    document.writeln('// ' + i + ': ' + fib(i));
}
