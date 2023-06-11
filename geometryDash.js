import Player from './gameObjects/Player.js';
import Obstacle from './gameObjects/Obstacle.js';
import backgroundParticle from './gameObjects/backgroundParticle.js';
import keyHandler from './keyHandler.js';

export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

let score = 0;
let player1 = new Player(ctx);
let obstacle1 = new Obstacle(
    ctx,
    { x: canvas.width - 20, y: canvas.height - 125 },
    { x: canvas.width, y: canvas.height - 80 },
    { x: canvas.width - 40, y: canvas.height - 80 }
)
const particles = []
for (let i = 0; i <= 15; i++) {
    particles[i] = new backgroundParticle(ctx, canvas.width + Math.random() * 800, Math.random() * canvas.height)
}

document.addEventListener('keydown', event => {
    keyHandler(event, player1)
})

const detectCollision = (player, obstacle) => {
    for (let i = 0; i <= player1.width; i++) {
        if (player.x + i > obstacle.c.x && player.x + i < obstacle.b.x
            &&
            player.y + i < canvas.height - 80 && player.y + i > obstacle.a.y) {
            console.log('Game Over!')
            return true;
        }
    }
}


const draw = (time) => {
    //Clear canvas
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fill();

    score = Math.floor(time / 100)

    ctx.font = "18px Ariel";
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${score}`, canvas.width - 90, 30)

    //Draw game objects.
    for (let i = 0; i <= 15; i++) {
        particles[i].draw();
    }
    player1.draw()
    obstacle1.draw();
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, canvas.height - 80, canvas.width, 30);

    // Perform the jump animation
    if (player1.isJumping) {
        player1.jump()
    } else if (player1.velocityY < 12) {
        player1.down()
    }

    //Collision
    if (detectCollision(player1, obstacle1)) {
        return cancelAnimationFrame(draw);
    } else {
        requestAnimationFrame(draw)
    }
}

draw()







