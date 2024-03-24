
const {Board, BoardDiff} = require("board.js");

const board = new Board();
const otherBoard = new Board();

const diff = board.diff(otherBoard);

console.log(diff instanceof BoardDiff); // true

