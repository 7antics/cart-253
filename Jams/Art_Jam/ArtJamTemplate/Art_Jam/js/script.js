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
  fill:"#4100F3",
  fills: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
  sprite: {
    path: "",
    x: 125,
    y: 190,
    w: 20,
    h: 20,
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
  fill:"#4100F3",
  fills: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
  sprite: {
    path: "",
    x: 325,
    y: 190,
    w: 20,
    h: 20,
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
  fill:"#4100F3",
  fills: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
  sprite: {
    path: "",
    x: 525,
    y: 190,
    w: 20,
    h: 20,
  },
};

let sprites = {
  optionA: {
    image: null,
    path: "assets/images/clown.png",
  },
  optionB: {
    image: null,
    path: "assets/images/Icon.png",
  },
  optionC: {
    image: null,
    path: "assets/images/downloadimage.png",
  },
  optionD: {
    image: null,
    path: "assets/images/check.jpg",
  },
  optionE: {
    image: null,
    path: "assets/images/person.png",
  },
  optionF: {
    image: null,
    path: "assets/images/house.png",
  },
};

// Heart Properties
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
  isEmpty: false,
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
  isEmpty: false,
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
  isEmpty: false,
};

let txt = {
  str: "",
  speech: {
    txtOne: "Pick a card to make Anna's Perfect Day!",
    txtTwo: "Press ANY KEY to pick Anna's second task of the Day!",
    txtThree: "Press ANY KEY to pick Anna's last task of the Day!",
  },
  fill: ("#000000"),
  size: 20,
}
  
let hasImageDisplayed = false;
let hasTextDisplayed = false;
let veryRandom;


function setup() {
  //Create Canvas
  createCanvas(650, 450);

  sprites.optionA.image = loadImage(sprites.optionA.path);
  sprites.optionB.image = loadImage(sprites.optionB.path);
  sprites.optionC.image = loadImage(sprites.optionC.path);
  sprites.optionD.image = loadImage(sprites.optionD.path);
  sprites.optionE.image = loadImage(sprites.optionE.path);
  sprites.optionF.image = loadImage(sprites.optionF.path);

  imageMode(CENTER);
}

function draw() {
  background(192, 234, 240);
  writeText();
  drawCardBack();
  drawHearts();
  display();
}

function writeText() {

  push();
  fill(txt.fill);
  textAlign(CENTER,CENTER);
  textSize(txt.size);
  textStyle(BOLDITALIC)
  text(txt.str, width / 2, 25);
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
  }

  //If mouse clicks Middle card back, card back changes colour to card face colour
  else if (overlapsCardMiddle && mouseIsPressed && areAllFaceDown) {
    cardBackMiddle.fill = cardBackMiddle.fills.cardFaceFill;
    cardBackMiddle.isFlip = true;
  }

  //If mouse clicks Right card back, card back changes colour to card face colour
  else if (overlapsCardRight && mouseIsPressed && areAllFaceDown) {
    cardBackRight.fill = cardBackRight.fills.cardFaceFill;
    cardBackRight.isFlip = true;
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

  // If the left card back is flipped AND produces a good result, fill the left heart the good colour
  if (cardBackLeft.isFlip && imageIsGood) {
    heartLeft.fill = heartLeft.fills.good;
  }
  else if (cardBackLeft.isFlip && !imageIsGood) {
    heartLeft.fill = heartLeft.fills.bad;
  }

  // If the middle card back is flipped AND produces a good result, fill the left heart the good colour
  if (cardBackMiddle.isFlip && imageIsGood) {
    heartLeft.fill = heartLeft.fills.good;
  }
  else if (cardBackMiddle.isFlip && !imageIsGood) {
    heartLeft.fill = heartLeft.fills.bad;
  }

  // If the right card back is flipped AND produces a good result, fill the left heart the good colour
  if (cardBackRight.isFlip && imageIsGood) {
    heartLeft.fill = heartLeft.fills.good;
  }
  else if (cardBackRight.isFlip && !imageIsGood) {
    heartLeft.fill = heartLeft.fills.bad;
  }

  //If all hearts are empty, display text one
  if (heartLeft.fill == heartLeft.fills.base) {
    txt.str = txt.speech.txtOne;
  }
  else if (heartLeft.fill != heartLeft.fills.base) {
    txt.str = txt.speech.txtTwo;
  }
  else if (heartMiddle.fill != heartMiddle.fills.base) {
    txt.str = txt.speech.txtThree;
  }

  if (heartLeft.fill != heartLeft.fills.base && keyIsPressed) {
    cardBackLeft.fill = cardBackLeft.fills.cardBackFill;
    cardBackMiddle.fill = cardBackMiddle.fills.cardBackFill;
    cardBackRight.fill = cardBackRight.fills.cardBackFill;
    cardBackLeft.isFlip = false;
    cardBackMiddle.isFlip = false;
    cardBackRight.isFlip = false;
    hasImageDisplayed = false;
}

}

  
  

//Once heart colour changes, reset card backs by using space key
//display text "Use Space Key to for a second shuffle!"

//Once all three hearts are full, display end scene

//If all three red hearts display "End Scene One/WAHOO!"

//If two red hearts display "End Scene Two/MEH."

//If one red heart display "End Scene Three/WOMPWOMP!"

//If no red hearts display "End Scene Four/WAH!"
