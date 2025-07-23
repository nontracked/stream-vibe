const rootSelector = '[data-js-video-player]'

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    playButton: '[data-js-video-player-play-button]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.videoElement = this.rootElement.querySelector(this.selectors.video)
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton)
    this.bindEvents()
  }

  onPlayButtonClick = () => {
    this.videoElement.play()
    this.videoElement.requestFullscreen()
    this.videoElement.controlls = true
    this.playButtonElement.classList.remove(this.stateClasses.isActive)
  }

  onVideoPause = () => {
    this.videoElement.controlls = false
    this.playButtonElement.classList.add(this.stateClasses.isActive)
  }

  onFullScreenChange = () => {
    const isFullScreenEnabled = document.fullscreenElement === this.videoElement

    if (!isFullScreenEnabled) {
      this.videoElement.pause()
    }
  }

  bindEvents() {
    this.playButtonElement.addEventListener('click', this.onPlayButtonClick)
    this.videoElement.addEventListener('click', this.onVideoPause)
    this.videoElement.addEventListener('fullscreenchange', this.onFullScreenChange)
  }
}

export class VideoPlayerCollection {
  constructor() {
    this.init()
  }
  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new VideoPlayer(element)
    })
  }
}

