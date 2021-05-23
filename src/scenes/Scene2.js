import MasterScene from "./MasterScene.js"

class Scene2 extends MasterScene {
    constructor(instancename) {
        super(instancename)
    }
    open() {

    }
    close() {

    }
    click() {
        this.sceneHandler.goTo('scene2')
    }
}

let scene2 = new Scene2('scene2')
export default scene2