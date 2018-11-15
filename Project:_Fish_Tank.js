background(89, 216, 255);

var bodyHeight = 74;

var fish = function(centerX, centerY, bodyLength, bodyColor)
{
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY, centerX-bodyLength/2-tailWidth, centerY -tailHeight, centerX-bodyLength/2-tailWidth, centerY +tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5,       bodyHeight/5);  
};

fish(random(90, 125), random(45, 200), random(50, 75), color(255, 0, random(0, 255)));
fish(random(300, 350), random(200, 350), random(100, 150), color(random(0, 200), 0, 255));
fish(random(90, 350), random(45, 350), random(200, 300), color(random(0, 200), 255, 0));
