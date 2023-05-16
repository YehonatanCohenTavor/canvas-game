import Player from './Player.js';

let player1 = new Player('red');

const play = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 110, 700, 10);
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height)
    canvas.addEventListener('mouseover', event => {
        if (player1.y <= 0) return;
        player1.down();
    })
    canvas.addEventListener('mouseout', event => {
        if (player1.y >= canvas.height - player1.height) {
            console.log(player1.y)
            return
        };
        player1.jump();
    })

    window.requestAnimationFrame(play)
}

window.requestAnimationFrame(play)

play()










