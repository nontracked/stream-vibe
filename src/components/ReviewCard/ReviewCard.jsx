import RatingView from '../RatingView'
import './reviewCard.scss'

export const ReviewCard = ({ name, subtitle, desc, rating }) => {
  return (
    <div className='review-card'>
      <header className='review-card__header'>
        <div className='review-card__author'>
          <h4 className='review-card__name h6'>{name}</h4>
          <p className='review-card__desc'>{subtitle}</p>
        </div>
        <div className='review-card__rating'>
          <RatingView value={rating} label={rating} />
        </div>
      </header>
      <div className='review-card__body'>
        <p>{desc}</p>
      </div>
    </div>
  )
}