window.onload = function(){
    var canvas = document.getElementById('space');
    var ctx = canvas.getContext('2d');
    var stars = [];
    var shootingStars = [];

    for (var i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random()*canvas.Height,
            radius: Math.random() * 1.5,
        });
    }

function shootingStars(){
    this.x=Math.random() * canvas.width;
    this.y=Math.random() * canvas.height / 2;
    this.vx= Math.random() * 4 + 2;
    this.vy= Math.random()* 2 + 1;
    this.length = Math.random() * 80 + 50;
    this.alpha = 1;

    this.update = function() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.02;
    }

    this.draw = function(){
        ctx.strokeStyle = 'rgba(255, 255, 255,' + this.alpha + ')';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length * this.vx, this.y - this.length * this.vy); ctx.stroke();
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    stars.forEach(function(stars){
        ctx.beginPath();
        ctx.arc(stars.x, stars.y, stars.radius, 0, Math.pi * 2);
        ctx.fill();
    });

        if (Math.random() < 0.02){
            shootingStars.forEach(function(shootingStar, index) { 
                shootingStar.draw();
             shootingStar.update(); 
                if (shootingStar.alpha <= 0) 
                    { shootingStars.splice(index, 1);
            }
        });
        requestAnimationFrame(animate);
        }

        animate();
    }
}
