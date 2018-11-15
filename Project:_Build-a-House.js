//declaring variables
var xWin = 116;
var xGrass = 0;
var xPlant = 26;
var xLine = 60;
var yLine = 150;

//blue background
background(219, 255, 255);

//red house
fill(247, 129, 129);
rect(60, 150, 280, 207);

//horizontal brick lines
while(xLine <= 350)
{
    line(xLine, 150, xLine, 350);
    xLine += 28;
}

//vertical brick lines
while(yLine <= 350)
{
    line(60, yLine, 340, yLine);
    yLine += 16;
}

//brown roof
fill(69, 45, 11);
triangle(200, 28, 360, 167, 40, 167);

//brown door
fill(69, 45, 11);
rect(172, 278, 57, 77);

//blue windows
while(xWin < 300)
{
    fill(0, 123, 255);
    rect(xWin, 198, 56, 48);
    xWin += 112;
}

//grass
while(xGrass <= 350)
{
    image(getImage("cute/GrassBlock"),xGrass, 330, 50, 70);
    xGrass += 50;
}

//plants
while(xPlant <= 350)
{
    image(getImage("cute/TreeTall"), xPlant, 310, 50, 90);
    xPlant += 100;
}
