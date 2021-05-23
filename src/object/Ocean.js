import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.127/build/three.module.js';

const boxWidth = 100;
const boxHeight = .1;
const boxDepth = 100;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshPhongMaterial({ color: 0x336BFF });

const ocean = new THREE.Mesh(geometry, material);
ocean.position.y = -.5

export default ocean