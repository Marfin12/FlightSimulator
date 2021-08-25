let isGameStart = true;

const generateCloud = () => {
    cloudParticles.forEach(p => {
        p.rotation.z -=0.001;
    });
    // console.log(cloudParticles);

    if (isGameStart) {
        addCloud(cloud, cloudParticles, camera, scene);
        isGameStart = false;
    } 
    else if (camera.position.y >= 1200 && camera.position.y % 1200 == 0) {
        addCloud(camera, scene);
    }
}

const generatePlane = () => {
    addPlane();
}

const airplaneControl = () => {
    if (airplane !== undefined) {
      flyForward();
      if (manuverRight) {
        planeManuverRight();
      } 
      else if (manuverLeft) {
        planeManuverLeft();
      } 
      else {
        handleBalancer();
      }
    }
}

const onWindowResize = (renderer) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
