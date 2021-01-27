class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius =Math.random() + 0.5;
        this.speed = Math.random()*3 +0.5;
        //console.log(this.radius);
    }

    draw() {
        cm.context.beginPath();
        cm.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        cm.context.fill();
    }

}
class Line {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height =300;
        const numberOfParticles = 30;
        this.particles = [];
        for (let i =0; i<numberOfParticles; i++) {
            this.particles.push(
                new Particle(this.x, this.y)
            )        
        };
    }

}
class Light {

}