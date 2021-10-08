class ComputerArcher {
    constructor(x, y, width, height){
    this.body = Bodies.rectangle(x, y, width, height);
    this.x = x
    this.y = y 
    this.width = 40
    this.height = 60
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/computerArcher.png");
    World.add(world, this.body);
    Matter.Body.setAngle(this.body, -PI/2)
    }
    
    display(){
        
        
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width,this.height);
        
    }
}