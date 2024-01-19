import {image, 
    musicTitle, 
    musicComposer,
    player, 
    currentTime, 
    durationTime, 
    previousSong, 
    buttonPlay, 
    buttonPause,
    nextSong, 
    progressBar, 
    backProgressBar,
} from './elements.js'
import { Playlist } from './playlist.js'
import { Events } from './events.js'
import { MusicControls } from './musicControls.js'

const playlist = Playlist()

const musicControls = MusicControls({
    player,
    image,
    playlist,
    musicTitle,
    musicComposer,
    progressBar,
    backProgressBar,
    currentTime, 
    durationTime,
    buttonPlay, 
})

Events({
    buttonPlay,
    buttonPause,
    nextSong,
    previousSong,
    playAndPauseMusic: musicControls.playAndPauseMusic,
    prevNextMusic: musicControls.prevNextMusic,
    playAndPauseMusicNextPrev: musicControls.playAndPauseMusicNextPrev,
})

musicControls.prevNextMusic("init")