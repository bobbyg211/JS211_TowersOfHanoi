"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

const movePiece = (startStack, endStack) => {
  // Your code here
  
  // Check if users entered valid values

  if (isLegal(startStack, endStack)) {
    let temp = stacks[startStack].pop();
    stacks[endStack].push(temp);
    return true;
  } else {
    return "Illegal move! Try again.";
  }
};

const isLegal = (startStack, endStack) => {
  // Your code here

  startStack.toLowerCase();
  endStack.toLowerCase();

  const validVals = ["a","b","c"];

  if (validVals.includes(startStack) && validVals.includes(endStack)){
    let startLastIndex = stacks[startStack].length - 1;
    let endLastIndex = stacks[endStack].length - 1;
  
    if (endLastIndex === -1) {
      return true;
    } else if (stacks[startStack][startLastIndex] < stacks[endStack][endLastIndex]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const checkForWin = () => {
  // Your code here
  for (let stack in stacks) { 
    if (stacks[stack].length === 4 && stack !== "a") {
      return "Winner!! Resetting board....";
    }
  }
};

const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  movePiece(startStack, endStack);
  checkForWin();
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Unit Tests
if (typeof describe === "function") {
  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe("#towersOfHanoi()", () => {
    it("detect illegal move", () => {
      assert.equal(isLegal("a", "f"), false);
      assert.equal(isLegal("", ""), false);
      towersOfHanoi("a", "b");
      assert.equal(isLegal("a", "b"), false);
    });
    it("allow legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(movePiece("a", "b"), true);
    });
    it('check for win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), "Winner!! Resetting board....");
    });
  });
} else {
  getPrompt();
}
