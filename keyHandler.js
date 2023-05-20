function keyHandler(event, gameObject) {
    switch (event.code) {
        case 'Space':
            gameObject.jump();
            break;
        default:
            console.log(event.key)
    }
}

export default keyHandler;