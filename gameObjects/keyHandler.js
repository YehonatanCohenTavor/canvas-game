function keyHandler(event, gameObject) {
    switch (event.key) {
        case " ":
            gameObject.jump();
            break;
        default:
            console.log(event.key)
    }
}

export default keyHandler;