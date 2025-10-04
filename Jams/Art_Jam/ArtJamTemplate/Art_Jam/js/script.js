/**
 * A Perfect Day
 * Anna Tsirbas
 *
 * Find Anna's perfect day! Flip three cards face up to reveal Anna's task for the day!
 * The cards can either have her perfect pastimes or her dreaded duties! But BEWARE!
 * By choosing a terrible task, Anna's perfect day will be at peril! Pick wisely or be at risk of causing her demise!
 * (Becoming disheartended in the face of Responsiblities </3)
 */

"use strict";

/**
 */

// Card Properties
let cardBackLeft = {
  //Position and Size
  cardX: 50,
  cardY: 50,
  cardW: 150,
  cardH: 300,
  isFlip: false,
  //Card Back Colour
  fill: "#4100F3",
  fills: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
  sprite: {
    path: "",
    x: 125,
    y: 190,
    w: 64,
    h: 64,
  },
};

let cardBackMiddle = {
  //Position and Size
  cardX: 250,
  cardY: 50,
  cardW: 150,
  cardH: 300,
  isFlip: false,
  //Card Back Colour
  fill: "#4100F3",
  fills: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
  sprite: {
    path: "",
    x: 325,
    y: 190,
    w: 64,
    h: 64,
  },
};

let cardBackRight = {
  //Position and Size
  cardX: 450,
  cardY: 50,
  cardW: 150,
  cardH: 300,
  isFlip: false,
  //Card Back Colour
  fill: "#4100F3",
  fills: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
  sprite: {
    path: "",
    x: 525,
    y: 190,
    w: 64,
    h: 64,
  },
};

let sprites = {
  optionA: {
    image: null,
    path: "assets/images/work.png",
  },
  optionB: {
    image: null,
    path: "assets/images/cleaning.png",
  },
  optionC: {
    image: null,
    path: "assets/images/hw.png",
  },
  optionD: {
    image: null,
    path: "assets/images/reading.png",
  },
  optionE: {
    image: null,
    path: "assets/images/sleep.png",
  },
  optionF: {
    image: null,
    path: "assets/images/eat.png",
  },
};

// Heart Properties
let heartBase;

let heartLeft = {
  // Ellipse Size
  ellipseSize: {
    w: 10,
    h: 10,
  },
  //Ellipse 1 Position
  ellipseOne: {
    x: 275,
    y: 400,
  },
  // Ellipse 2 Position
  ellipseTwo: {
    x: 285,
    y: 400,
  },
  // Triangle Position
  triPos: {
    xOne: 270,
    yOne: 402,
    xTwo: 290,
    yTwo: 402,
    xThree: 280,
    yThree: 420,
  },
  //Heart Colour
  fill: "#FFFFFF",
  fills: {
    base: "#FFFFFF",
    good: "#FF0000",
    bad: "#808080",
  },
  isFilled: false,
};

let heartMiddle = {
  // Ellipse Size
  ellipseSize: {
    w: 10,
    h: 10,
  },
  //Ellipse 1 Position
  ellipseOne: {
    x: 325,
    y: 400,
  },
  // Ellipse 2 Position
  ellipseTwo: {
    x: 335,
    y: 400,
  },
  // Triangle Position
  triPos: {
    xOne: 320,
    yOne: 402,
    xTwo: 340,
    yTwo: 402,
    xThree: 330,
    yThree: 420,
  },
  //Heart Colour
  fill: "#FFFFFF",
  fills: {
    base: "#FFFFFF",
    good: "#FF0000",
    bad: "#808080",
  },
  isFilled: false,
};

let heartRight = {
  // Ellipse Size
  ellipseSize: {
    w: 10,
    h: 10,
  },
  //Ellipse 1 Position
  ellipseOne: {
    x: 375,
    y: 400,
  },
  // Ellipse 2 Position
  ellipseTwo: {
    x: 385,
    y: 400,
  },
  // Triangle Position
  triPos: {
    xOne: 370,
    yOne: 402,
    xTwo: 390,
    yTwo: 402,
    xThree: 380,
    yThree: 420,
  },
  //Heart Colour
  fill: "#FFFFFF",
  fills: {
    base: "#FFFFFF",
    good: "#FF0000",
    bad: "#808080",
  },
  isFilled: false,
};

let txt = {
  fill: "#000000",
  size: 20,
  str: "",
  speech: {
    txtOne: "Pick a card to make Anna's Perfect Day!",
    txtTwo: "Press ANY KEY to pick Anna's second task of the Day!",
    txtThree: "Press ANY KEY to pick Anna's last task of the Day!",
    txtFour: "Click THE MOUSE to see how Anna's day went!",
  },
};

