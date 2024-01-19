export function MusicControls({
    player,
    image,
    playlist,
    musicTitle,
    musicComposer,
    progressBar,
    backProgressBar,
    currentTime, 
    durationTime 
}) {

    let currentMusic = 0;

    function playAndPauseMusic(){
        if(player.paused){
            player.play()
        } else{
            player.pause();
        }
    }

    function uptadeMusic(currentMusic){
        image.src = playlist[currentMusic].poster;
        image.alt += playlist[currentMusic].title;
        musicTitle.innerText = `${playlist[currentMusic].title}`;
        musicComposer.innerText = `${playlist[currentMusic].composer}`;
        player.src = playlist[currentMusic].path
    }


    const prevNextMusic = (type = "next") => {
        if((type = "next" && currentMusic + 1 === playlist.length) || type === "init"){
            currentMusic = 0
        } else if(type = "prev" && currentMusic === 0) {
            currentMusic = playlist.length -1        
        } else {
            currentMusic = type === 'prev' && currentMusic? currentMusic - 1 : currentMusic + 1}
        uptadeMusic(currentMusic) 
        uptadeTime()   
    }

    player.ontimeupdate = () => uptadeTime ();

    function uptadeTime(){
        
        const formatZero = (n) => (n < 10 ? "0" + n : n)

        const currentMinutes = Math.floor(player.currentTime / 60);
        const currentSeconds = Math.floor(player.currentTime % 60);

        currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

        const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
        const durationMinutes = Math.floor(durationFormatted / 60);
        const durationSeconds = Math.floor(durationFormatted % 60);

        durationTime.textContent = durationMinutes + ":" + formatZero(durationSeconds);

        const progressWidth = durationFormatted ? (player.currentTime / durationFormatted) * 100 : 0

        progressBar.style.width = progressWidth + "%"
    }

    backProgressBar.onclick = (e) => {
        const newTime = (e.offsetX / backProgressBar.offsetWidth) * player.duration;
        player.currentTime = newTime
    }

    return {
        uptadeTime,
        prevNextMusic,
        uptadeMusic,
        playAndPauseMusic,
    }
}
