class Walker {
    constructor() {
      this.x = windowWidth / 2;
      this.y = windowHeight / 2;
    }
    walk() {
      stroke(random(20,195));
      point(this.x, this.y);
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
  }
  
  let andador;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(28);
    andador = new Walker();
  }
  
  function draw() {
    andador.walk();
  }
  