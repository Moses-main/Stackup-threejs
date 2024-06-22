import * as THREE from "three";

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff); // Set a white background color
document.getElementById("app").appendChild(renderer.domElement);

// Create a geometry (a cube in this case)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // Light green color
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a point light
const pointLight = new THREE.PointLight(0xffffff, 1.5); // Increase intensity
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Create an ambient light
const ambientLight = new THREE.AmbientLight(0x404040, 9.2); // Increase intensity
scene.add(ambientLight);

// Animation function
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();
