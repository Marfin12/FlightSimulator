const addCloud = () => {
    let loader = new THREE.TextureLoader();
    loader.load("/asset/smoke.png", texture => {
    cloudGeo = new THREE.PlaneBufferGeometry(500,500);
      cloudMaterial = new THREE.MeshLambertMaterial({
        map:texture,
        transparent: true
      });

    for(let p=0; p<20; p++) {
        cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
          (Math.random()*800 -400),
          (Math.random()*800 -400) + (camera.position.y + 1000),
          (Math.random()*500-500),
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random()*2*Math.PI;
        cloud.material.opacity = 0.55;
        cloudParticles.push(cloud);
        scene.add(cloud);
    }         
});
}

const addPlane = () => {
    let loader = new THREE.GLTFLoader();
    loader.load("/asset/scene.gltf", model => {
        airplane = model.scene;
        airplane.position.y = 215;
        airplane.position.z = -160;
        airplane.position.x = 33.50000000000012;
        airplane.rotation.x = 45;
        airplane.rotation.y = 109.85000000000001;
        airplane.rotation.z = -0.25000000000000006;
        airplane.scale.set(25, 25, 25);

        scene.add(airplane);
    });
}


