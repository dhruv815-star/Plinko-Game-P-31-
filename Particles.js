class Particles
{
     constructor(x,y,r)
     {
        var options = 
        {
            restitution:0.8,
            friction:0.3,
            density:0.7
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        this.color= color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
     }

     display()
     {
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        fill (this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        pop ();
     }
}