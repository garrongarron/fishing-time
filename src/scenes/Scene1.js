import renderer from "../basic/Renderer.js"
import machine from "../basic/Machine.js"
import scene from "../basic/Scene.js";
import cube from "../object/Box.js";
import camera from "../basic/Camera.js";
import MasterScene from "./MasterScene.js";
import directionalLight, { ambientLight, hemiLight } from "../basic/Light.js";
import resize from "../basic/Resize.js";
import warrior from "../models/Warrior.js";
import characterController from "../controller/CharacterController.js";
import keyListener from "../basic/KeyListener.js";

class Scene1 extends MasterScene {
    constructor(instancename) {
        super(instancename)
    }
    open() {
        machine.addCallback(() => {
            renderer.render(scene, camera);
            cube.rotation.y += 0.1
        })
        machine.on()
        resize.open(renderer)
        scene.add(directionalLight)
        scene.add(ambientLight)
        scene.add(hemiLight)
        scene.add(cube)
        cube.position.y = -0.05
            // camera.lookAt(cube.position)
        warrior.getObject().then(mesh => {
            scene.add(mesh)
            characterController.setMesh(mesh)
            characterController.start()
        })
        keyListener.start()
    }
    close() {
        characterController.stop()
    }
    click() {
        this.sceneHandler.goTo('scene2')
    }
}

let scene1 = new Scene1('scene1')
export default scene1