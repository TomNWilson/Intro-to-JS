//declaring variables
var xPositions = [floor(random(0, 400)), floor(random(0, 400))];
var yPositions = [floor(random(0, 400)), floor(random(0, 400))];

//randomizing colour
var R = [floor(random(0, 255)), floor(random(0, 255))];
var G = [floor(random(0, 255)), floor(random(0, 255))];
var B = [floor(random(0, 255)), floor(random(0, 255))];

//animating the water droplets
draw = function()
{
    //blue background
    background(204, 247, 255);
    
    for (var i = 0; i < xPositions.length; i++)
    {
        //removing strokes
        noStroke();
        
        //water droplets
        fill(R[i], B[i], G[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        
        //resets water droplets when they go off the screen
        if (yPositions[i] > 400)
        {
            yPositions[i] = 0;
        }
    }
    
    //when the mouse is clicked
    mouseClicked = function()
    {
        //adds new water droplet
        xPositions.push(mouseX);
        yPositions.push(mouseY);
        
        //assigns random colour to droplet
        R.push(floor(random(0, 255)));
        G.push(floor(random(0, 255)));
        B.push(floor(random(0, 255)));
    };
};
