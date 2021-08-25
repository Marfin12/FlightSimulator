// let audio, scene, camera, cloudParticles = [],composer, airplane, turbulance = 0, manuverRight = false, manuverLeft = false, isInitAudio = true;

const init = () => {
  scene.add(ambientLight, directionalLight, orangeLight, whiteLight, blueLight);

  generatePlane();

  generateCloud();

  document.body.appendChild(renderer.domElement);
  gameLoop();
}

const gameLoop = () => {
  generateCloud(cloud, cloudParticles, camera, scene);
  airplaneControl();

  renderer.render(scene, camera)
  requestAnimationFrame(gameLoop);
}
      
init();
addControlListener();
      