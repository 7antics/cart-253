/**
 * Flying Food
 * Pippin Barr & Anna Tsirbas
 *
 * A game of helping catch flies for Mr.Frog, by timing his tongue to your clicks to catch flies before he starves (the timer goes out)
 *
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies, avoid the bad ones
 * - Catch 20 flies before the timer runs out
 *
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
  // The frog's body has a position and size
  body: {
    x: 320,
    y: 520,
    size: 150,
    delay: false, // For the freeze effect
    snapped: true, // To Snap back to the mouse after the freeze
  },
  // The frog's tongue has a position, size, speed, and state
  tongue: {
    x: undefined,
    y: 480,
    size: 20,
    speed: 20,
    // Determines how the tongue moves each frame
    state: "idle", // State can be: idle, outbound, inbound
  },
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
  x: 0,
  y: 200, // Will be random
  size: 10,
  speed: 3,
};

//Properties for the Evil button
const evilFly = {
  x: 0,
  y: 200, // Will be random
  size: 20,
  speed: 2,
};

//Properties for the Gross Flies
const grossFly = {
  x: 0,
  y: 200, // Will be random
  size: 20,
  speed: 3,
};

let menuImage = {
  img: null,
  path: "assets/images/menuScreen.jpg",
};

//Properties for the start button
let startButton = {
  x: 300,
  y: 150,
  w: 250,
  h: 250,
  img: null,
  path: "assets/images/lilypad.png",
};

//Properties for the setting button
let settingButton = {
  x: 100,
  y: 100,
  w: 20,
  h: 20,
  img: null,
  path: "assets/images/test.png",
};

//Properties for the menu button
let menuButton = {
  x: 320,
  y: 400,
  w: 250,
  h: 250,
  img: null,
  path: "assets/images/lilypad.png",
};

//Game Intro instructions
let txt = {
  fillone: "#000000",
  filltwo: "#ffff",
  size: 15,
  str: "",
  info: {
    infoOne:
      "Starving! Famished! Mr.Frog is in dire need of food! Help him get those delicious flies!",
    infoTwo:
      "But be careful, the Red and Purple flies cause weird side affects!",
    infoThree:
      "Mr.Frog will time his tongue to your clicks, so precision is important!",
    infoFour: "Press ANY KEY to Skip",
    txt: "START",
    endtxt: "Game Over!",
    endtxt2: "Congratulations! Mr.Frog is stuffed!",
    endtxt3: "My Condolences! Mr.Frog starved to death!",
    goodend: "Winner Winner, Froggy Dinner!",
  },
};

let scoreTxt = {
  fill: "#ffff",
  size: 50,
};

let bgMusic = {
  music: null,
  path: "assets/sounds/backgroundMusic.mp3",
  isPlaying: true,
};

let game = "menu";
let score = 0; //Start number of Score

let clickTime = 0; // Start time of the mouse click
let clickDelay = 2000; // 2 second delay for the mouse click
let infoTime = 18000; //Time duration for the instruction game state

let startTime = 0; //for Timer
let totalTime = 40; // total time for timer
let remaining;

let evilflies = [];
let numEvilFlies = 2; // number of the evil flies on screen

let startOfLerp = 0;
let lerpTime = 1000; //total time of lerp

/**
 * Creates the canvas and initializes the fly
 */

function preload() {
  bgMusic.music = loadSound(bgMusic.path);
  menuImage.img = loadImage(menuImage.path);
  startButton.img = loadImage(startButton.path);
  settingButton.img = loadImage(settingButton.path);
  menuButton.img = loadImage(menuButton.path);
}

function setup() {
  createCanvas(640, 480);
  userStartAudio(); //for music to work in browser
  bgMusic.music.loop();

  // Give the fly its first random position
  resetFly();
  resetEvil();
  resetGross();

  if (!bgMusic.music.isPlaying()) {
    bgMusic.music.loop();
  }
}

function draw() {
  background("87CEEB");
  //Change to different screen/game states
  if (game === "menu") {
    menuScreen();
  } else if (game === "instructions") {
    infoScreen();
    if (millis() - clickTime > infoTime || keyIsPressed) {
      game = "play"; //Goes to play state after 18 seconds
    }
  } else if (game === "play") {
    playScreen();
  } else if (game === "end") {
    endScreen();
  }
}

