import { Clock3 } from 'lucide-react'
import './episodeCard.scss'

export const EpisodeCard = ({ number, title, desc, duration, video }) => {
  const playButtonTitle = 'Play video'
  return (
    <div className='episode-card'>
      <div className='episode-card__number'>
        {number}
      </div>
      <div className='episode-card__player' data-js-video-player="">
        <video className='' data-js-video-player-video=""
          src={video.src}
          poster={video.poster}
          width={172}
          height={118} />
        <button data-js-video-player-play-button="" type='button'  className='episode-card__play-button is-active' aria-label={playButtonTitle} title={playButtonTitle}>
          <img className='episode-card__play-button-icon' src="./src/assets/icons/play-circle.svg" alt="" width={23} height={23} />
        </button>
      </div>
      <div className='episode-card__body'>
        <div className='episode-card__info'>
          <h4 className='episode-card__title h6'>{title}</h4>
          <div className='episode-card__duration'>
            <Clock3 className='episode-card__play-button-icon' />
            <span className='episode-card__time'>{duration} </span>
          </div>
        </div>
        <div className='episode-card__desc hidden-mobile'>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}