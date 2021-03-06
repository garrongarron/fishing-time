import { PerspectiveCamera } from 'https://cdn.jsdelivr.net/npm/three@0.127/build/three.module.js';

const fov = 40;
const aspect = screen.width / screen.height; //1920 / 1080;
const near = .1;
const far = 1000.0;

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 2, 5);
camera.lookAt(0, 1, 0);

export default camera