import Player from './gameObjects/Player.js';
import keyHandler from './keyHandler.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let player1 = new Player('red');

let raf;

canvas.addEventListener('mouseover', event => {
    raf = window.requestAnimationFrame(play)
})
canvas.addEventListener('mouseout', event => {

})

const play = (time) => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 110, 700, 10);
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height)

    player1.jump()

    raf = window.requestAnimationFrame(play)

}











