export default class Obstacle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.color = 'green';
    }

    move() {
        this.a.x -= 0.8;
        this.b.x -= 0.8;
        this.c.x -= 0.8;
    }
}