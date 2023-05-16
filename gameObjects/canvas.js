import Player from './Player.js';
import keyHandler from './keyHandler.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let player1 = new Player('red');

document.addEventListener('keydown', event => {
    keyHandler(event, player1);
})
document.addEventListener('keyup', event => {

})
const play = () => {

    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 110, 700, 10);
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height)

    window.requestAnimationFrame(play)
}

window.requestAnimationFrame(play)

play()










