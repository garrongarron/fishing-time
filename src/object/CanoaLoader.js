import { FBXLoader } from 'https://threejs.org/examples/jsm/loaders/FBXLoader.js'

class CanoaLoader {
    constructor() {
        this.loader = new FBXLoader();
        this.promise = new Promise((res, rej) => {
            this.loader.load('src/object/canoa.2.FBX',
                function(object) {
                    res(object)
                })
        })

    }
    open() {
        if (this.node != null) this.init()
    }
    close() {}
    getObject() {
        return this.promise
    }
}

let canoaLoader = new CanoaLoader()

export default canoaLoader