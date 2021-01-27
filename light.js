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
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.height =300;

        const gradientStartY = cm.canvasHeight - (this.height + 
            (cm.canvasHeight -this.y));
        this.gradient = cm.context.createLinearGradient(
            0, gradientStartY, 0, this.y
        );

       // this.gradient.addColorStop(0.0,  'rgba(${cm.colors[this.index]}, 0.0)');   
       // this.gradient.addColorStop(0.5,  'rgba(${cm.colors[index]}, 0.5)');   
       // this.gradient.addColorStop(0.75,  'rgba(${cm.colors[index]}, 0.75)');   
       // this.gradient.addColorStop(1.0,  'rgba(${cm.colors[index]}, 1.0)');  
        
       //console.log(index);
        
       if(index == 0) {
           this.gradient.addColorStop(0.0,  'rgba(255, 160, 150, 0.0)');   
           this.gradient.addColorStop(0.5,  'rgba(255, 160, 150, 0.5)');   
           this.gradient.addColorStop(0.75, 'rgba(255, 160, 150, 0.8)');   
            
       }
       else if(index == 1) {
           this.gradient.addColorStop(0.0,  'rgba(255, 200, 120, 0.0)');   
           this.gradient.addColorStop(0.5,  'rgba(255, 200, 120, 0.5)');   
           this.gradient.addColorStop(0.75, 'rgba(255, 200, 120, 0.8)');                      
       } 
       else if(index == 2) {
           this.gradient.addColorStop(0.0,  'rgba(255, 250, 180, 0.0)');   
           this.gradient.addColorStop(0.5,  'rgba(255, 250, 180, 0.5)');   
           this.gradient.addColorStop(0.75, 'rgba(255, 250, 180, 0.8)');   
                       
       }     
       
       else if(index == 3) {
           this.gradient.addColorStop(0.0,  'rgba(200, 220, 255, 0.0)');   
           this.gradient.addColorStop(0.5,  'rgba(200, 220, 255, 0.5)');   
           this.gradient.addColorStop(0.75, 'rgba(200, 220, 255, 0.8)');   
                       
       }     

       else if(index == 4) {
           this.gradient.addColorStop(0.0,  'rgba(239, 173, 255, 0.0)');   
           this.gradient.addColorStop(0.5,  'rgba(239, 173, 255, 0.5)');   
           this.gradient.addColorStop(0.75, 'rgba(239, 173, 255, 0.8)');   
                        
       }     
        
        const numberOfParticles = 30;
        this.particles = [];
        for (let i =0; i<numberOfParticles; i++) {
            this.particles.push(
                new Particle(this.x, this.y)
            );        
        }

    }
    draw(){
        cm.context.fillStyle = this.gradient;  // 적시 안해도 됨
        cm.context.strokeStyle = this.gradient;
        cm.context.beginPath();
        cm.context.moveTo(this.x, this.y);
        cm.context.lineTo(this.x, this.y - this.height);
        cm.context.stroke();

        let particle;
        for (let i = 0; i < this.particles.length; i++) {
            particle = this.particles[i];
            particle.y -= particle.speed;
            if (particle.y < this.y- this.height) {
                particle.y = this.y;
            }
            particle.draw();
        }
    }
}    


class Light {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        //this.index = index;
        this.width = 20;
        this.height = 300;
        this.angle =0;

        const numberOfLine = 5;
        this.lines = [];
        for (let i = 0; i < numberOfLine; i++) {
            this.lines.push(
                new Line(index, this.x + (Math.random()*this.width - this.width*0.5), this.y)
            );
        }  
        
        this.gradient = cm.context.createLinearGradient(
            0, cm.canvasHeight - (this.height + (cm.canvasHeight - this.y)),
            0, this.y);
        
