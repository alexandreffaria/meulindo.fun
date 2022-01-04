  let andador;
  
  function setup() {
    createCanvas(400, 400);
    background(28);
    andador = new Walker();
  }
  
  function draw() {
    andador.walk();
  }
  