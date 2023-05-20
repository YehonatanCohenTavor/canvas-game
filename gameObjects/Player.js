export default class Player {
    constructor(color) {
        this.color = color;
        this.width = 25;
        this.height = 25;
        this.x = 10;
        this.y = 85;
        this.velocityY = 5;
        this.isJumping = false;
    }

    jump() {
        this.y -= this.velocityY;
        this.velocityY -= 1;
    }

    down() {
        this.y *= 1.02;
    }
}

