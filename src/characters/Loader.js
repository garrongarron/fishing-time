import { FBXLoader } from 'https://threejs.org/examples/jsm/loaders/FBXLoader.js'


class Loader {
    constructor(name, urlList) {
        let loader = new FBXLoader();
        let promises = []
        let animations = []

        let p1 = new Promise((res, rej) => {
            loader.load(name,
                function(object) {
                    res(object)
                })
        })

        for (let index = 0; index < urlList.length; index++) {
            // if (!urlList.includes(index)) continue
            promises[index] = new Promise((resolve, reject) => {
                loader.load(urlList[index],
                    function(object) {
                        animations[index] = object.animations[0]
                        resolve(index)
                    })
            })
        }

        let p2 = Promise.all(promises)

        this.model = new Promise((res, rej) => {
            Promise.all([p1, p2]).then(data => {
                let object = data[0]
                object.animations = animations;

                res(object)
            })
        })
    }

    getObject() {
        return this.model
    }
}

export default Loader