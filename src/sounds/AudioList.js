let audioList = {
    'alcantarilla': 'alcantarilla.mp3',
    'be-killed': 'be-killed.mp3',
    'completed-mission': 'completed-mission.mp3',
    'Impostor-AMONG-US': 'Impostor-AMONG-US.mp3',
    'kill': 'kill.mp3',
    'meeting': 'meeting.mp3',
    'sabotage': 'sabotage.mp3',
}
let folder = 'src/sounds/'
for (let i in audioList) {
    audioList[i] = folder + audioList[i]
}
export default audioList