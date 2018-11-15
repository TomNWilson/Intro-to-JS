var bodyX = 185;
var bodyY = 100;
var bodyW = 100;
var bodyH;
var yMov = 5;

draw = function() {
    background(207, 254, 255);
    fill(255, 243, 181);
    // body
    ellipse(bodyX, bodyY, bodyW, bodyW * (21/25));
    // face
    ellipse(bodyX, bodyY-70, bodyH, bodyW * (3/5));
    
    fill(150, 18, 18);
    //mouth
    arc(bodyX, bodyY - 60, bodyW / 5, bodyH / 3, 0, 180);
    //eyes
    arc(bodyX - bodyW * 0.08, bodyY - 75, bodyW / 10, bodyH / 5, 180, 361);
    arc(bodyX + bodyW * 0.08, bodyY - 75, bodyW / 10, bodyH / 5, 180, 361);
    
    fill(0, 0, 0);
    //nose
    quad(bodyX - bodyW * (7/150), bodyY -70, bodyX+bodyW * (7/150), bodyY -70, bodyX+bodyW * (7/150), bodyY-62, bodyX - bodyW * (7/150), bodyY-62);
    
    //right leg
    line(bodyX + bodyW * 0.32, bodyY + bodyW * 0.32, bodyX + bodyW * 0.4, bodyY + bodyW * 0.4);
    line(bodyX + bodyW * 0.4, bodyY + bodyW * 0.4, bodyX + bodyW * 0.32, bodyY + bodyW * 0.48);
    
    //right toes
    line(bodyX + bodyW * 0.32, bodyY + bodyW * 0.48, bodyX + bodyW * 0.28, bodyY + bodyW * 0.44);
    line(bodyX + bodyW * 0.32, bodyY + bodyW * 0.48, bodyX + bodyW * 0.28, bodyY + bodyW * 0.52);
    line(bodyX + bodyW * 0.32, bodyY + bodyW * 0.48, bodyX + bodyW * 0.32, bodyY + bodyW * 0.56);
    
    //left leg
    line(bodyX - bodyW * 0.32, bodyY + bodyW * 0.32, bodyX - bodyW * 0.4, bodyY + bodyW * 0.4);
    line(bodyX - bodyW * 0.4, bodyY + bodyW * 0.4, bodyX - bodyW * 0.48, bodyY + bodyW * 0.32);
    
    //left toes
    line(bodyX - bodyW * 0.48, bodyY + bodyW * 0.32, bodyX + -bodyW * 0.48, bodyY + bodyW * 0.24);
    line(bodyX - bodyW * 0.48, bodyY + bodyW * 0.32, bodyX + -bodyW * 0.56, bodyY + bodyW * 0.28);
    line(bodyX - bodyW * 0.48, bodyY + bodyW * 0.32, bodyX + -bodyW * 0.56, bodyY + bodyW * 0.36);
    
    //left arm
    line(bodyX - bodyW * 0.32, bodyY - bodyW * 0.32, bodyX - bodyW * 0.4, bodyY - bodyW * 0.4);
    line(bodyX - bodyW * 0.4, bodyY - bodyW * 0.4, bodyX -bodyW * 0.32, bodyY - bodyW * 0.48);
    
    //left fingers
    line(bodyX -bodyW * 0.32, bodyY - bodyW * 0.48, bodyX + -bodyW * 0.32, bodyY + -bodyW * 0.56);
    line(bodyX -bodyW * 0.32, bodyY - bodyW * 0.48, bodyX + -bodyW * 0.28, bodyY + -bodyW * 0.52);
    line(bodyX -bodyW * 0.32, bodyY - bodyW * 0.48, bodyX + -bodyW * 0.28, bodyY + -bodyW * 0.44);
    
    //right arm
    line(bodyX + bodyW * 0.32, bodyY - bodyW * 0.32, bodyX + bodyW * 0.4, bodyY - bodyW * 0.4);
    line(bodyX + bodyW * 0.4, bodyY - bodyW * 0.4, bodyX + bodyW * 0.48, bodyY - bodyW * 0.32);
    
    //right fingers
    line(bodyX + bodyW * 0.48, bodyY - bodyW * 0.32, bodyX + bodyW * 0.56, bodyY + -bodyW * 0.36);
    line(bodyX + bodyW * 0.48, bodyY - bodyW * 0.32, bodyX + bodyW * 0.56, bodyY + -bodyW * 0.28);
    line(bodyX + bodyW * 0.48, bodyY - bodyW * 0.32, bodyX + bodyW * 0.52, bodyY + -bodyW * 0.2);
    
    //making body grow
    bodyW += 2;
    bodyH = bodyW/2;
    //making body move
    bodyY += yMov;
    yMov -=0.05;
};
