import '../scss/styles.scss'

const elemRoot = document.getElementById('root')

const video = document.querySelector('#video')
const button = document.querySelector("#btn-play")

document.querySelector('.fa-pause').style.display = 'none'

const play = (event) => {
    if (video.paused) {
        document.querySelector('.fa-pause').style.display = 'block'
        document.querySelector('.fa-play').style.display = 'none'
        video.play()
    } else {
        document.querySelector('.fa-pause').style.display = 'none'
        document.querySelector('.fa-play').style.display = 'block'
        video.pause()
    }
}

button.addEventListener('click', (event) => {
    play(event)
})

video.addEventListener('click', (event) => {
    play(event)
})

video.addEventListener('timeupdate', () => {
    let current = (video.currentTime / video.duration) * 100
    if (video.ended) {
        document.querySelector('.fa-pause').style.display = 'none'
        document.querySelector('.fa-play').style.display = 'block'
    }
    document.querySelector('.inner').style.width = `${current}%`
})