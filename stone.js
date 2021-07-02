class Stone{
    
    constructor(x,y,radius){

        var options = {
            restitution:0,
            friction:1,
            density:1.2,
            isStatic:false,
        }
        this.stone=Bodies.circle(x,y,radius,options);
        this.image=loadImage("stone.png");
        World.add(world,this.stone);
       
    }
    display(){

        
        image (this.image,this.stone.position.x,this.stone.position.y,50,50);
    }
}