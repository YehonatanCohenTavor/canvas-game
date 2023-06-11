function keyHandler(event, gameObject) {
    switch (event.code) {
        case 'Space':
            if (gameObject.y < 270) {
                console.log(gameObject.y)
                break;
            } else {
                gameObject.isJumping = true;
            }
            break;
        default:
            console.log(event.code)
            break;
    }
}

export default keyHandler;