import machine from './Machine.js'
import { Clock } from 'https://cdn.jsdelivr.net/npm/three@0.127/build/three.module.js';
let clock = new Clock();
let n = 0
machine.addCallback(() => {
    n = clock.getDelta();
    clock.delta = n
})

let getDelta = () => {
    return n
}

export { clock, getDelta }