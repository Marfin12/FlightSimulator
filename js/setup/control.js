const audio = '/sound/airplane.wav';
let isInitAudio = true;

const ready = (err,loop) => {
    if (err) {
      console.warn(err);
    }

    loop.play();
};

const addControlListener = () => {
    document.addEventListener('keyup', () => {
        manuverRight = false
        manuverLeft = false
    }, false);

    document.addEventListener('keydown', (event) => {
        if (isInitAudio) {
            loopify(audio, ready);
            isInitAudio = false;
        }
        if (event.code === "KeyD"){
            manuverRight = true;
        } 
        else if (event.code === "KeyA"){
            manuverLeft = true;
        }
    }, false);

    document.body.onmousedown = () => { 
        if (isInitAudio) {
            loopify(audio, ready);
            isInitAudio = false;
        }
    };
};