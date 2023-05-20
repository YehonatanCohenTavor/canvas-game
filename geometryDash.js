import Player from './gameObjects/Player.js';
import keyHandler from './keyHandler.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let player1 = new Player('red');

document.addEventListener('keydown', event => {
    player1.isJumping = true;
    keyHandler(event, player1)
    window.requestAnimationFrame(play)
})


const play = (time) => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 110, 700, 10);
    ctx.fillStyle = player1.color;

    if (player1.isJumping) {
        // Perform the jump animation
        player1.jump();

        // Check if the jump animation is complete
        if (player1.velocityY <= 0) {
            player1.isJumping = false;
            player1.velocityY = 5;
        }

    }

    ctx.fillRect(player1.x, player1.y, player1.width, player1.height)

    window.requestAnimationFrame(play)

}


play()








