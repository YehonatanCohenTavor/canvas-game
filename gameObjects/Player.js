export default class Player {
    constructor(color) {
        this.color = color;
        this.width = 25;
        this.height = 25;
        this.x = 10;
        this.y = 85;
        this.velocityY = 8;
        this.isJumping = false;
    }

    jump() {
        this.y -= this.velocityY;
        this.x++;
        this.velocityY -= 0.5;
        if (this.velocityY === 0) this.isJumping = false;
    }

    down() {
        this.y += this.velocityY;
        this.x++;
        this.velocityY += 0.5;
        if (this.velocityY === 8) this.y += this.velocityY
    }
}

