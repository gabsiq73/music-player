export function Events({
    buttonPlay,
    buttonPause,
    nextSong,
    previousSong,
    playAndPauseMusic,
    prevNextMusic,
    playAndPauseMusicNextPrev,
}){

    buttonPlay.addEventListener('click', () => {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        playAndPauseMusic()
    })

    buttonPause.addEventListener('click', () => {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        playAndPauseMusic()

    })

    nextSong.addEventListener('click', () => {
        prevNextMusic()
        playAndPauseMusicNextPrev()
    })

    previousSong.addEventListener('click', () => {
        prevNextMusic("prev")
        playAndPauseMusicNextPrev()
        
    })
}