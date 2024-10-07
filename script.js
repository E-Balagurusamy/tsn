// GSAP animation for text fading effect
let phrases = ["Building intelligent bots...", "Enhancing digital security...", "Leading AI innovation..."];
let phraseIndex = 0;
let textElement = document.querySelector('.changing-text');

function changeText() {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = phrases[phraseIndex];
        textElement.style.opacity = 1;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }, 500);
}

setInterval(changeText, 3000);

// Three.js Earth model
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("earthCanvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/earthmap.jpg')
});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

camera.position.z = 2;

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.001;
    renderer.render(scene, camera);
}

animate();
