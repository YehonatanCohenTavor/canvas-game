import Player from './Player.js';
import keyHandler from './keyHandler.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

let player1 = new Player('red');

canvas.addEventListener('mouseover', event => {
    player1.jump();
    raf = window.requestAnimationFrame(play)
})

canvas.addEventListener('mouseout', event => {
    window.cancelAnimationFrame(raf);
})
const play = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 110, 700, 10);
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height)

}

window.requestAnimationFrame(play)

play()










