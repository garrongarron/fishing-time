import renderer from "../basic/Renderer.js"
import machine from "../basic/Machine.js"
import scene from "../basic/Scene.js";
import cube from "../object/Box.js";
import ocean from "../object/Ocean.js";
import camera from "../basic/Camera.js";
import MasterScene from "./MasterScene.js";
import directionalLight, { ambientLight, hemiLight } from "../basic/Light.js";
import resize from "../basic/Resize.js";
import remy from "../characters/Fisher/Remy.js";
// import warrior from "../models/Warrior.js";
import characterController from "../controllers/CharacterController.js"
// import keyListener from "../basic/KeyListener.js";

class Demo extends MasterScene {
    constructor(instancename) {
        super(instancename)
        this.callback = () => {
            renderer.render(scene, camera);
            // cube.rotation.y += 0.1
        }
    }
    open() {
        machine.addCallback(this.callback);
        machine.on();
        resize.open(renderer)
        scene.add(directionalLight)
        scene.add(ambientLight)
        scene.add(hemiLight)
        scene.add(cube)
        scene.add(ocean)
            // cube.position.y = -0.05
            //     // camera.lookAt(cube.position)
        remy.getObject().then(mesh => {
            mesh.position.set(0, 0, 0)
            mesh.rotation.y = Math.PI
            let s = 0.005
            mesh.scale.set(s, s, s)
            scene.add(mesh);
            console.log(mesh);
            characterController.setMesh(mesh)
            characterController.start()
        });
        // keyListener.start()
    }
    close() {
        // characterController.stop()
        machine.removeCallback(this.callback);
        machine.off();
        resize.close()
        scene.remove(directionalLight)
        scene.remove(ambientLight)
        scene.remove(hemiLight)
        scene.remove(cube)
    }
    click() {
        // this.sceneHandler.goTo('scene2')
    }
}

let demo = new Demo('demo')
export default demo