function keyHandler(event, gameObject) {
    switch (event.code) {
        case 'Space':
            gameObject.jump();
            console.log(event.code)
            break;
        default:
            console.log(event.code)
            break;
    }
}

export default keyHandler;