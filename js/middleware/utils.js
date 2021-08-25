const flyForward = () => {
    airplane.position.y += 2;
    camera.position.y += 2;
}

const planeManuverLeft = () => {
    if (airplane.rotation.z > -1.5) {
        airplane.rotation.z -= 0.001 + turbulance;
        adjusting();
        if (airplane.rotation.z < -0.25000000000000006) {
            airplane.position.x -= 0.5 + turbulance
            camera.position.x -= 0.5 + turbulance
            airplane.position.z -= 0.05 + turbulance
            camera.position.z -= 0.05 + turbulance
        }
    }
};

const planeManuverRight = () => {
    if (airplane.rotation.z < 0.8) {
        airplane.rotation.z += 0.001 + turbulance;
        adjusting();
        if (airplane.rotation.z > -0.25000000000000006) {
            airplane.position.x += 0.5 + turbulance
            camera.position.x += 0.5 + turbulance
        }
    }
};

const adjusting = () => {
    if (turbulance < 1) {
        turbulance += 0.00001
    }
};

const handleBalancer = () => {
    if (airplane.rotation.z > -0.25000000000000006) {
        airplane.rotation.z -= 0.001 + turbulance
      } else if (airplane.rotation.z < -0.25000000000000006) {
        airplane.rotation.z += 0.001 + turbulance
      }
      if (turbulance > 0.0005 || turbulance < 0.0005) {
        turbulance = 0.0005
      }
};
