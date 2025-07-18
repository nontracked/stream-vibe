import RatingView from '../RatingView'
import './ratings.scss'

export const Ratings = ({ items = [] }) => {
  return (
    <div className='ratings'>
      <ul className='ratings__list'>
        {items.map(({ title, ratingValue }, index) => (
          <li className='ratings__item' key={index}>
            <h4 className='ratings__titls'>{title}</h4>
            <RatingView
              value={ratingValue}
              label={ratingValue}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}