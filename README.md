# JS211_TowersOfHanoiProject

## The grading breakdown is

1. 20pts - for code plan, code write up, or sufficient comments to show that you thought the problem through
2. 20pts - if the program lets the user move pieces around
3. 20pts - if the program keeps the user from making illegal moves
4. 20pts - if the program correctly detects a win condition
5. 20pts - if your code includes at least 3 unit tests

### Set up game board

BOARD = OBJECT[4x3 ARRAYS]

### Main logic

USER INPUT:
Enter start stack
Enter end stack

FUNCTION:
Check legality

IF (LEGAL) {
FUNCTION: Move piece
}

FUNCTION:
Check win condition

IF (WIN) {
OUTPUT: Winner!! Would you like to play again?
}

USER INPUT:
Y or N

IF (Y) {
FUNCTION: Reset board
} ELSE {
OUTPUT: Thanks for playing!
}

### Move pieces

POP last piece in start stack
PUSH that piece to the end of end stack
OUTPUT new stacks ot the screen

### Detect illegal move

IF (Last piece in end stack is higher than new piece) {
RETURN false;
} ELSE {
RETURN true;
}

### Check win condition

FOR (each stack) {
IF (stack length is 4 && stack is not index 0) {
OUTPUT: Winner!!
}
}

### Reset board

Redeclare gaming board in its original state
