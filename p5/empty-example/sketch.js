var diaml=0;
function setup() {
	createCanvas(650,500);
	
  // put setup code here
}

function draw() {
background("#1D1D68");
fill("#7c501a");	
strokeWeight(1);
stroke(1);
	rect(280, 390, 75, 150);	
fill("#034B1A");
noStroke();
	triangle(315, 200, 150, 400, 480, 400); //third
  	triangle(315, 150, 180, 330, 450, 330); //second
  	triangle(315, 100, 220, 250, 410, 250); //first 
 strokeWeight(1);
 stroke(1); 	
 fill ("#43FCFA") //blue
 ellipse(310, 320, diaml,diaml);
 fill("#FF0000") //red
 ellipse(405, 350, diaml,diaml);	
 fill("#FF6F00") // orange
 ellipse(325, 190, diaml,diaml);
 fill("#00FF00") //green
 ellipse(265, 245, diaml,diaml);
 fill("#FC43BE") //pink
 ellipse(235, 360, diaml,diaml);
 fill("#F1C40F")//mustard
 ellipse(365, 260, diaml,diaml);
 fill("#FFFF00") //yellow
noStroke(); 
push();
  translate(width*0.8, height*0.5);
  star(-200, -150, 20, 40, 5); 
  pop();
 	 fill("#ffffff")
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),3,3);
 	ellipse(random(width),random(height),3,3);
 	ellipse(random(width),random(height),3,3);
 	ellipse(random(width),random(height),3,3);
 	ellipse(random(width),random(height),2,2);
 	ellipse(random(width),random(height),2,2);
 	ellipse(random(width),random(height),2,2);
 	ellipse(random(width),random(height),2,2);
 	ellipse(random(width),random(height),4,4);
 	ellipse(random(width),random(height),4,4);
 	ellipse(random(width),random(height),4,4);
 	ellipse(random(width),random(height),4,4);
 	ellipse(random(width),random(height),2,2);
 	ellipse(random(width),random(height),2,2);
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),1,1);	
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),1,1);
 	ellipse(random(width),random(height),3,3);
 	ellipse(random(width),random(height),3,3);
	
textSize(15);
textFont("New times roman");
textStyle(ITALIC);
 	text("Merry-Christmas!",mouseX,mouseY,40,40);
 	   // put drawing code here
 }
function mousePressed(){ 
	if(diaml>25){
		diaml=0;
	}else{
 		diaml=diaml+5;
 	}

}
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 1; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}