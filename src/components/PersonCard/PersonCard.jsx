import { Image } from 'minista'
import './personCard.scss'

export const PersonCard = ({ imgSrc, imgAlt, name, from, hasBody }) => {
  const body = hasBody && Boolean(name || from)
  return (
    <>
      {body ?
        (<div className='person-card person-card--background'>
          <Image src={imgSrc} alt={imgAlt} title={imgAlt} className='person-card__image--small' />
          {body && (
            <div className='person-card__body'>
              {name && <h4 className='person-card__name'>{name}</h4>}
              {from && <p>{from}</p>}
            </div>
          )}
        </div>)
        :
        (<div className='person-card'>
          <Image src={imgSrc} alt={imgAlt} title={imgAlt} className='person-card__image' />
          {body && (
            <div className='person-card__body'>
              {name && <h4 className='person-card__name'>{name}</h4>}
              {from && <p>{from}</p>}
            </div>
          )}
        </div>)}
    </>
  )
}