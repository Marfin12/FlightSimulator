let scene = new THREE.Scene();

let camera = getCamera();
let renderer = getRenderer();

let ambientLight = getAmbientLight(0x555555);
let directionalLight = getDirectionalLight(0xff8c19, 0, 0, 1);
let orangeLight = getSpotLight(0xcc6600, 200, 300, 100);
let whiteLight = getSpotLight(0xffffff, 100, 300, 100);
let blueLight = getSpotLight(0x3677ac, 300, 300, 200);

let airplane, cloud;
let turbulance = 0;
let cloudParticles = [];
let manuverRight = false
let manuverLeft = false