function menuScreen() {
  background(menuImage.img);
  drawStartButton();
  drawMenuFly();
  clickButtons();

  //Add music and sound effects
  //Make setting button, volume? Sfx volume?
}

function infoScreen() {
  //Background
  push();
  fill("#87CEEB");
  noStroke();
  rect(0, 0, 640, 640);
  pop();

  drawText();
}

function playScreen() {
  //Background
  push();
  fill("#87CEEB");
  noStroke();
  rect(0, 0, 640, 640);
  pop();
  //Keep score from going below 0
  score = max(0, score);
  if (startTime === 0) {
    startTime = millis();
  }
  drawTimer();
  // // Update remaining time
  let elapsed = (millis() - startTime) / 1000;
  remaining = max(0, totalTime - int(elapsed));

  if (remaining === 0 || score >= 20) {
    game = "end";
  }

  moveFlies();
  drawFly();
  drawEvilFly();
  drawGrossFly();
  moveFrog();
  moveTongue();
  drawFrog();
  checkTongueFlyOverlap();
  drawScore();
}

function endScreen() {
  // Background
  push();
  fill("#87CEEB");
  noStroke();
  rect(0, 0, 640, 480);
  pop();

  // Time
  push();
  fill(scoreTxt.fill);
  textSize(20);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Time Left: " + remaining + "s", width / 2, 330);
  pop();

  // Score
  push();
  fill(scoreTxt.fill);
  textSize(20);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Score: " + score + "/20", width / 2, 370);
  pop();

  // End message
  if (score >= 20) {
    goodendTxt();
  } else {
    badendTxt();
  }

  // clickButtons();
  // // Menu button
  // drawMenuButton();
}

function clickButtons() {
  //When the mouse hovers over the start button
  let hoverStart =
    mouseX > startButton.x &&
    mouseX < startButton.x + startButton.w &&
    mouseY > startButton.y &&
    mouseY < startButton.y + startButton.h;

  //When the mouse hovers over the setting button
  let hoverSetting =
    mouseX > settingButton.x &&
    mouseX < settingButton.x + settingButton.w &&
    mouseY > settingButton.y &&
    mouseY < settingButton.y + settingButton.h;

  //When the mouse hovers over the menu button
  let hoverMenu =
    mouseX > menuButton.x &&
    mouseX < menuButton.x + menuButton.w &&
    mouseY > menuButton.y &&
    mouseY < menuButton.y + menuButton.h;

  //Clicking the start button
  if (hoverStart && mouseIsPressed && millis() - clickTime > clickDelay) {
    game = "instructions"; //Turns to infoScreen/next game state
    clickTime = millis(); //Changes the variable to when clicked last
  }

  if (hoverSetting && mouseIsPressed) {
    game = "null"; //Turns to
    clickTime = millis(); //Changes the variable to when clicked last
  }
  //Clicking the menu button
  if (hoverMenu && mouseIsPressed) {
    game = "menu"; //Turns to
    clickTime = millis(); //Changes the variable to when clicked last
  }
}

/**
 * Draw the Start, Setting and Menu buttons
 */
function drawStartButton() {
  image(
    startButton.img,
    startButton.x,
    startButton.y,
    startButton.w,
    startButton.h
  );
  push();
  fill(txt.filltwo);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(
    txt.info.txt,
    startButton.x + startButton.w / 2,
    startButton.y + 35 + startButton.h / 2
  );
  pop();
}
/**
 * Draw the Setting buttons NOT DONE!!! :(
 */
// function drawSettingButton() {
//   image(
//     settingButton.img,
//     settingButton.x,
//     settingButton.y,
//     settingButton.w,
//     settingButton.h
//   );

//   push();
//   fill(null);
//   textAlign(CENTER, CENTER);
//   textSize(null);
//   textStyle(BOLD);
//   text(
//     null,
//     settingButton.x + settingButton.w / 2,
//     settingButton.y + settingButton.h / 2
//   );
//   pop();
// }

/**
 * Draw the Menu buttons NOT DONE!! :(
 */
// function drawMenuButton() {
//   image(menuButton.img, menuButton.x, menuButton.y, menuButton.w, menuButton.h);

//   push();
//   fill("#ffffff");
//   textSize(txt.size);
//   textStyle(BOLD);
//   textAlign(CENTER, CENTER);
//   text(
//     "RESTART",
//     menuButton.x + menuButton.w / 2,
//     menuButton.y + 35 + menuButton.h / 2
//   );
//   pop();
// }

