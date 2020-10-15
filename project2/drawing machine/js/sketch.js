
document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

let brushSize = 20;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('p5Canvas')
}
  
function mouseDragged() {
    fill(0);
	ellipse(mouseX, mouseY, 50);
    fill(255);
    ellipse(mouseX+10,mouseY, 50);
    fill(200);
    ellipse(mouseX + 50, mouseY + 50, 50);
    fill(200,50,65);
    ellipse(mouseX - 50, mouseY - 50, 25);
    fill(40,65,90);
    rect(mouseX-250, mouseY +200, 90);
    fill(200,200,0);
    rect(mouseX-235, mouseY +200, 75);
    rect(mouseX +500, mouseY-200, 75);
  
}

function mousePressed() {
  clear()

  
}