export default class backgroundParticle {
    constructor(ctx, x, y) {
        this.radius = 5;
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = 'black'
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill()
    }
}