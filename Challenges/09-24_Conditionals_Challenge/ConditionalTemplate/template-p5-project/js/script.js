/**
 * Pippin Barr's Circle Master
 * Anna Tsirbas
 * 
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

const puck = {
  x: 200,
  y: 200,
  size: 100,
  speedX: 2,
  speedY: 2,
  fill: "#ff0000",
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000",
};

const target = {
  x: 200,
  y: 50,
  size: 50,
    fill:
        "#0000FF",
        fills: {
            overlay: "#FFA500",
            noOverlay: "#0000FF",
        },
};

function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");

  // Move user circle
  moveUser();

  // Move puck circle
  movePuck();

  // Draw the user and puck
  drawUser();
  drawPuck();
  drawTarget();
  targetOverlap();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}

function targetOverlap() {
  let distance = dist(puck.x, puck.y, target.x, target.y);
  let targetOverlap = distance < puck.size / 2 + target.size / 2;

    if (targetOverlap) {
    target.fill = target.fills.overlay;
  } else {
    target.fill = target.fills.noOverlay;
  }
    
    
}

function movePuck() {
  let d = dist(user.x, user.y, puck.x, puck.y);
  let dX = puck.x - user.x;
  let dY = puck.y - user.y;
  let overlap = d < user.size / 2 + puck.size / 2;

  if (d < user.size) {
    puck.x += dX / 10;
  }

  if (d < user.size) {
    puck.y += dY / 10;
  }

//   if (puck.x >= puck.size / 2) {
//     puck.x = puck.size / 2;
//   } else if (puck.x >= width - puck.size / 2) {
//     puck.x = width - puck.size / 2;
//   }

//   if (puck.y >= puck.size / 2) {
//     puck.y = puck.size / 2;
//   } else if (puck.y >= width - puck.size / 2) {
//     puck.y = width - puck.size / 2;
//   }
}
