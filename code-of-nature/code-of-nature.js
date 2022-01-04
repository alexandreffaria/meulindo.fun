// RandomWalker
var randomWalker = function( p ) {
    class Walker {
        constructor() {
          this.x = 400 / 2;
          this.y = 400 / 2;
        }
        walk() {
          p.stroke(250,235,215,p.random(255));
          p.point(this.x, this.y);
          this.x += p.random(-1, 1);
          this.y += p.random(-1, 1);
        }
    
    }
    let andador;
    p.setup = function() {
        p.createCanvas(400, 400);
        p.background(28);
        p.andador = new Walker();
    };
  
    p.draw = function() {
        p.andador.walk();
    };
  };
  var randomWalker = new p5(randomWalker, 'randomWalker');
  
  // Bubble Up
  var bubbleUp = function( p ) { 
    
    p.setup = function() {
        p.createCanvas(400, 400);
        p.background(28);
    };
  
    p.draw = function() {
      
      p.x = p.random(400);
      p.y = p.random(400);
      p.size = p.random(155);
      p.transparency = p.random(10);
      p.noStroke();
      p.fill(250,235,215,p.transparency);
      p.circle(p.x,p.y,p.size);
    
    };
  };
  var bubbleUp = new p5(bubbleUp, 'bubbleUp');

  // Random Circles
  var randomCircles = function( p ) { 
    class Circle {
      constructor() {
        this.x = 200;
        this.y = 200;
      }
    
      move() {
        this.x = this.x + p.random(-1, 1);
        this.y = this.y + p.random(-1, 1);
      }
      show() {
        p.stroke(250,235,215);
        p.strokeWeight(4);
        p.noFill();
        p.ellipse(this.x,this.y,24,24)
      }
    }
    let circle1,circle2;

    p.setup = function() {
      p.createCanvas(400, 400);
      circle1 = new Circle();
      circle2 = new Circle();
    };
  
    p.draw = function() {
      p.background(28);
      circle1.move();
      circle1.show();
      circle2.move()
      circle2.show()
    
    };
  };
  var randomCircles = new p5(randomCircles, 'randomCircles');