let endTxt = {
  fill: "#FFFFFF",
  size: 20,
  str: "",
  speech: {
    txtOne: "Great Job! That's one Perfect Day!",
    txtTwo: "Not bad! What's a little responsiblity with a lot of reward!",
    txtThree: "Not good! Defintely not a stress-free day...",
    txtFour: "Yikes! Literally the worst possible day!",
  },
};

//For the Randomizer of the Sprites
let hasImageDisplayed = false;
let veryRandom;

//For the result text
let hasTextDisplayed = 0;

//For the black screen to appear
let hasEndDisplayed = false;

//For the counter of the cards flipped to fill the hearts
let cardHasFlippedValue = 0;
let maxCounterValue = 7;

//For the amount of hearts that turn red
let colourCounter = 0;

function setup() {
  //Create Canvas
  createCanvas(650, 450);

  sprites.optionA.image = loadImage(sprites.optionA.path);
  sprites.optionB.image = loadImage(sprites.optionB.path);
  sprites.optionC.image = loadImage(sprites.optionC.path);
  sprites.optionD.image = loadImage(sprites.optionD.path);
  sprites.optionE.image = loadImage(sprites.optionE.path);
  sprites.optionF.image = loadImage(sprites.optionF.path);

  heartBase = heartLeft;

  imageMode(CENTER);
}

function draw() {
  background(192, 234, 240);
  drawCardBack();

  display();
  drawHearts();
  writeText();

  console.log(cardHasFlippedValue);
}

function writeText() {
  //Instructions
  push();
  fill(txt.fill);
  textAlign(CENTER, CENTER);
  textSize(txt.size);
  textStyle(BOLDITALIC);
  text(txt.str, width / 2, 25);
  pop();

  //End scene text
  push();
  fill(endTxt.fill);
  textAlign(CENTER, CENTER);
  textSize(endTxt.size);
  textStyle(BOLDITALIC);
  text(endTxt.str, width / 2, height / 2);
  pop();
}

function drawCardBack() {
  // Left Card Back
  push();
  noStroke();
  fill(cardBackLeft.fill);
  rect(
    cardBackLeft.cardX,
    cardBackLeft.cardY,
    cardBackLeft.cardW,
    cardBackLeft.cardH
  );
  pop();

  // Middle Card Back
  push();
  noStroke();
  fill(cardBackMiddle.fill);
  rect(
    cardBackMiddle.cardX,
    cardBackMiddle.cardY,
    cardBackMiddle.cardW,
    cardBackMiddle.cardH
  );
  pop();

  // Right Card Back
  push();
  noStroke();
  fill(cardBackRight.fill);
  rect(
    cardBackRight.cardX,
    cardBackRight.cardY,
    cardBackRight.cardW,
    cardBackRight.cardH
  );
  pop();
}

function drawHearts() {
  // Draw Hearts
  // Left Heart
  push();
  noStroke();
  fill(heartLeft.fill);
  ellipse(
    heartLeft.ellipseOne.x,
    heartLeft.ellipseOne.y,
    heartLeft.ellipseSize.w,
    heartLeft.ellipseSize.h
  );
  ellipse(
    heartLeft.ellipseTwo.x,
    heartLeft.ellipseTwo.y,
    heartLeft.ellipseSize.w,
    heartLeft.ellipseSize.h
  );
  triangle(
    heartLeft.triPos.xOne,
    heartLeft.triPos.yOne,
    heartLeft.triPos.xTwo,
    heartLeft.triPos.yTwo,
    heartLeft.triPos.xThree,
    heartLeft.triPos.yThree
  );
  pop();

  //Middle Heart
  push();
  noStroke();
  fill(heartMiddle.fill);
  ellipse(
    heartMiddle.ellipseOne.x,
    heartMiddle.ellipseOne.y,
    heartMiddle.ellipseSize.w,
    heartMiddle.ellipseSize.h
  );
  ellipse(
    heartMiddle.ellipseTwo.x,
    heartMiddle.ellipseTwo.y,
    heartMiddle.ellipseSize.w,
    heartMiddle.ellipseSize.h
  );
  triangle(
    heartMiddle.triPos.xOne,
    heartMiddle.triPos.yOne,
    heartMiddle.triPos.xTwo,
    heartMiddle.triPos.yTwo,
    heartMiddle.triPos.xThree,
    heartMiddle.triPos.yThree
  );

  //Right Heart
  push();
  noStroke();
  fill(heartRight.fill);
  ellipse(
    heartRight.ellipseOne.x,
    heartRight.ellipseOne.y,
    heartRight.ellipseSize.w,
    heartRight.ellipseSize.h
  );
  ellipse(
    heartRight.ellipseTwo.x,
    heartRight.ellipseTwo.y,
    heartRight.ellipseSize.w,
    heartRight.ellipseSize.h
  );
  triangle(
    heartRight.triPos.xOne,
    heartRight.triPos.yOne,
    heartRight.triPos.xTwo,
    heartRight.triPos.yTwo,
    heartRight.triPos.xThree,
    heartRight.triPos.yThree
  );

  pop();
}