// function drawMenuFrog() {}

/**
 * Draw/Format the fly for the Menu game state
 */
function drawMenuFly() {
  //Wing 1
  push();
  noStroke();
  fill("#e4fdfbc1");
  ellipse(395, 245, fly.size - 2);
  pop();

  //Fly Body
  push();
  noStroke();
  fill("#000000");
  ellipse(400, 250, fly.size);
  pop();

  //Wing 2
  push();
  noStroke();
  fill("#e4fdfbc1");
  ellipse(393, 250, fly.size - 2);
  pop();
}

/**
 * Draw/Format the text for the instructions/information game state
 */
function drawText() {
  push();
  fill(txt.fillone);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(txt.info.infoOne, width / 2, 220);
  pop();

  push();
  fill(txt.fillone);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(txt.info.infoTwo, width / 2, 240);
  pop();

  push();
  fill(txt.fillone);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(txt.info.infoThree, width / 2, 260);
  pop();

  push();
  fill(txt.fillone);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLD);
  text(txt.info.infoFour, width / 2, 400);
  pop();
}

/**
 * Draw the text for the good end game state
 */
function goodendTxt() {
  push();
  fill(txt.filltwo);
  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(BOLD);
  text(txt.info.goodend, width / 2, 200);
  pop();

  push();
  fill(txt.filltwo);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);
  text(txt.info.endtxt2, width / 2, 240);
  pop();
}

/**
 * Draw the text for the bad end game state
 */
function badendTxt() {
  push();
  fill(txt.filltwo);
  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(BOLD);
  text(txt.info.endtxt, width / 2, 200);
  pop();

  push();
  fill(txt.filltwo);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);
  text(txt.info.endtxt3, width / 2, 240);
  pop();
}
/**
 * Draw score for game state
 */
function drawScore() {
  push();
  fill(scoreTxt.fill);
  textSize(scoreTxt.size);
  textStyle(BOLD);
  text(score + "/20", 50, 100);
  pop();
}

/**
 * Draw timer for game state
 */
