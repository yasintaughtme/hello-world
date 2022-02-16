let entity = [];
let greet;

function preload() {
  greet = loadImage('./asset/TrippyGreeting.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 33; i++) {
    entity.push(new ENTITY());
  }
}

function draw() {
  background('#F2F2F2');

  for(e of entity) {
    let mouse = createVector(mouseX, mouseY);
    let cDiff = p5.Vector.sub(mouse, e.pos);
    let eval = cDiff.mag();
  
    if(eval < 100) {
      cDiff.setMag(-0.05);
      e.force(cDiff);
    }
  
    e.motion();
    e.param();
    e.build();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}