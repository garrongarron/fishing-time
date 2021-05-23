import cache from "../basic/Cache.js";
import sound from "../basic/Sound.js";
import sceneList from "../scenes/SceneList.js";

class Menu {
    constructor() {
        this.sceneHandler = null
        this.node = document.createElement('div')
        this.node.classList.add('menu')
        let list = document.createElement('ul')
        let buttons = {
            'Start': () => {
                this.sceneHandler.goTo(sceneList.demo)
                this.close()
            },
            // 'Menu': () => {

            //     console.log('Menu');
            // },
            'Credits': () => {
                let gameDesigner = document.createElement('div')
                gameDesigner.innerHTML = 'Game designer: <b>StrikerZBE</b>'
                gameDesigner.classList.add('gd')
                let developer = document.createElement('div')
                developer.innerHTML = 'Developer: <b>SamuGarronDev</b>'
                developer.classList.add('dev')
                let container = document.createElement('div')
                container.appendChild(gameDesigner)
                container.appendChild(developer)

                document.querySelector('.container').innerHTML = ''
                document.querySelector('.container').appendChild(container)
            },
        }
        Object.keys(buttons).map(key => {
            let li = document.createElement('li')
            li.innerText = key
            li.addEventListener('click', buttons[key])
            li.addEventListener('mouseenter', () => {
                sound.play('kill')
            })
            list.appendChild(li)
        })
        this.node.appendChild(list)
    }
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        document.body.appendChild(this.node)
    }
    close() {
        cache.appendChild(this.node)
    }
}

let menu = new Menu()

export default menu