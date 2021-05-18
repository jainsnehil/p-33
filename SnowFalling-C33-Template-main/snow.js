class Snow{
    constructor(x,y){
        var options={
            friction:0.7,
            density:0.9
         }
        this.r=60;
        this.body=Bodies.circle(x,y,this.r,options)
        this.image=loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop ()
    }
}