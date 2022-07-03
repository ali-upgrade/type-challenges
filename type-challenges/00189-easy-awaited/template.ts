type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer x> 
? x extends Promise<unknown> ? MyAwaited<x> : x
: never;

//infer