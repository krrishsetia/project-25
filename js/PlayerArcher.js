class PlayerArcher {
    constructor(x, y, width, height, angle){
    this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
    this.x = x
    this.y = y 
    this.width = 40
    this.height = 60
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/playerArcher.png");
      
    World.add(world, this.body);
    Matter.Body.setAngle(this.body, -PI/2)
    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    console.log(angle)
        if (keyIsDown(UP_ARROW) && this.body.angle > 1   ) {
            angle -= 0.1;
            Matter.Body.setAngle(this.body, angle);
        } 
            
        
        if ( keyIsDown(DOWN_ARROW) && this.body.angle < 4 ) {
            angle += 0.1;
            Matter.Body.setAngle(this.body, angle);
        } 
            
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width,this.height);
        pop()
        
    }
}