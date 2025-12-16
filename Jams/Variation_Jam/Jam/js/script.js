/**
 * Snake and Ladders
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
  normyspeed: 3,
  speed: 3,
  preGameCoordinates: {
    x: 290,
    y: 575,
  },
  onLadder: false,
  collideSnek: false,
};

let p2 = {
  x: 310,
  y: 575,
  w: 15,
  h: 15,
  normyspeed: 3,
  speed: 3,
  preGameCoordinates: {
    x: 310,
    y: 575,
  },
  onLadder: false,
  collideSnek: false,
};

let snakes = {
  redsnake: {
    image: null,
    path: "assets/images/redsnake.png",
  },
  tealsnake: {
    image: null,
    path: "assets/images/tealsnake.png",
  },
  greensnake: {
    image: null,
    path: "assets/images/greensnake.png",
  },
  snakesDrawn: false,
  randomSnake: null,
  coordinates: {
    snake_1: {
      headCell: 16,
      tailCell: 8,
      x: 350,
      y: 500,
      w: 300,
      h: 300,
    },
    snake_2: {
      headCell: 37,
      tailCell: 20,
      x: 150,
      y: 420,
      w: 300,
      h: 300,
    },
    snake_3: {
      headCell: 70,
      tailCell: 31,
      x: 540,
      y: 305,
      w: 300,
      h: 300,
    },
    snake_4: {
      headCell: 55,
      tailCell: 49,
      x: 395,
      y: 300,
      w: 300,
      h: 300,
    },
    snake_5: {
      headCell: 94,
      tailCell: 67,
      x: 385,
      y: 150,
      w: 300,
      h: 300,
    },
    snake_6: {
      headCell: 21,
      tailCell: 1,
      x: 75,
      y: 480,
      w: 300,
      h: 300,
    },
    snake_7: {
      headCell: 82,
      tailCell: 65,
      x: 205,
      y: 180,
      w: 300,
      h: 300,
    },
  },
};

let ladders = {
  ladder1: {
    image: null,
    path: "assets/images/ladder1.png",
  },
  ladder2: {
    image: null,
    path: "assets/images/ladder2.png",
  },
  ladder3: {
    image: null,
    path: "assets/images/ladder3.png",
  },
  ladderDrawn: false,
  randomLadder: null,
  coordinates: {
    lad_1: {
      bottomCell: 61,
      topCell: 100,
      x: 92,
      y: 165,
      w: 120,
      h: 300,
    },
    lad_2: {
      bottomCell: 52,
      topCell: 68,
      x: 445,
      y: 245,
      w: 120,
      h: 180,
    },
    lad_3: {
      bottomCell: 9,
      topCell: 12,
      x: 480,
      y: 510,
      w: 120,
      h: 180,
    },
    lad_4: {
      bottomCell: 36,
      topCell: 44,
      x: 245,
      y: 345,
      w: 120,
      h: 180,
    },
    lad_5: {
      bottomCell: 59,
      topCell: 63,
      x: 150,
      y: 255,
      w: 120,
      h: 180,
    },
    lad_6: {
      bottomCell: 91,
      topCell: 93,
      x: 470,
      y: 75,
      w: 120,
      h: 210,
    },
  },
};

let potions = {
  teleport: {
    image: null,
    path: "assets/images/teleportpotion.png",
  },
  damage: {
    image: null,
    path: "assets/images/damagepotion.png",
  },
};

let die = {
  x: 25,
  y: 575,
  w: 20,
  h: 20,
  resultX: 25,
  resultY: 575,
  roll1: {
    image: null,
    path: "assets/images/die1.png",
  },
  roll2: {
    image: null,
    path: "assets/images/die2.png",
  },
  roll3: {
    image: null,
    path: "assets/images/die3.png",
  },
  roll4: {
    image: null,
    path: "assets/images/die4.png",
  },
  roll5: {
    image: null,
    path: "assets/images/die5.png",
  },
  roll6: {
    image: null,
    path: "assets/images/die6.png",
  },
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

//Reset Start Positions for Players Boolean
let originalResetDone = false;
let dndResetDone = false;

//Game Mode
let game = "menu";
//Game State
let gameState = "playing";

function preload() {
  //Load images for 6 sided die
  die.roll1.image = loadImage(die.roll1.path);
  die.roll2.image = loadImage(die.roll2.path);
  die.roll3.image = loadImage(die.roll3.path);
  die.roll4.image = loadImage(die.roll4.path);
  die.roll5.image = loadImage(die.roll5.path);
  die.roll6.image = loadImage(die.roll6.path);

  //Load images for snakes
  snakes.greensnake.image = loadImage(snakes.greensnake.path);
  snakes.redsnake.image = loadImage(snakes.redsnake.path);
  snakes.tealsnake.image = loadImage(snakes.tealsnake.path);

  //Load images for ladders
  ladders.ladder1.image = loadImage(ladders.ladder1.path);
  ladders.ladder2.image = loadImage(ladders.ladder2.path);
  ladders.ladder3.image = loadImage(ladders.ladder3.path);

  //Load images for potions
  potions.damage.image = loadImage(potions.damage.path);
  potions.teleport.image = loadImage(potions.teleport.path);
}

/**
 * Set up the unchanging properties: the menu, the board, the players
 */
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);

  //Center the grid in the middle of the canvas
  offsetX = (width - GRID_WIDTH) / 2;
  offsetY = (height - GRID_HEIGHT) / 2;
}

