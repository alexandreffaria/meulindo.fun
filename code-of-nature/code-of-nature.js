 
// save this file as sketch.js
// Sketch One
var randomWalker = function( p ) { // p could be any variable name
    class Walker {
        constructor() {
          this.x = 400 / 2;
          this.y = 400 / 2;
        }
        walk() {
          p.stroke(p.random(20,195));
          p.point(this.x, this.y);
          this.x += p.random(-1, 1);
          this.y += p.random(-1, 1);
        }
    
    }
    let andador;
    // var x = 100; 
    // var y = 100;
    p.setup = function() {
        p.createCanvas(400, 400);
        p.background(28);
        p.andador = new Walker();
    };
  
    p.draw = function() {
        p.andador.walk();
    };
  };
  var myp5 = new p5(randomWalker, 'randomWalker');
  
  // Sketch Two
  var randomWalker2 = function( p ) { 
    class Walker {
        constructor() {
          this.x = 400 / 2;
          this.y = 400 / 2;
        }
        walk() {
          p.stroke(p.random(20,195));
          p.point(this.x, this.y);
          this.x += p.random(-1, 1);
          this.y += p.random(-1, 1);
        }
    
    }
    let andador;
    // var x = 100; 
    // var y = 100;
    p.setup = function() {
        p.createCanvas(400, 400);
        p.background(28);
        p.andador = new Walker();
    };
  
    p.draw = function() {
        p.andador.walk();
    };
  };
  var myp5 = new p5(randomWalker2, 'randomWalker2');