export default class backgroundParticle {
    constructor(ctx, x, y) {
        this.radius = 2;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white'
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.ctx.fill();
        this.move()
    }

    move() {
        if (this.x < 0) this.x = this.ctx.canvas.clientWidth + Math.random() * 100;
        this.x -= 6;
    }
}