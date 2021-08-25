  const getSpotLight = (color, posX, posY, posZ) => {
    let spotLight = new THREE.PointLight(color,50,450,1.7);
    spotLight.position.set(posX,posY,posZ);

    return spotLight;
  }

  const getDirectionalLight = (color, posX, posY, posZ) => {
    let directionalLight = new THREE.DirectionalLight(color)
    directionalLight.position.set(posX,posY,posZ);

    return directionalLight;
  }
  const getAmbientLight = (color) => {
    let ambientLight = new THREE.AmbientLight(color);

    return ambientLight;
  }