       // this.gradient.addColorStop(0.0,  'rgba(${cm.colors[this.index]}, 0.0)');   
       // this.gradient.addColorStop(0.5,  'rgba(${cm.colors[index]}, 0.5)');   
       // this.gradient.addColorStop(0.75,  'rgba(${cm.colors[index]}, 0.75)');   
       // this.gradient.addColorStop(1.0,  'rgba(${cm.colors[index]}, 1.0)');  
        
        console.log(index);
        
        if(index == 0) {
            this.gradient.addColorStop(0.0,  'rgba(222, 35, 18, 0.0)');   
            this.gradient.addColorStop(0.5,  'rgba(222, 35, 18, 0.5)');   
            this.gradient.addColorStop(0.75,  'rgba(222, 35, 18, 0.75)');   
            this.gradient.addColorStop(1.0,  'rgba(222, 35, 18, 1.0)');  
        }
        else if(index == 1) {
            this.gradient.addColorStop(0.0,  'rgba(238, 150, 63, 0.0)');   
            this.gradient.addColorStop(0.5,  'rgba(238, 150, 63, 0.5)');   
            this.gradient.addColorStop(0.75,  'rgba(238, 150, 63, 0.75)');   
            this.gradient.addColorStop(1.0,  'rgba(238, 150, 63, 1.0)');               
        } 
        else if(index == 2) {
            this.gradient.addColorStop(0.0,  'rgba(255, 228, 0, 0.0)');   
            this.gradient.addColorStop(0.5,  'rgba(255, 228, 0, 0.5)');   
            this.gradient.addColorStop(0.75,  'rgba(255, 228, 0, 0.75)');   
            this.gradient.addColorStop(1.0,  'rgba(255, 228, 0, 1.0)');               
        }     
        
        else if(index == 3) {
            this.gradient.addColorStop(0.0,  'rgba(63, 145, 255, 0.0)');   
            this.gradient.addColorStop(0.5,  'rgba(63, 145, 255, 0.5)');   
            this.gradient.addColorStop(0.75,  'rgba(63, 145, 255, 0.75)');   
            this.gradient.addColorStop(1.0,  'rgba(63, 145, 255, 1.0)');               
        }     

        else if(index == 4) {
            this.gradient.addColorStop(0.0,  'rgba(185, 22, 226, 0.0)');   
            this.gradient.addColorStop(0.5,  'rgba(185, 22, 226, 0.5)');   
            this.gradient.addColorStop(0.75,  'rgba(185, 22, 226, 0.75)');   
            this.gradient.addColorStop(1.0,  'rgba(185, 22, 226, 1.0)');               
        }     
    }

    draw() {
        cm.context.fillStyle = this.gradient;
        
        cm.context.save();  //blur를 저장하고 restore()에서 복원
        cm.context.filter = 'blur(20px)'; //퍼져 보이게
        cm.context.beginPath();
        cm.context.ellipse(
            this.x,
            this.y,
            this.width*2 + Math.abs(Math.sin(this.angle * Math.PI/180*30))*5,
            this.width*0.5 + Math.abs(Math.sin(this.angle * Math.PI/180*30))*5,
            0, 0, Math.PI*2
        );
        cm.context.fill();
        
        cm.context.filter = 'blur(5px)';
        cm.context.beginPath();
        cm.context.ellipse(
            this.x,
            this.y,
            this.width + Math.abs(Math.sin(this.angle * Math.PI/180*30))*2,
            this.width*0.25 + Math.abs(Math.sin(this.angle * Math.PI/180*30))*2,
            0, 0, Math.PI*2
        )
        cm.context.fill();
        this.angle++;

        cm.context.fillRect(
            this.x - this.width*0.5,
            cm.canvasHeight - (this.height + (cm.canvasHeight - this.y)),
            this.width, this.height
        );

        cm.context.restore();   // line은 blur전으로 복원
        
        let line;
        for (let i = 0; i < this.lines.length; i++) {
            line = this.lines[i];
            line.draw();       
        
        }
    }

}