/**
 * Draw the menu and board
 */
function draw() {
  background(0);

  if (gameState === "winner") {
    drawWinnerTxt();
    return; // stop drawing the rest so board doesn't overwrite
  }

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
      rollDie();
      break;
    case "dnd":
      rollDie();
      break;
    case "meta":
      //metaMousePressed();
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
  // Reset players only the first time after entering this mode
  if (!originalResetDone) {
    p1Cell = 0;
    p2Cell = 0;

    currentPlayer = 1; // reset turn
    originalResetDone = true;
  }
  gameModeDraw();
  drawDie();
  drawPlayerTurnTxt();
}

/**
 * Dnd Variation of S&L game; Serpents and Summits
 */
function dndMode() {
  // Reset players only the first time after entering this mode
  if (!dndResetDone) {
    p1Cell = 0;
    p2Cell = 0;

    currentPlayer = 1; // reset turn
    dndResetDone = true;
  }
  gameModeDraw();
  drawDie();
  drawPlayerTurnTxt();
}

/**
 * Meta Game Mode of S&L game; Adders and Altitudes
 */
function metaMode() {
  gameModeDraw();
  p1MetaMovement();
  p2MetaMovement();
  ladderEffectMeta();
  snakeEffectMeta();
  controlInstructions();
}

/**
 * Organizes the permanent/consistent game functions of each Mode
 */
function gameModeDraw() {
  drawBoard();
  drawSnake();
  drawLadder();
  drawMenuButton();
  drawPlayerOne();
  drawPlayerTwo();
}

/** Draw Menu Screen Txt
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
 * Handles mouse click on the menu screen txt
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
  p1.x = p1.preGameCoordinates.x;
  p1.y = p1.preGameCoordinates.y;
  p2.x = p2.preGameCoordinates.x;
  p2.y = p2.preGameCoordinates.y;
}

/**
 * Draw the menu button on the game modes
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
 * Mouse click on menu button in the game modes
 */
