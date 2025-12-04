/**
 * UNDECIDED
 * Anna Tsirbas
 *
 * Making three different variations of one game
 */

"use strict";

//Player Properties
let p1 = {
  x: 290,
  y: 575,
  w: 15,
  h: 15,
  speed: 3,
};

let p2 = {
  x: 310,
  y: 575,
  w: 15,
  h: 15,
  speed: 3,
};

let die = {
  x: 25,
  y: 575,
  w: 20,
  h: 20,
};

//Menu Text
let txt = {
  fillone: "#000000",
  filltwo: "#D3D3D3",
  fillthree: "#ffffff",
  size: 15,
  str: "",
  txt: {
    txtOne: "Snakes and Ladders",
    txtTwo: "Serpents and Summits",
    txtThree: "Adders and Altitudes",
    txtFour: "Player One",
    txtFive: "Player Two",
  },
};

let gridFill = {
  str: "#ffffff",
  fill: {
    snl: "#ffbedcff",
    sns: "#37bb7bff",
    ana: "#5c56cfff",
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

//Player coordinates in relation to the Cell
let p1Cell = 1; // starting at cell 1
let p2Cell = 1;

// Turn system
let currentPlayer = 1; // 1 = Player One, 2 = Player Two

//Game Mode
let game = "menu";

function preload() {}

/**
 * Set up the unchanging properties: the menu, the board, the players
 */
function setup() {
  createCanvas(600, 600);

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

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
  // Always check if the menu button is pressed first
  pressMenuButton();

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

/**
 * Orginal Snakes and Ladders Game
 */
function originalMode() {
  gameModeDraw();
  drawDie();
  drawPlayerTurnTxt();
}

/**
 * Dnd Variation of S&L game; Serpents and Summits
 */
function dndMode() {
  gameModeDraw();
  drawPlayerTurnTxt();
}

/**
 * Meta Game Mode of S&L game; Adders and Altitudes
 */
function metaMode() {
  gameModeDraw();
  p1MetaMovement();
  p2MetaMovement();
  controlInstructions();
}

function gameModeDraw() {
  drawBoard();
  drawMenuButton();
  drawPlayerOne();
  drawPlayerTwo();
}

/** Draw Menu Txt
 */
function drawMenutxt() {
  let hoverOG = dist(mouseX, mouseY, width / 2, 200) < 40;
  let hoverDnd = dist(mouseX, mouseY, width / 2, 300) < 40;
  let hoverMeta = dist(mouseX, mouseY, width / 2, 400) < 40;

  push();
  fill(hoverOG ? txt.fillthree : txt.filltwo);
  textAlign(CENTER, CENTER);
  textSize(25);
  text(txt.txt.txtOne, width / 2, 200);
  pop();

  push();
  fill(hoverDnd ? txt.fillthree : txt.filltwo);
  textAlign(CENTER, CENTER);
  textSize(25);
  text(txt.txt.txtTwo, width / 2, 300);
  pop();

  push();
  fill(hoverMeta ? txt.fillthree : txt.filltwo);
  textAlign(CENTER, CENTER);
  textSize(25);
  text(txt.txt.txtThree, width / 2, 400);
  pop();
}

/**
 * Draw the menu button
 */
function drawMenuButton() {
  let hoverMenu = dist(mouseX, mouseY, 575, 25) < 20;

  push();
  stroke(hoverMenu ? "#ffffff" : "#D3D3D3");
  strokeWeight(hoverMenu ? 10 : 7);
  fill("Black");
  ellipse(575, 25, 30, 30);
  pop();
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
  stroke(gridFill.str);
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
  stroke("#fe7c80ff");
  strokeWeight(3);
  ellipse(p1.x, p1.y, p1.w, p1.h);
  pop();
}

/**
 * Draw the second player
 */
function drawPlayerTwo() {
  push();
  fill("Blue");
  stroke("#98b3ffff");
  strokeWeight(3);
  ellipse(p2.x, p2.y, p2.w, p2.h);
  pop();
}

/**
 * Draw the player's turn text
 */
function drawPlayerTurnTxt() {
  push();
  fill("#fe7c80ff");
  textAlign(CENTER, CENTER);
  textSize(20);
  if (currentPlayer === 1) {
    text("Player One's Turn", width / 2, 25);
    fill("#fe7c80ff");
  } else {
    text("Player Two's Turn", width / 2, 25);
    fill("#98b3ffff");
  }
  pop();
}

/**
 * Mouse click on menu
 */
function menuMousePressed() {
  //Hover Original Mode
  const dOG = dist(mouseX, mouseY, width / 2, 200);
  //Hover Dnd Mode
  const dDnd = dist(mouseX, mouseY, width / 2, 300);
  //Hover Meta Mode
  const dMeta = dist(mouseX, mouseY, width / 2, 400);

  // Click radius threshold
  const clickRadius = 100;

  //When the mouse is hovering over the text, and is clicked then
  if (dOG < clickRadius) {
    game = "original"; //change to original game mode
    gridFill.str = gridFill.fill.snl; //set grid color based on mode
  } else if (dDnd < clickRadius) {
    game = "dnd"; //change to dnd game mode
    gridFill.str = gridFill.fill.sns; //set grid color based on mode
  } else if (dMeta < clickRadius) {
    game = "meta"; //change to meta game mode
    gridFill.str = gridFill.fill.ana; //set grid color base on mode
  }
  // Reset players positions to these coordinates
  p1.x = 290;
  p1.y = 575;
  p2.x = 310;
  p2.y = 575;
}

function pressMenuButton() {
  //Hover Menu Button
  const dMenuButt = dist(mouseX, mouseY, 575, 25);

  if (dMenuButt < 20) {
    game = "menu"; //change to menu screen
  }
}

/**
 * ORIGINAL MODE BELOW
 *
 */

function getCellCoordinates(cell) {
  let row = Math.floor((cell - 1) / NUM_COLS);
  let col;

  let flippedRow = NUM_ROWS - 1 - row;
  if (flippedRow % 2 === 0) {
    col = (cell - 1) % NUM_COLS;
  } else {
    col = NUM_COLS - 1 - ((cell - 1) % NUM_COLS);
  }

  let x = offsetX + col * CELL_SIZE + CELL_SIZE / 2;
  let y = offsetY + (NUM_ROWS - 1 - row) * CELL_SIZE + CELL_SIZE / 2;
  return { x, y };
}

function rollDice() {
  rolling = true;
}

function drawDie() {
  let hoverDie = dist(mouseX, mouseY, die.x, die.y) < 20;
  push();
  fill("#ffffffff");
  rectMode(CENTER);
  noStroke();
  if (!hoverDie) {
    rect(die.x, die.y, die.w, die.h);
  } else {
    rect(die.x, die.y, die.w + 3, die.h + 3);
  }
  pop();
}
function pressDie() {
  //Hover Menu Button
  const dDie = dist(mouseX, mouseY, die.x, die.y);

  if (dDie < 20) {
  }
}

/**
 * META MODE BELOW
 *
 */

/**
 * Player One Movement in Meta Mode
 */
function p1MetaMovement() {
  let nextX = p1.x;
  let nextY = p1.y;

  if (keyIsDown(87)) nextY -= p1.speed; // W
  if (keyIsDown(83)) nextY += p1.speed; // S
  if (keyIsDown(65)) nextX -= p1.speed; // A
  if (keyIsDown(68)) nextX += p1.speed; // D

  // Check collision with player 2
  let dx = nextX - p2.x;
  let dy = nextY - p2.y;
  let distance = sqrt(dx * dx + dy * dy);
  let minDistance = (p1.w + p2.w) / 2;

  if (distance >= minDistance) {
    // only move if no collision
    p1.x = nextX;
    p1.y = nextY;
  }
}

/**
 * Player Two Movement in Meta Mode
 */
function p2MetaMovement() {
  let nextX = p2.x;
  let nextY = p2.y;

  if (keyIsDown(UP_ARROW)) nextY -= p2.speed;
  if (keyIsDown(DOWN_ARROW)) nextY += p2.speed;
  if (keyIsDown(LEFT_ARROW)) nextX -= p2.speed;
  if (keyIsDown(RIGHT_ARROW)) nextX += p2.speed;

  // Check collision with player 2
  let dx = nextX - p1.x;
  let dy = nextY - p1.y;
  let distance = sqrt(dx * dx + dy * dy);
  let minDistance = (p1.w + p2.w) / 2;

  if (distance >= minDistance) {
    p2.x = nextX;
    p2.y = nextY;
  }
}

/**
 * Player Control Instructions
 */
function controlInstructions() {
  push();
  fill("#fe7c80ff");
  textAlign(CENTER, CENTER);
  textSize(10);
  text("Player One: AWSD Controls", 100, 570);
  pop();

  push();
  fill("#98b3ffff");
  textAlign(CENTER, CENTER);
  textSize(10);
  text("Player Two: Arrow Key Controls", 500, 570);
  pop();
}
