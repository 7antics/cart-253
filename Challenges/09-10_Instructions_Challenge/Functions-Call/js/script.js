/**
 * Instructions Challenge
 * Anna Tsirbas
 * 
 *Creating an immersive nighttime landscape. 
 */

"use strict";

/**
 * Creating a canvas for my landscape.
*/
function setup() {
    createCanvas(640, 480);
    noStroke();
}


/**
 * A landscape.
*/
function draw() {
    background("#00008B");

    //Grass
    push();
    fill(1, 50, 32);
    rect(0, 400, 640, 80);
    pop();

    //Star 1
    triangle(30, 10, 20, 25, 40, 25);
    triangle(30, 30, 20, 15, 40, 15);
    //Star 2
    triangle(100, 80, 90, 95, 110, 95);
    triangle(100, 100, 90, 85, 110, 85);
    //Star 3
    triangle(50, 140, 40, 155, 60, 155);
    triangle(50, 160, 40, 145, 60, 145);
    //Star 4
    triangle(150, 10, 140, 25, 160, 25);
    triangle(150, 30, 140, 15, 160, 15);
    //Star 5
    triangle(250, 60, 240, 75, 260, 75);
    triangle(250, 80, 240, 65, 260, 65);
    //Star 6
    triangle(310, 50, 300, 65, 320, 65);
    triangle(310, 70, 300, 55, 320, 55);
    //Star 7
    triangle(200, 180, 190, 195, 210, 195);
    triangle(200, 200, 190, 185, 210, 185);
    //Star 8
    triangle(320, 140, 310, 155, 330, 155);
    triangle(320, 160, 310, 145, 330, 145);
    //Star 9
    triangle(420, 110, 410, 125, 430, 125);
    triangle(420, 130, 410, 115, 430, 115);
    //Star 10
    triangle(450, 180, 440, 195, 460, 195);
    triangle(450, 200, 440, 185, 460, 185);
    pop();

    //Moon
    ellipse(550, 65, 30);
    push();
    fill("#00008B");
    ellipse(555, 65, 30);
    pop();

    //Bird 1
    push();
    noFill();
    stroke(255);
    arc(140, 240, 15, 15, PI, 0, OPEN); 
    arc(156, 240, 15, 15, PI, 0, OPEN); 
    //Bird 2
    arc(160, 265, 15, 15, PI, 0, OPEN); 
    arc(176, 265, 15, 15, PI, 0, OPEN); 
    //Bird 3
    arc(110, 255, 15, 15, PI, 0, OPEN);
    arc(126, 255, 15, 15, PI, 0, OPEN); 
    pop();


    //Castle
    push();
    fill(0, 0, 0);
    //Building
    rect(400, 320, 100);
    //Top Tower
    rect(425, 250, 50, 100);
    //Side Tower 1
    rect(350, 270, 50, 150);
    //Side Tower 2
    rect(500, 270, 50, 150);
     //Roof
    triangle(450, 220, 400, 260, 500, 260);


    //Window
    fill(255);
    ellipse(450, 300, 15);
    //Door
    push();
    fill("#964B00")
    rect(444, 390, 15, 30);
    pop();
    
   

    //Playing with Grids
    //push();
    //stroke(255);

    //line(width / 2, 0, width / 2, height);
    //line(width / 4, 0, width / 4, height);
    
    //line(0, height / 2, width, height / 2);
    //line(0, height/4, width, height/4);
    //pop();
}