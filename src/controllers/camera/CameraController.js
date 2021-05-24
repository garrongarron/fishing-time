import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.127/build/three.module.js';
import mouse from '../../basic/Mouse.js'
import machine from '../../basic/Machine.js'
import camera from '../../basic/Camera.js'
import displacementCamController from './DisplacementCamController.js';
import canvas from '../../basic/Canvas.js';


class CameraController {
    constructor() {
        this.interpolation = .99
        this.rotation = 0
        this.gap = 20
        this.rotationWithGap = 0
        this.radio = 10
        this.rotationSpeed = 20
        this.characterHeight = 3
        this.cameraAngle = 3
        this.target = null
        this.callback = null

        this.controller = () => {
            if (this.target) {
                let angleRotation =
                    (mouse.acumulated.x / this.rotationSpeed)
                this.rotation = -(angleRotation) *
                    Math.PI / 180
                this.rotationWithGap = -(angleRotation + this.gap) *
                    Math.PI / 180
                let rotationWithGap2 = -(angleRotation + this.gap / 2) *
                    Math.PI / 180

                let x = this.target.position.x -
                    Math.sin(this.rotation) *
                    this.radio;
                camera.position.x = THREE.MathUtils.lerp(
                    camera.position.x,
                    x,
                    this.interpolation)

                let z = this.target.position.z -
                    Math.cos(this.rotation) * this.radio;
                camera.position.z = THREE.MathUtils.lerp(
                    camera.position.z,
                    z,
                    this.interpolation)

                this.cameraAngle = mouse.acumulated.y / 100

                camera.position.y = this.characterHeight +
                    this.cameraAngle

                let opositeCamPosition = {
                    position: {
                        x: this.target.position.x +
                            Math.sin(this.rotationWithGap) *
                            this.radio,
                        z: this.target.position.z +
                            Math.cos(this.rotationWithGap) *
                            this.radio
                    }
                }
                camera.lookAt(
                        opositeCamPosition.position.x,
                        this.target.position.y - this.cameraAngle,
                        opositeCamPosition.position.z)
                    /* camera.lookAt(
                        this.target.position.x, 
                        this.target.position.y, 
                        this.target.position.z)
                    */
                displacementCamController.run(rotationWithGap2)
            }
        }
    }

    start(t) {
        mouse.setCanvas(canvas)
        mouse.start()
        this.target = t
        displacementCamController.setTarget(t)
        displacementCamController.start()
        machine.addCallback(this.controller)
    }
    stop() {
        mouse.stop()
        machine.removeCallback(this.controller)
        this.target = null
        this.callback = null
    }

    moveCallback(callback) {
        this.callback = callback
    }
}

const cameraController = new CameraController()
export default cameraController