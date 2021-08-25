// let audio, scene, camera, cloudParticles = [],composer, airplane, velocity = 0, manuverRight = false, manuverLeft = false, isInitAudio = true;

//       function init() {

//         audio = new Audio('airplane.wav');
//         audio.loop = true;
//         scene = new THREE.Scene();
//         camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
//         camera.position.z = 1;
//         camera.rotation.x = 1.16;
//         camera.rotation.y = -0.12;
//         camera.rotation.z = 0.27;

//         let ambient = new THREE.AmbientLight(0x555555);
//         scene.add(ambient);

//         let directionalLight = new THREE.DirectionalLight(0xff8c19);
//         directionalLight.position.set(0,0,1);
//         scene.add(directionalLight);

//         let orangeLight = new THREE.PointLight(0xcc6600,50,450,1.7);
//         orangeLight.position.set(200,300,100);
//         scene.add(orangeLight);
//         let redLight = new THREE.PointLight(0xffffff,50,450,1.7);
//         redLight.position.set(100,300,100);
//         scene.add(redLight);
//         let blueLight = new THREE.PointLight(0x3677ac,50,450,1.7);
//         blueLight.position.set(300,300,200);
//         scene.add(blueLight);

//         renderer = new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth,window.innerHeight);
//         scene.fog = new THREE.FogExp2(0x021940, 0.001);
//         renderer.setClearColor(scene.fog.color);
//         document.body.appendChild(renderer.domElement);

//         let loader = new THREE.TextureLoader();
//         loadCloud(loader);
//         let loader1 = new THREE.GLTFLoader();
//   loader1.load( "scene.gltf",
//     (gltf) => {
//       airplane = gltf.scene;
//       airplane.position.y = 215;
//       airplane.position.z = -160;
//       airplane.position.x = 33.50000000000012;
//       airplane.rotation.x = 45;
//       airplane.rotation.y = 109.85000000000001;
//       airplane.rotation.z = -0.25000000000000006;
//       airplane.scale.set(25, 25, 25);
//       scene.add(airplane);
//     }
//   );
//         render();
//       }

//       function loadCloud(loader) {
//         loader.load("smoke.png", function(texture){
//           cloudGeo = new THREE.PlaneBufferGeometry(500,500);
//           cloudMaterial = new THREE.MeshLambertMaterial({
//             map:texture,
//             transparent: true
//           });

//           for(let p=0; p<20; p++) {
//             let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
//             cloud.position.set(
//               (Math.random()*800 -400),
//               (Math.random()*800 -400) + (camera.position.y + 1000),
//               (Math.random()*500-500),
//             );
//             cloud.rotation.x = 1.16;
//             cloud.rotation.y = -0.12;
//             cloud.rotation.z = Math.random()*2*Math.PI;
//             cloud.material.opacity = 0.55;
//             cloudParticles.push(cloud);
//             scene.add(cloud);
//           }
//         });
//       }

//       function ready(err,loop){

//         if (err) {
//           console.warn(err);
//         }
//         loop.play();
//       }

//       function onWindowResize() {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//       }
//       function render() {
//         cloudParticles.forEach(p => {
//           p.rotation.z -=0.001;
//         });
//         if (airplane !== undefined) {
//           // document.getElementById("labelC").innerHTML = airplane.rotation.z
//           airplane.position.y += 1;
//           camera.position.y += 1;
//           if (manuverRight) {
//             if (airplane.rotation.z < 0.8) {
//             if (velocity < 1) {
//               velocity += 0.00001
//             }
//             airplane.rotation.z += 0.001 + velocity  
//             if (airplane.rotation.z > -0.25000000000000006) {
//               airplane.position.x += 0.5 + velocity
//               camera.position.x += 0.5 + velocity
//             }
//           }
//         }
//           else if (manuverLeft) {
//             if (airplane.rotation.z > -1.5) {
//             if (velocity < 1) {
//               velocity += 0.00001
//             }
//             airplane.rotation.z -= 0.001 + velocity 
//             if (airplane.rotation.z < -0.25000000000000006) {
//               airplane.position.x -= 0.5 + velocity
//               camera.position.x -= 0.5 + velocity
//               airplane.position.z -= 0.05 + velocity
//               camera.position.z -= 0.05 + velocity
//             }
//           }
//           } 
//           else {
//             if (airplane.rotation.z > -0.25000000000000006) {
//               airplane.rotation.z -= 0.001 + velocity
//             } else if (airplane.rotation.z < -0.25000000000000006) {
//               airplane.rotation.z += 0.001 + velocity
//             }
//             if (velocity > 0.0005 || velocity < 0.0005) {
//               velocity = 0.0005
//             }
//           }
//         }
//         if (camera.position.y >= 1200 && camera.position.y % 1200 == 0) {
//           let loader = new THREE.TextureLoader();
//           loadCloud(loader);
//         }
//         renderer.render(scene, camera)
//         requestAnimationFrame(render);
//         /* airplane.position.y += 1
//         camera.position.y += 1; */
//       }
      
//       init();
//       document.addEventListener('keyup', (event) => {
//         manuverRight = false
//         manuverLeft = false
//       }, false);
//       document.addEventListener('keydown', (event) => {
//         if (isInitAudio) {
//           loopify("airplane.wav",ready);
//           isInitAudio = false;
//         }
//         if (event.code === "KeyD"){
//             manuverRight = true;
//         } else if (event.code === "KeyA"){
//             manuverLeft = true;
//         }
//       }, false);
//       document.body.onmousedown = function() { 
//         if (isInitAudio) {
//           loopify("airplane.wav",ready);
//           isInitAudio = false;
//         }
//       }