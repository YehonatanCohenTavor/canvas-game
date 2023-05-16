export default class Player {
    constructor(color) {
        this.color = color;
        this.width = 25;
        this.height = 25;
        this.x = 10;
        this.y = 85;
    }

    jump() {
        this.y -= 1;
    }

    down() {
        this.y += 1;
    }
}

