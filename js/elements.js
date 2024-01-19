const image = document.querySelector('.poster img')
const musicTitle = document.querySelector('.inforMusic h1')
const musicComposer = document.querySelector('.inforMusic h2')
const player = document.querySelector('#player')
const currentTime = document.querySelector('.current')
const durationTime = document.querySelector('.end')
const previousSong = document.querySelector('#previousSong')
const buttonPlay = document.querySelector('#buttonPlay')
const buttonPause = document.querySelector('#buttonPause')
const nextSong = document.querySelector('#nextSong')
const progressBar = document.querySelector('#bar')
const backProgressBar = document.querySelector('.progress')


export {
    image, 
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
}