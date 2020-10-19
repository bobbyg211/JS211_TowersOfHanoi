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
  } else {
    console.log("Illegal move! Try again.");
  }
};

const isLegal = (startStack, endStack) => {
  // Your code here
  const validValues = ["a","b","c"];
  let startLastIndex = 0;
  let endLastIndex = 0;

  if (validValues.includes(startStack) || validValues.includes(endStack)) {
    startLastIndex = stacks[startStack].length - 1;
    endLastIndex = stacks[endStack].length - 1;
  }

  if (endLastIndex === 0) {
    return false;
  } else if (endLastIndex === -1) {
    return true;
  } else if (stacks[startStack][startLastIndex] < stacks[endStack][endLastIndex]) {
    return true;
  } else {
    return false;
  }
};

const checkForWin = () => {
  // Your code here
  for (let stack in stacks) { 
    if (stacks[stack].length === 4 && stack !== "a") {
      console.log("Winner!! Resetting board....");
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

getPrompt();

// Unit Tests
if (typeof describe === "function") {
  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe("#towersOfHanoi()", () => {
    it("detect illegal move", () => {
      assert.equal(towersOfHanoi("a", "f"), "Illegal move! Try again.");
      assert.equal(towersOfHanoi("", ""), "Illegal move! Try again.");
      towersOfHanoi("a", "b");
      assert.equal(towersOfHanoi("a", "b"), "Illegal move! Try again.");
    });
    it("allow legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(towersOfHanoi("a", "b"), true);
    });
    it('check for win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), "Winner!! Resetting board...");
    });
  });
} else {
  getPrompt();
}
