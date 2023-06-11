export default class Obstacle {
    constructor(ctx, a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.color = 'green';
        this.ctx = ctx;
        this.velocity = 3
    }
    draw() {
        this.ctx.beginPath()
        this.ctx.moveTo(this.a.x, this.a.y);
        this.ctx.lineTo(this.b.x, this.b.y);
        this.ctx.lineTo(this.c.x, this.c.y);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.move();
    }

    move() {
        if (this.b.x < 0) {
            this.a.x = this.ctx.canvas.clientWidth + 20;
            this.b.x = this.ctx.canvas.clientWidth + 40;
            this.c.x = this.ctx.canvas.clientWidth;
        }
        this.a.x -= this.velocity;
        this.b.x -= this.velocity;
        this.c.x -= this.velocity;
    }
}