import Button from '@/components/Button'
import './hero.scss'
import { ChevronRight } from 'lucide-react'

export const Hero = () => {
  const titleId = "hero-title"
  const playButtonTitle = "Play Video"
  return (
    <section className="hero section" aria-labelledby={titleId}>
      <div className="hero__panno">
        <div className="hero__panno-inner container">
          <button
            className="hero__play-button"
            type="button"
            aria-label={playButtonTitle}
            title={playButtonTitle}>
            <img className="hero__play-button-image" src="/play.svg" alt=""
              width="470" height="470" />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <div className="hero__body-inner-info">
            <h1 className="hero__title" id={titleId}>
              The Best Streaming Experience
            </h1>
            <div className="hero__desc">
              <p className="hide-tablet">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
              <p className='show-tablet'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.</p>
            </div>
          </div>
          <Button hasIcon icon={<ChevronRight />} label={"Start Watching Now"} />
        </div>
      </div>
    </section>
  )
}