import { Image } from 'minista'
import './movieBannerCard.scss'
import Button from '../Button'
import { ChevronRight, Heart, Plus, Volume2 } from 'lucide-react'
import cn from 'classnames'

export const MovieBannerCard = ({ title, titleId, desc, imgSrc, TitleTag = 'h2', isSmallPaddingY = false }) => {
  return (
    <div className="movie-banner-card">
      <Image className='movie-banner-card__image' src={imgSrc} />
      <div className={cn("movie-banner-card__inner", {
        'movie-banner-card__inner--smallPaddingY':isSmallPaddingY
      })}>
        <div className="movie-banner-card__header">
          <TitleTag className='movie-banner-card__title h3' id={titleId}>{title}</TitleTag>
          <div className="movie-banner-card__desc hidden-mobile">
            <p>{desc}</p>
          </div>
        </div>
        <div className="movie-banner-card__body">
          <Button className="movie-banner-card__button" hasIcon icon={<ChevronRight />} label="Play Now" />
          <div className="movie-banner-card__actions">
            <Button className="movie-banner-card__actions-button" hasIcon icon={<Plus />} isLabelVusible={false} />
            <Button className="movie-banner-card__actions-button" hasIcon icon={<Heart />} isLabelVusible={false} />
            <Button className="movie-banner-card__actions-button" hasIcon icon={<Volume2 />} isLabelVusible={false} />
          </div>
        </div>
        <footer className="movie-banner-card__footer"></footer>
      </div>
    </div>
  )
}