export default class Player {
    constructor(ctx) {
        this.color = 'red';
        this.width = 50;
        this.height = 50;
        this.x = 30;
        this.y = 270;
        this.velocityY = 12;
        this.isJumping = false;
        this.rotationSpeed = 5;
        this.ctx = ctx
    }

    draw() {
        this.ctx.fillStyle = this.color;
        // this.ctx.rotate(this.rotationSpeed)
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        if (this.x > 30 && !this.isJumping) this.x -= 2
    }

    jump() {
        this.y -= this.velocityY;
        this.x += 2;
        this.velocityY -= 0.5;
        if (this.velocityY === 0) this.isJumping = false;
    }

    down() {
        this.y += this.velocityY;
        this.x += 2;
        this.velocityY += 0.5;
        if (this.velocityY === 12) this.y += this.velocityY
    }
}

