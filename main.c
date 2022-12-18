#include <stdio.h> 
#include "./go/go-ffi.h"

int main() {
    int foo = Sub(10, 20);
    printf("foo %d", foo);

    char text[] = "Hello!!";

    GoString gostring = {
        p: text,
        n: sizeof(text)
    };

    PrintToConsole(gostring);
}