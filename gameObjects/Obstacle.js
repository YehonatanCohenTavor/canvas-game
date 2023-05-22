export default class Obstacle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.color = 'green';
    }

    move() {
        this.a.x--;
        this.b.x--;
        this.c.x--;
    }
}