class MasterScene {
    constructor(instanceName) {
        this.instanceName = instanceName
        this.sceneHandler = null
    }
    open() { }
    close() { }
    toString() {
        return this.instanceName
    }
    setSceneHandler(sceneHandler) {
        this.sceneHandler = sceneHandler
    }
}

export default MasterScene