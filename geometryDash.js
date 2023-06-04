import Player from './gameObjects/Player.js';
import Obstacle from './gameObjects/Obstacle.js';
import backgroundParticle from './gameObjects/backgroundParticle.js';

export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

let player1 = new Player('red');
let obstacle1 = new Obstacle(
    { x: canvas.width - 20, y: canvas.height - 125 },
    { x: canvas.width, y: canvas.height - 80 },
    { x: canvas.width - 40, y: canvas.height - 80 }
)

document.addEventListener('keydown', event => {
    player1.isJumping = true;
})

const moveObstacles = () => {
    obstacle1.move();
}

const detectCollision = (player, obstacle) => {
    if (player.x + player.width >= obstacle.c.x
        &&
        player.y + player.height <= 110 && player.y + player.height >= obstacle.a.y) {
        console.log('Game Over!')
        return true;
    }
}


const play = (time) => {

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fill();

    const particle1 = new backgroundParticle(ctx, canvas.width - 100, canvas.height / 2)
    particle1.draw()

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, canvas.height - 80, canvas.width, 30);

    if (player1.isJumping) {
        // Perform the jump animation
        player1.jump()
        // requestAnimationFrame(play)
    } else if (player1.velocityY < 12) {
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
    if (detectCollision(player1, obstacle1)) {
        return cancelAnimationFrame(play);
    } else {
        requestAnimationFrame(play)
    }

}

play()







