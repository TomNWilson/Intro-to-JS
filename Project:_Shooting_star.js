//declaring variables
var xPos = 30;
var yPos = 25;
var xPos2 = 145;
var yPos2 = 15;

//star animation
draw = function() {
    //settijng background to dark blue
    background(9, 15, 54);
    
    //setting fill colour to yellow
    fill(232, 225, 102);

    //drawing star 1
    triangle(xPos + 20, yPos, xPos + 10, yPos + 21, xPos - 30, yPos - 30);
    triangle(xPos, yPos, xPos + 20, yPos, xPos + 10, yPos + 20);
    triangle(xPos, yPos + 13, xPos + 20, yPos + 13, xPos + 10, yPos - 5);

    //drawing star 2
    triangle(xPos2, yPos2, xPos2 + 18, yPos2 + 15, xPos2 + 30, yPos2 - 50);
    triangle(xPos2, yPos2, xPos2 + 20, yPos2, xPos2 + 10, yPos2 + 20);
    triangle(xPos2, yPos2 + 13, xPos2 + 20, yPos2 + 13, xPos2 + 10, yPos2 - 5);
    
    //moving star 1
    xPos += 5;
    yPos += 5;
    
    //moving star 2
    xPos2 -= 2;
    yPos2 += 10;

};



