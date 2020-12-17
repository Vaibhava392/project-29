class Polygon {
    constructor(x, y, r) {
      
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.5,
          isStatic : false
      }
      this.body = Bodies.circle(x, y, r/2 , options);
      this.radius = r
      this.image = loadImage("polygon.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };