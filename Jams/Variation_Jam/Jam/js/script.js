/**
 * UNDECIDED
 * Anna Tsirbas
 *
 * Making three different variations of one game
 */

"use strict";

//Set up grid
let CELL_SIZE = 50; //size of grid cell
let NUM_COLS = 10; //number of columns
let NUM_ROWS = 10; //number of rows

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
function setup() {
  createCanvas(550, 550);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  background(0);
  drawBoard();
  drawCell();
  console.log(drawCell);
}

function drawBoard() {
  for (let a = 0; a < NUM_COLS; a++) {
    for (let b = 0; b < NUM_ROWS; b++) {
      drawCell(a, b);
    }
  }
}

function drawCell(a, b) {
  push();
  fill("White");
  rectMode(CORNER);
  rect(a * CELL_SIZE, b * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  pop();
}
