class Walker {
    constructor() {
      this.x = 400 / 2;
      this.y = 400 / 2;
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
    createCanvas(400, 400);
    background(28);
    andador = new Walker();
  }
  
  function draw() {
    andador.walk();
  }
  