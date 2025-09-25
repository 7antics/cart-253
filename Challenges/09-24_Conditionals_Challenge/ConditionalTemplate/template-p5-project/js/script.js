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
    fill: {
        overlay: "#FFA500",
        noOverlay: "#0000FF",
    }
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
  fill(target.fill.noOverlay);
  ellipse(target.x, target.y, target.size);
  pop();

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
    

  }

