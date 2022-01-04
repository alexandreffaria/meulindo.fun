const divWidth = 500;
const divHeight = 500;


// RandomWalker
var randomWalker = function( p ) {
    class Walker {
        constructor() {
          this.x = divWidth / 2;
          this.y = divHeight / 2;
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
        p.createCanvas(divWidth, divHeight);
        p.background(28);
        p.andador = new Walker();
    };
  
    p.draw = function() {
        p.frameRate(24);
        p.andador.walk();
    };
  };
  var randomWalker = new p5(randomWalker, 'randomWalker');
  
  // Bubble Up
  var bubbleUp = function( p ) { 
    
    p.setup = function() {
        p.createCanvas(divWidth, divHeight);
        p.background(28);
    };
  
    p.draw = function() {
      p.frameRate(24);
      p.x = p.random(divWidth);
      p.y = p.random(divHeight);
      p.size = p.random(15);
      p.transparency = p.random(30);
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
        this.x = divWidth/2;
        this.y = divHeight/2;
      }
    
      move() {
        this.x = this.x + p.random(-1, 1);
        this.y = this.y + p.random(-1, 1);
      }
      show() {
        p.stroke(250,235,215);
        p.strokeWeight(4);
        p.noFill();
        p.circle(this.x,this.y,divWidth/10);
      }
    }
    let circle1,circle2;

    p.setup = function() {
      p.createCanvas(divWidth, divHeight);
      circle1 = new Circle();
      circle2 = new Circle();
    };
  
    p.draw = function() {
      p.frameRate(24);
      p.background(28);
      circle1.move();
      circle1.show();
      circle2.move()
      circle2.show()
    
    };
  };
  var randomCircles = new p5(randomCircles, 'randomCircles');

  // Perlin Ball
  var perlinBall = function( p ) { 
    

    p.setup = function() {
      p.createCanvas(divWidth, divHeight);
      
    };
        
    let perlinX = 2400;
    let perlinY = 49030;
    p.draw = function() {
      p.background(28);
      var x = p.noise(perlinX)*divWidth;
      var y = p.noise(perlinY)*divHeight;
      p.stroke(250,235,215);
      p.strokeWeight(4);
      p.noFill();
      p.circle(x,y,divWidth/10);
      p.frameRate(24);
      perlinY += 0.01;
      perlinX += 0.01;
    
    };
  };
  var perlinBall = new p5(perlinBall, 'perlinBall');