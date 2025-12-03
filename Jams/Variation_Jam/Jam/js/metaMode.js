/**
 * UNDECIDED
 * Anna Tsirbas
 *
 * Making the meta mode for snakes and ladders
 */

"use strict";

/**
 * Mouse click in meta mode game state
 */
function metaMousePressed() {}

/**
 * Player One Controls
 */
function p1MetaMovement() {
  if (keyIsDown(87)) {
    // W
    p1.y -= p1.speed;
  }
  if (keyIsDown(83)) {
    // S
    p1.y += p1.speed;
  }
  if (keyIsDown(65)) {
    // A
    p1.x -= p1.speed;
  }
  if (keyIsDown(68)) {
    // D
    p1.x += p1.speed;
  }
}

/**
 * Player Two Controls
 */
function p2MetaMovement() {
  if (keyIsDown(UP_ARROW)) {
    p2.y -= p2.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    p2.y += p2.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    p2.x -= p2.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    p2.x += p2.speed;
  }
}

/**
 * Player Control Instructions
 */

function controlInstructions() {
  push();
  fill(txt.fillthree);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Player One: AWSD Controls", 100, 570);
  text("Player Two: Arrow Key Controls", 500, 570);
  pop();
}