function drawTimer() {
  push();
  fill("#ffffff");
  textSize(50);
  textStyle(BOLD);
  text(remaining + "s", 500, 100);
  pop();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */

function moveFlies() {
  // Move the fly
  fly.x += fly.speed;
  // Handle the fly going off the canvas
  if (fly.x > width) {
    resetFly();
  }

  //Move the Evil fly
  evilFly.x += evilFly.speed;
  //If the evil fly goes off the canvas
  if (evilFly.x > width) {
    resetEvil();
  }

  //Move the Gross fly
  grossFly.x += grossFly.speed;
  //If the Gross fly goes off the canvas
  if (grossFly.x > width) {
    resetGross();
  }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
  //Wing 1
  push();
  noStroke();
  fill("#e4fdfbc1");
  ellipse(fly.x - 5, fly.y - 5, fly.size - 2);
  pop();

  //Fly
  push();
  noStroke();
  fill("#000000");
  ellipse(fly.x, fly.y, fly.size);
  pop();

  //Wing 2
  push();
  noStroke();
  fill("#e4fdfbc1");
  ellipse(fly.x - 7, fly.y, fly.size - 2);
  pop();
}

/**
 * Draws the evil fly as a red circle
 */
function drawEvilFly() {
  //Wing 1
  push();
  noStroke();
  fill("#e4fdfbc1");
  ellipse(evilFly.x - 5, evilFly.y - 5, evilFly.size - 2);
  pop();

  push();
  noStroke();
  fill("#ff0000d5");
  ellipse(evilFly.x, evilFly.y, evilFly.size);
  pop();

  //Wing 2
  push();
  noStroke();
  fill("#e4fdfbc1");
  ellipse(evilFly.x - 10, evilFly.y, evilFly.size - 2);
  pop();
}

/**
 * Draws the Gross fly as a red circle
 */
function drawGrossFly() {
  //Wing 1
  push();
  noStroke();
  fill("#e4fdfbc1");
  ellipse(grossFly.x - 5, grossFly.y - 5, grossFly.size - 2);
  pop();

  //Fly
  push();
  noStroke();
  fill("#c300ffd5");
  ellipse(grossFly.x, grossFly.y, grossFly.size);
  pop();

  //Wing 2
  push();
  noStroke();
  fill("#e4fdfbc1");
  ellipse(grossFly.x - 10, grossFly.y, grossFly.size - 2);
  pop();
}

/**
 * Resets the Flies to the left with a random y
 */
function resetFly() {
  fly.x = 0;
  fly.y = random(0, 300);
}

/**
 * Resets the Evil flies to the left with a random y
 */
function resetEvil() {
  evilFly.x = 0;
  evilFly.y = random(0, 300);
}

/**
 * Resets the Gross flies to the left with a random y
 */
function resetGross() {
  grossFly.x = 0;
  grossFly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
  if (frog.body.delay) return; // Stop movement if frozen

  // If frog isn't snapped yet, start lerping
  if (frog.body.snapped === false) {
    // If just starting the lerp, record start time
    if (startOfLerp === 0) {
      startOfLerp = millis();
    }
    frog.body.x = lerp(frog.body.x, mouseX, 0.03); // Perform lerp

    //If a second has passed, snap
    if (millis() - startOfLerp > lerpTime) {
      frog.body.snapped = true;
      frog.body.x = mouseX;
    }
  } else {
    frog.body.x = mouseX; // Once snapped, just follow the mouse directly
    frog.body.snapped = true;
  }
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
  // Tongue matches the frog's x
  frog.tongue.x = frog.body.x;
  // If the tongue is idle, it doesn't do anything
  if (frog.tongue.state === "idle") {
    // Do nothing
  }
  // If the tongue is outbound, it moves up
  else if (frog.tongue.state === "outbound") {
    frog.tongue.y += -frog.tongue.speed;
    // The tongue bounces back if it hits the top
    if (frog.tongue.y <= 0) {
      frog.tongue.state = "inbound";
    }
  }
  // If the tongue is inbound, it moves down
  else if (frog.tongue.state === "inbound") {
    frog.tongue.y += frog.tongue.speed;
    // The tongue stops if it hits the bottom
    if (frog.tongue.y >= height) {
      frog.tongue.state = "idle";
    }
  }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
  // Draw the tongue tip
  push();
  fill("#ff0000");
  noStroke();
  ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
  pop();

  // Draw the rest of the tongue
  push();
  stroke("#ff0000");
  strokeWeight(frog.tongue.size);
  line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
  pop();

  // Draw the frog's body
  push();
  fill("#00ff00");
  noStroke();
  ellipse(frog.body.x, frog.body.y, frog.body.size);
  pop();
}

/**
 * Have a delay effect from eating the Evil Fly
 */
function frogDelay() {
  frog.body.delay = true;
  setTimeout(() => (frog.body.delay = false), 1000); // 1 second freeze
  // Smoothly move frog toward mouse
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
  // Get distance from tongue to fly
  const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
  // Check if it's an overlap
  const eaten = d < frog.tongue.size / 2 + fly.size / 2;
  if (eaten) {
    // Reset the fly
    resetFly();
    //Score goes up by one
    score += 1;
    // Bring back the tongue
    frog.tongue.state = "inbound";
  }

  // Get distance from tongue to Evil fly
  const evilD = dist(frog.tongue.x, frog.tongue.y, evilFly.x, evilFly.y);
  // Check if it's an overlap
  const eatenEvil = evilD < frog.tongue.size / 2 + evilFly.size / 2;
  if (eatenEvil) {
    frogDelay(); // Timed delay of the frog body
    resetEvil(); // Reset the Evil fly
    frog.body.snapped = false; //To start lerp effect
    startOfLerp = 0; //To record the time of lerp & reset lerp effect
    frog.tongue.state = "inbound"; // Bring back the tongue
  }

  // Get distance from tongue to Evil fly
  const grossD = dist(frog.tongue.x, frog.tongue.y, grossFly.x, grossFly.y);
  // Check if it's an overlap
  const eatenGross = grossD < frog.tongue.size / 2 + grossFly.size / 2;
  if (eatenGross) {
    frogDelay(); // Timed delay of the frog body
    resetGross(); // Reset the gross fly
    score -= 1; //Score goes down by one
    frog.body.snapped = false; //To start lerp effect
    startOfLerp = 0; //To record the time of lerp & reset lerp effect
    frog.tongue.state = "inbound"; // Bring back the tongue
  }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
  if (frog.tongue.state === "idle") {
    frog.tongue.state = "outbound";
  }
}
