const getCamera = () => {
    let camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);

    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;
    
    return camera;
}

const getRenderer = () => {
    let renderer = new THREE.WebGLRenderer();
    scene.fog = new THREE.FogExp2(0x021940, 0.001);

    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setClearColor(scene.fog.color);

    return renderer;
}