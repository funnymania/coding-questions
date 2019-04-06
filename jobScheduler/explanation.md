The question is intentionally vague. Since one is scheduling a function
to run at a certain time in the future, if someone calls our solution
again with another function before this previous one is enacted, we will
need to not overwrite this previous one.

In short, we need to be able to schedule multiple functions.
Timers provide a convenient way to accumulate these kinds of jobs.

We only need to run some function a provided amount of
milliseconds after schedule() is called. I have decided to
require that function in the form of a Runnable. Runnables
only have one method, which means lambdas are fairgame. 
It is easy for a user to implement or utilize Runnables. 