function pressMenuButton() {
  //Hover Menu Button
  const dMenuButt = dist(mouseX, mouseY, 575, 25);

  if (dMenuButt < 20) {
    game = "menu";
    gameState = "playing"; // reset game state
    originalResetDone = false; // allow reset for original mode
    dndResetDone = false; // allow reset for dnd mode

    // Reset player positions to pre-game coordinates
    p1Cell = 1;
    p2Cell = 1;
    p1.x = p1.preGameCoordinates.x;
    p1.y = p1.preGameCoordinates.y;
    p2.x = p2.preGameCoordinates.x;
    p2.y = p2.preGameCoordinates.y;
  }
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
 * Handles the Cell coordinates/ direction of the board movement
 */
function getCellCoordinates(cell) {
  // Identifying the cells between 1 and 100
  if (cell < 1) cell = 1;
  if (cell > 100) cell = 100;

  // Row and column calculations
  let row = Math.floor((cell - 1) / NUM_COLS); // Row 0 = first row/bottom row
  let colInRow = (cell - 1) % NUM_COLS; // Column position in the row

  // Alternate the row direction when going through the board
  let col;
  if (row % 2 === 0) {
    col = colInRow; // Left to Right
  } else {
    col = NUM_COLS - 1 - colInRow; // Right to Left
  }

  // Flip row for y-coordinate (0 at top, NUM_ROWS-1 at bottom)
  let flippedRow = NUM_ROWS - 1 - row;

  let x = offsetX + col * CELL_SIZE + CELL_SIZE / 2;
  let y = offsetY + flippedRow * CELL_SIZE + CELL_SIZE / 2;

  return { x, y };
}

/**
 * Draw the player's turn text
 */
function drawPlayerTurnTxt() {
  push();
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(20);
  if (currentPlayer === 1) {
    push();
    fill("#fe7c80ff");
    text("Player One's Turn", width / 2, 25);
    pop();
  } else {
    push();
    fill("#98b3ffff");
    text("Player Two's Turn", width / 2, 25);
    pop();
  }
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
 * Move the players to the specific cell
 */
function movePlayerToCell(player, cellNumber) {
  // Clamp at cell 100
  if (cellNumber > 100) cellNumber = 100;

  let redirectedcell = checkForRedirect(cellNumber);

  //Handle the redirected cell as the actual cell value
  if (player === p1) {
    p1Cell = redirectedcell;
  } else {
    p2Cell = redirectedcell;
  }

  // Get coordinates
  const { x, y } = getCellCoordinates(redirectedcell);

  // Move the player object
  player.x = x;
  player.y = y;
}

/**
 * Draw the Ladder/use the image properties
 */
function drawLadder() {
  let l = ladders.coordinates; // Simplifying the code below

  //ladder(Cell Coordinates: 61,100)
  push();
  image(ladders.ladder3.image, l.lad_1.x, l.lad_1.y, l.lad_1.w, l.lad_1.h);
  pop();

  //ladder(Cell Coordinates: 52,68)
  push();
  translate(l.lad_2.x, l.lad_2.y);
  rotate(radians(145));
  image(ladders.ladder1.image, 0, 0, l.lad_2.w, l.lad_2.h);
  pop();

  //ladder(Cell Coordinates:9,12)
  push();
  image(ladders.ladder1.image, l.lad_3.x, l.lad_3.y, l.lad_3.w, l.lad_3.h);
  pop();

  // ladder(Cell Coordinates:36,44)
  push();
  translate(l.lad_4.x, l.lad_4.y);
  rotate(radians(145));
  image(ladders.ladder1.image, 0, 0, l.lad_4.w, l.lad_4.h);
  pop();

  //ladder(Cell Coordinates:59,63)
  push();
  translate(l.lad_5.x, l.lad_5.y);
  rotate(radians(45));
  image(ladders.ladder1.image, 0, 0, l.lad_5.w, l.lad_5.h);
  pop();

  //ladder(Cell Coordinates:91,93)
  push();
  translate(l.lad_6.x, l.lad_6.y);
  rotate(radians(90));
  image(ladders.ladder1.image, 0, 0, l.lad_6.w, l.lad_6.h);
  pop();
}

/**
 * Draw the snake/use the image properties
 */
function drawSnake() {
  let s = snakes.coordinates;

  push();
  image(
    snakes.redsnake.image,
    s.snake_1.x,
    s.snake_1.y,
    s.snake_1.w,
    s.snake_1.h
  ); //snake_1 (15:7)
  pop();

  push();
  translate(s.snake_2.x, s.snake_2.y);
  scale(-1, 1);
  image(snakes.tealsnake.image, 0, 0, s.snake_2.w, s.snake_2.h); //snake_2
  pop();

  push();
  image(
    snakes.greensnake.image,
    s.snake_3.x,
    s.snake_3.y,
    s.snake_3.w,
    s.snake_3.h
  ); //snake_3 (51:50)
  pop();

  push();
  translate(s.snake_4.x, s.snake_4.y);
  scale(1, -1);
  rotate(radians(320));
  image(snakes.redsnake.image, 0, 0, s.snake_4.w, s.snake_4.h); //snake_4 (54:53)
  pop();

  push();
  image(
    snakes.greensnake.image,
    s.snake_5.x,
    s.snake_5.y,
    s.snake_5.w,
    s.snake_5.h
  ); //snake_5 (94:67)
  pop();

  push();
  image(
    snakes.greensnake.image,
    s.snake_6.x,
    s.snake_6.y,
    s.snake_6.w,
    s.snake_6.h
  ); //snake_6 (21:1)
  pop();

  push();
  image(
    snakes.tealsnake.image,
    s.snake_7.x,
    s.snake_7.y,
    s.snake_7.w,
    s.snake_7.h
  ); //snake_7 (83:64)
  pop();
}

/**
 * Checks for the snake/ladder coordinates to redirect the player to the assigned Cell
 */
function checkForRedirect(playerCell) {
  let sneks = [
    snakes.coordinates.snake_1,
    snakes.coordinates.snake_2,
    snakes.coordinates.snake_3,
    snakes.coordinates.snake_4,
    snakes.coordinates.snake_5,
    snakes.coordinates.snake_6,
    snakes.coordinates.snake_7,
  ];

  let laddies = [
    ladders.coordinates.lad_1,
    ladders.coordinates.lad_2,
    ladders.coordinates.lad_3,
    ladders.coordinates.lad_4,
    ladders.coordinates.lad_5,
    ladders.coordinates.lad_6,
  ];

  // Slide down snake
  for (let s of sneks) {
    if (playerCell === s.headCell) {
      return s.tailCell; // slide down
    }
  }

  //Climb ladder
  for (let l of laddies) {
    if (playerCell === l.bottomCell) {
      return l.topCell; // climb up
    }
  }

  return playerCell; // no snake
}

/**
 * Draws the Player's Win Text
 */
function drawWinnerTxt() {
  push();
  fill("black");
  textStyle(BOLD);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Player " + currentPlayer + " Wins!", width / 2, height / 2);
  pop();
}

/**
 * Handles the Winning Conditions
 */
function checkWinCondition() {
  //If player 1 or player 2 reaches the Cell 100
  if (p1Cell === 100 || p2Cell === 100) {
    gameState = "winner"; //GameState changes
  }
}

/**
 * Draws the Die
 */
function drawDie() {
  //Hover Mouse over Die
  let hoverDie = dist(mouseX, mouseY, die.x, die.y) < 20;

  push();
  fill(hoverDie ? txt.fillthree : txt.filltwo);
  rectMode(CENTER);
  noStroke();
  if (!hoverDie) {
    rect(die.x, die.y, die.w, die.h);
  } else {
    rect(die.x, die.y, die.w + 3, die.h + 3);
  }
  pop();

  push();
  fill("#000000ff");
  rectMode(CENTER);
  noStroke();
  if (!hoverDie) {
    ellipse(die.x, die.y, 5, 5);
  } else {
    ellipse(die.x, die.y, 6, 6);
  }
  pop();
  if (die.currentResult) {
    imageMode(CENTER);
    image(die.currentResult.image, die.x + 2, die.y + 8, 85, 120);
  }
}

/**
 * Click the die to roll one of the 6 options/images and move player to the dice roll
 */
function rollDie() {
  const dDie = dist(mouseX, mouseY, die.x, die.y);
  const clickRadius = 20;

  if (dDie < clickRadius) {
    let rolls = [
      die.roll1,
      die.roll2,
      die.roll3,
      die.roll4,
      die.roll5,
      die.roll6,
    ];

    let rolled = random(rolls);
    die.currentResult = rolled;

    let rolledNumber = rolls.indexOf(rolled) + 1;

    if (currentPlayer === 1) {
      // Move player starting from current cell
      let startCell = p1Cell;
      p1Cell = Math.min(startCell + rolledNumber, 100); // clamp at 100
      movePlayerToCell(p1, p1Cell);
      if (p1Cell === 100) {
        return;
      }
      currentPlayer = 2;
    } else {
      let startCell = p2Cell;
      p2Cell = Math.min(startCell + rolledNumber, 100);
      movePlayerToCell(p2, p2Cell);

      if (p2Cell === 100) {
        return;
      }
      currentPlayer = 1;
    }
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
 * Handles the snake collision and eating effect
 */
function snakeEffectMeta() {
  let p1HitAnySnake = false;
  let p2HitAnySnake = false;

  for (let key in snakes.coordinates) {
    let snakey = snakes.coordinates[key]; // snaKEY (lmao I'm crashing out) is Lad_1, Lad_2, Lad_3, etc./Whatever comes after the 'coordinates.' property
    // distance between player and Snakes
    let dp1 = dist(p1.x, p1.y, snakey.x, snakey.y);
    let dp2 = dist(p2.x, p2.y, snakey.x, snakey.y);

    if (dp1 < 50) p1HitAnySnake = true;
    if (dp2 < 50) p2HitAnySnake = true;
  }

  // player 1
  if (p1HitAnySnake && !p1.collideSnek) {
    // just hit snake
    p1.speed -= 2;
    p1.collideSnek = true;
  } else if (!p1HitAnySnake && p1.collideSnek) {
    // just left snake
    p1.speed = p1.normyspeed;
    p1.collideSnek = false;
  }

  // player 2
  if (p2HitAnySnake && !p2.collideSnek) {
    p2.speed -= 2;
    p2.collideSnek = true;
  } else if (!p2HitAnySnake && p2.collideSnek) {
    p2.speed = p2.normyspeed;
    p2.collideSnek = false;
  }
}

/**
 * Handles the ladder effect
 */
function ladderEffectMeta() {
  let p1OnAnyLadder = false;
  let p2OnAnyLadder = false;

  // Check ALL ladders
  for (let key in ladders.coordinates) {
    let lackey = ladders.coordinates[key]; //[key] is Lad_1, Lad_2, Lad_3, etc./Whatever comes after the 'coordinates.' property

    // distance between player and ladder
    let dp1 = dist(p1.x, p1.y, lackey.x, lackey.y);
    let dp2 = dist(p2.x, p2.y, lackey.x, lackey.y);

    if (dp1 < 20) p1OnAnyLadder = true;
    if (dp2 < 20) p2OnAnyLadder = true;
  }

  // player 1
  if (p1OnAnyLadder && !p1.onLadder) {
    // just entered ladder
    p1.speed += 4;
    p1.onLadder = true;
  } else if (!p1OnAnyLadder && p1.onLadder) {
    // just left ladder
    p1.speed = p1.normyspeed;
    p1.onLadder = false;
  }

  // player 2
  if (p2OnAnyLadder && !p2.onLadder) {
    p2.speed += 4;
    p2.onLadder = true;
  } else if (!p2OnAnyLadder && p2.onLadder) {
    p2.speed = p2.normyspeed;
    p2.onLadder = false;
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
