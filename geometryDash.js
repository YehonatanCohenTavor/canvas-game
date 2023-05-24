import Player from './gameObjects/Player.js';
import Obstacle from './gameObjects/Obstacle.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let player1 = new Player('red');
let obstacle1 = new Obstacle({ x: canvas.width - 10, y: 90 }, { x: canvas.width, y: 110 }, { x: canvas.width - 20, y: 110 })

document.addEventListener('keydown', event => {
    player1.isJumping = true;
})

const moveObstacles = () => {
    obstacle1.move();
}

const detectCollision = (player, obstacle) => {
    if (player.x + player.width === obstacle.a.x || player.x + player.width === obstacle.c.x) {
        console.log('Game Over!')
        return true;
    }
}


const play = (time) => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 110, 700, 10);

    if (player1.isJumping) {
        // Perform the jump animation
        player1.jump()
        // requestAnimationFrame(play)
    } else if (player1.velocityY < 8) {
        player1.down()
        // requestAnimationFrame(play)
    }

    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height)

    ctx.beginPath()
    ctx.moveTo(obstacle1.a.x, obstacle1.a.y);
    ctx.lineTo(obstacle1.b.x, obstacle1.b.y);
    ctx.lineTo(obstacle1.c.x, obstacle1.c.y);
    ctx.fillStyle = 'green';
    ctx.fill();

    moveObstacles()
    if (detectCollision(player1, obstacle1)) return;
    requestAnimationFrame(play)
}
play()







