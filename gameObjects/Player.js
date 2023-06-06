export default class Player {
    constructor() {
        this.color = 'red';
        this.width = 50;
        this.height = 50;
        this.x = 30;
        this.y = 270;
        this.velocityY = 12;
        this.isJumping = false;
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

