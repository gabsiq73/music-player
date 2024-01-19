export function Events({
    buttonPlay,
    buttonPause,
    nextSong,
    previousSong,
    playAndPauseMusic,
    prevNextMusic
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
        playAndPauseMusic()
    })

    previousSong.addEventListener('click', () => {
        prevNextMusic("prev")
        playAndPauseMusic()
        
    })
}