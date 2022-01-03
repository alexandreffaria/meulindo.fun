class Circle {
    constructor() {
      this.x = 200;
      this.y = 200;
    }
  
    move() {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }
    show() {
      stroke(197);
      strokeWeight(4);
      noFill();
      ellipse(this.x,this.y,24,24)
    }
  }
  