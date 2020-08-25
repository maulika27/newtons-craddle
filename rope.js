class rope{
    constructor(bodyA,bodyB, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY
    
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1,
            length : 1,
            pointB: {x: this.offsetX, y: this.offsetY}
        }


        this.chain= Constraint.create(options);
        World.add(world, this.chain);
        
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;

        fill ("green")
        strokeWeight(3.4);
                line (pointA.x, pointA.y, pointB.x, pointB.y);
    }
 
}