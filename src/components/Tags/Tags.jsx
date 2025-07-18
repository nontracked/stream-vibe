import './tags.scss'

export const Tags = ({ items = [] }) => {
  return (
    <div className='tags'>
      <ul className='tags__list'>
        {items.map((tag, index) => (
          <li className='tags__item' key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}