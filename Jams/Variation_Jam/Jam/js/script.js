/**
 * UNDECIDED
 * Anna Tsirbas
 *
 * Making three different variations of one game
 */

"use strict";

//Player Properties
let pOne = {
  x: undefined,
  y: undefined,
  w: 15,
  h: 15,
};

let pTwo = {
  x: undefined,
  y: undefined,
  w: 15,
  h: 15,
};

//Menu Text
let txt = {
  fillone: "#000000",
  filltwo: "#ffff",
  size: 15,
  str: "",
  txt: {
    txtOne: "Snakes and Ladders",
    txtTwo: "Serpents and Summits",
    txtThree: "Adders and Altitudes",
  },
};

//Background Music
let bgMusic = {
  music: null,
  path: "assets/sounds/backgroundMusic.mp3",
  isPlaying: true,
};

//Grid properties
let CELL_SIZE = 50; //size of grid cell
let NUM_COLS = 10; //number of columns
let NUM_ROWS = 10; //number of rows

//Properties to Center the grid in the middle of the canvas
const GRID_WIDTH = NUM_COLS * CELL_SIZE;
const GRID_HEIGHT = NUM_ROWS * CELL_SIZE;
let offsetX;
let offsetY;
let cellNumber;

//Cell coordinates
let a = 0;
let b = 0;

let game = "menu";

function preload() {}

/**
 * Set up the unchanging properties: the menu, the board, the players
 */
function setup() {
  createCanvas(600, 600);
  loadScript();

  //Call on other Game Mode scripts
  loadScript("js/originalMode.js");
  loadScript("js/dndMode.js");
  loadScript("js/metaMode.js");

  //Center the grid in the middle of the canvas
  offsetX = (width - GRID_WIDTH) / 2;
  offsetY = (height - GRID_HEIGHT) / 2;
}

/**
 * Draw the menu and board
 */
function draw() {
  background(0);
  console.log(drawCell);

  //Choose Game mode
  switch (game) {
    case "menu":
      menuDraw();
      break;
    case "original":
      originalMode();
      break;
    case "dnd":
      dndMode();
      break;
    case "meta":
      metaMode();
      break;
  }
}

function loadScript(path) {
  let script = document.createElement("script");
  script.src = path;
  script.type = "text/javascript";
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
  switch (game) {
    case "menu":
      menuMousePressed();
      break;
    case "original":
      ogMousePressed();
      break;
    case "dnd":
      dndMousePressed();
      break;
    case "meta":
      metaMousePressed();
      break;
  }
}

/**
 * Menu Screen
 */
function menuDraw() {
  drawMenutxt();
}

/** Menu Txt
 */
function drawMenutxt() {
  push();
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(25);
  text(txt.txt.txtOne, width / 2, 200);
  pop();

  push();
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(25);
  text(txt.txt.txtTwo, width / 2, 300);
  pop();

  push();
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(25);
  text(txt.txt.txtThree, width / 2, 400);
  pop();
}

/**
 * Orginal Snakes and Ladders Game
 */
function originalMode() {
  drawBoard();
}

/**
 * Dnd Variation of S&L game; Serpents and Summits
 */
function dndMode() {
  drawBoard();
}

/**
 * Meta Game Mode of S&L game; Adders and Altitudes
 */
function metaMode() {
  drawBoard();
}

/**
 * Draw multiple cells in columns and rows
 */
function drawBoard() {
  for (let a = 0; a < NUM_COLS; a++) {
    for (let b = 0; b < NUM_ROWS; b++) {
      drawCell(a, b);
    }
  }
}
/**
 * Draw the individual cell and numbering
 */
function drawCell(a, b) {
  //Draw the cell square
  push();
  stroke("pink");
  strokeWeight(3);
  fill("White");
  rectMode(CORNER);
  rect(offsetX + a * CELL_SIZE, offsetY + b * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  pop();

  let flippedRow = NUM_ROWS - 1 - b; // bottom row is 0
  let rowIsEven = flippedRow % 2 === 0; // every second row is decending numbers

  //Cell number ascending and descending
  if (rowIsEven) {
    // left to right
    cellNumber = flippedRow * NUM_COLS + (a + 1);
  } else {
    // right to left
    cellNumber = flippedRow * NUM_COLS + (NUM_COLS - a);
  }

  //Draw cell number
  push();
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(16);
  text(
    cellNumber,
    offsetX + a * CELL_SIZE + CELL_SIZE / 2,
    offsetY + b * CELL_SIZE + CELL_SIZE / 2
  );
  pop();
}

/**
 * Draw the first player
 */
function drawPlayerOne() {
  push();
  fill("Red");
  ellipse(pOne.x, pOne.y, pOne.w, pOne.h);
  pop();
}

/**
 * Draw the second player
 */
function drawPlayerTwo() {
  push();
  fill("Blue");
  ellipse(pTwo.x, pTwo.y, pTwo.w, pTwo.h);
  pop();
}
/**
 * Mouse click on menu
 */
function menuMousePressed() {}
