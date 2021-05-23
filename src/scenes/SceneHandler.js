class SceneHandler {
    constructor(sceneList) {
        this.prev = null
        this.sceneList = sceneList
    }
    goTo(sceneName) {
        // console.log(sceneName);
        if (this.prev != null) {
            this.prev.close()
        }
        console.log(sceneName);
        this.sceneList[sceneName].open()
        this.prev = this.sceneList[sceneName]
        this.prev.setSceneHandler(this)
    }
}
export default SceneHandler