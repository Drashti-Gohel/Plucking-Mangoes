class Mango{
    
    constructor(x,y,radius){

        var options = {
            restitution:0,
            friction:1,
            isStatic:true,
        }
        this.mango=Bodies.circle(x,y,radius,options);
        this.image=loadImage("mango.png");
        World.add(world,this.mango);
       
    }
    display(){
        fill ("green");
        image (this.image,this.mango.position.x,this.mango.position.y,50,50);
    }
}