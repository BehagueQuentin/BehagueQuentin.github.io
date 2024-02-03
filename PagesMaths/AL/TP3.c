#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

#define MATCH 1000
#define EPS 1000
#define ALL 1000

struct state {
    int c;
    struct state* out1;
    struct state* out2;
    int last_set;
};
typedef struct state state_t;

struct nfa {
    state_t* start;
    state_t* final;
    int n;
};

typedef struct nfa nfa_t;


int main(){
    return 0;
}