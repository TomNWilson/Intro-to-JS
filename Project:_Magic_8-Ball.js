//generating random number from 1 to 5
var answer = floor(random(1, 6));

//black circle
fill(0, 0, 0);
ellipse(200, 200, 375, 375);

//changes shape, color, & text based on num generated
if (answer === 1)
{
    //blue triangle
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    
    //white text
    fill(255, 255, 255);
    text("THE POINT", 170, 200);
    text("MAN COMES", 165, 229); 
}
else if (answer === 2)
{
    //purple rectangle
    fill(101, 38, 173);
    rect(110, 110, 185, 184);
    
    //white text
    fill(255, 255, 255);
    text("HE CRAVES", 170, 200);
    text("THE PARMESAN", 157, 229); 
}
else if (answer === 3)
{
    //red circle
    fill(191, 7, 23);
    ellipse(200, 200, 200, 200);
    
    //white text
    fill(255, 255, 255);
    text("HIDE FROM THE", 155, 200);
    text("PILFERING HANDS", 147, 229); 
}
else if (answer === 4)
{
    //yellow quad
    fill(214, 205, 40);
    quad(80, 260, 120, 150, 280, 150, 320, 259);
    
    //white text
    fill(255, 255, 255);
    text("THEY SEEK", 165, 200);
    text("CRUSTACEANS", 155, 229); 
}
else
{
    //green arc
    fill(40, 212, 66);
    arc(200, 260, 200, 240, 181, 360);
    
    //white text
    fill(255, 255, 255);
    text("HIDE FROM MARINE", 144, 200);
    text("INVERTEBRATES", 151, 229); 
}