// function keyPressed() {}

function display() {
  let overlapsCardLeft = false;

  //Variable of all cards not being flipped
  let areAllFaceDown =
    !cardBackLeft.isFlip && !cardBackMiddle.isFlip && !cardBackRight.isFlip;

  let heartsEmpty =
    heartLeft.fills.base && heartMiddle.fills.base && heartRight.fills.base;

  //Arrays/List of Sprite Options
  //Left Card Options from loadimages
  let spritesInArray = [
    sprites.optionA.image,
    sprites.optionB.image,
    sprites.optionC.image,
    sprites.optionD.image,
    sprites.optionE.image,
    sprites.optionF.image,
  ];

  //Randomize Left Card Sprite Results
  if (!hasImageDisplayed) {
    veryRandom = random(spritesInArray);
    hasImageDisplayed = true;
  }

  //Array for good results
  let goodResultArray = [
    sprites.optionD.image,
    sprites.optionE.image,
    sprites.optionF.image,
  ];

  //Searching for good results in the random, so it picks the one image being displayed
  let imageIsGood = goodResultArray.includes(veryRandom);

  //Left card constraints for when mouse is in card coordinates
  if (
    mouseX > cardBackLeft.cardX &&
    mouseX < cardBackLeft.cardX + cardBackLeft.cardW
  ) {
    if (
      mouseY > cardBackLeft.cardY &&
      mouseY < cardBackLeft.cardY + cardBackLeft.cardH
    ) {
      overlapsCardLeft = true;
    }
  }

  //Middle Card constraints for when mouse is in card coordinates
  let overlapsCardMiddle = false;

  if (
    mouseX > cardBackMiddle.cardX &&
    mouseX < cardBackMiddle.cardX + cardBackMiddle.cardW
  ) {
    if (
      mouseY > cardBackMiddle.cardY &&
      mouseY < cardBackMiddle.cardY + cardBackMiddle.cardH
    ) {
      overlapsCardMiddle = true;
    }
  }

  //Right Card constraints for when mouse is in card coordinates
  let overlapsCardRight = false;

  if (
    mouseX > cardBackRight.cardX &&
    mouseX < cardBackRight.cardX + cardBackRight.cardW
  ) {
    if (
      mouseY > cardBackRight.cardY &&
      mouseY < cardBackRight.cardY + cardBackRight.cardH
    ) {
      overlapsCardRight = true;
    }
  }

  //If mouse clicks Left card back, card back changes colour to card face colour
  if (overlapsCardLeft && mouseIsPressed && areAllFaceDown) {
    cardBackLeft.fill = cardBackLeft.fills.cardFaceFill;
    cardBackLeft.isFlip = true;
    if (cardHasFlippedValue < maxCounterValue) {
      cardHasFlippedValue++;
    } else {
    }
  }

  //If mouse clicks Middle card back, card back changes colour to card face colour
  else if (overlapsCardMiddle && mouseIsPressed && areAllFaceDown) {
    cardBackMiddle.fill = cardBackMiddle.fills.cardFaceFill;
    cardBackMiddle.isFlip = true;
    if (cardHasFlippedValue < maxCounterValue) {
      cardHasFlippedValue++;
    } else {
    }
  }

  //If mouse clicks Right card back, card back changes colour to card face colour
  else if (overlapsCardRight && mouseIsPressed && areAllFaceDown) {
    cardBackRight.fill = cardBackRight.fills.cardFaceFill;
    cardBackRight.isFlip = true;
    if (cardHasFlippedValue < maxCounterValue) {
      cardHasFlippedValue++;
    } else {
    }
  }

  // When left card back is flipped, result shows up
  if (cardBackLeft.isFlip) {
    image(
      veryRandom,
      cardBackLeft.sprite.x,
      cardBackLeft.sprite.y,
      cardBackLeft.sprite.w,
      cardBackLeft.sprite.h
    );
  }
  // When middle card back is flipped, result shows up
  if (cardBackMiddle.isFlip) {
    image(
      veryRandom,
      cardBackMiddle.sprite.x,
      cardBackMiddle.sprite.y,
      cardBackMiddle.sprite.w,
      cardBackMiddle.sprite.h
    );
  }

  // When right card back is flipped, result shows up
  if (cardBackRight.isFlip) {
    image(
      veryRandom,
      cardBackRight.sprite.x,
      cardBackRight.sprite.y,
      cardBackRight.sprite.w,
      cardBackRight.sprite.h
    );
  }

  //If all hearts are empty, display text one
  if (heartLeft.fill == heartLeft.fills.base) {
    txt.str = txt.speech.txtOne;
  }
  if (heartLeft.fill != heartLeft.fills.base) {
  }
  //If the left heart is filled and any key is pressed, return card face to card back, and display text
  if (heartLeft.fill != heartLeft.fills.base && keyIsPressed) {
    cardBackLeft.fill = cardBackLeft.fills.cardBackFill;
    cardBackMiddle.fill = cardBackMiddle.fills.cardBackFill;
    cardBackRight.fill = cardBackRight.fills.cardBackFill;

    cardBackLeft.isFlip = false;
    cardBackMiddle.isFlip = false;
    cardBackRight.isFlip = false;
    hasImageDisplayed = false;
  }

  //If the Middle heart is filled any key is pressed, return card face to card back, and display text
  if (
    heartLeft.fill != heartLeft.fills.base &&
    heartMiddle.fill != heartMiddle.fills.base &&
    keyIsPressed
  ) {
    cardBackLeft.fill = cardBackLeft.fills.cardBackFill;
    cardBackMiddle.fill = cardBackMiddle.fills.cardBackFill;
    cardBackRight.fill = cardBackRight.fills.cardBackFill;
    cardBackLeft.isFlip = false;
    cardBackMiddle.isFlip = false;
    cardBackRight.isFlip = false;
    hasImageDisplayed = false;
  }

  //If the first cardback is flipped/counter hits 1, fill the left heart and display text
  if (cardHasFlippedValue === 1) {
    if (imageIsGood) {
      heartLeft.fill = heartLeft.fills.good;
      cardHasFlippedValue++;
      txt.str = txt.speech.txtOne;
      colourCounter++;
      endTxt.str;
    } else if (imageIsGood === false) {
      heartLeft.fill = heartLeft.fills.bad;
      cardHasFlippedValue++;
      txt.str = txt.speech.txtTwo;
      endTxt.str;
    }
  }
  //If the second cardback is flipped/counter hits 3, fill the middle heart and display text
  if (cardHasFlippedValue === 3) {
    if (imageIsGood) {
      heartMiddle.fill = heartMiddle.fills.good;
      cardHasFlippedValue++;
      txt.str = txt.speech.txtThree;
      colourCounter++;
      endTxt.str;
    } else if (imageIsGood === false) {
      heartMiddle.fill = heartMiddle.fills.bad;
      cardHasFlippedValue++;
      txt.str = txt.speech.txtThree;
      endTxt.str;
    }
  }

  //If the third cardback is flipped/counter hits 5, fill the right heart and display t7
  if (cardHasFlippedValue === 5) {
    if (imageIsGood) {
      heartRight.fill = heartRight.fills.good;
      cardHasFlippedValue++;
      txt.str = txt.speech.txtFour;
      colourCounter++;
      endTxt.str;
    } else if (imageIsGood === false) {
      heartRight.fill = heartRight.fills.bad;
      cardHasFlippedValue++;
      txt.str = txt.speech.txtFour;
      endTxt.str;
    }
  }

  if ((hasEndDisplayed = true && cardHasFlippedValue === 7)) {
    push();
    fill("#000000");
    rect(0, 0, 650, 450);
    pop();
    if (colourCounter === 3) {
      endTxt.str = endTxt.speech.txtOne;
      console.log("a");
    } else if (colourCounter === 2) {
      endTxt.str = endTxt.speech.txtTwo;
      console.log("b");
    } else if (colourCounter === 1) {
      endTxt.str = endTxt.speech.txtThree;
      console.log("c");
    } else if (colourCounter === 0) {
      endTxt.str = endTxt.speech.txtFour;
      console.log("d");
    }
  }
}
