import SceneHandler from './scenes/SceneHandler.js';
import sceneList from './scenes/SceneList.js';
import menu from './UI/Menu.js';

let scenehandler = new SceneHandler(sceneList)

// console.log(sceneList.scene1);
scenehandler.goTo(sceneList.landing)
menu.open(scenehandler)