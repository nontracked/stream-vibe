import Accordion from '../Accordion'
import AccordionGroup from '../AccordionGroup'
import EpisodeCard from '../EpisodeCard'
import './seasons.scss'
import seasonItems from './seasonsItems'

export const Seasons = () => {
  return (
    <AccordionGroup className="seasons"
      mode='dark'
      isOrderedList={false}
    >
      {seasonItems.map(({ title, subTitle, episodes }, index) => (
        <Accordion
          isArrowButton
          titleLevelClassName='h4'
          subtitle={subTitle}
          title={title} id={`season-title-${index}`} name="seasons" isOpen={index === 0} key={index} >

          <ul className='seasons__list'>
            {episodes.map((episode, index) => (
              <li className='seacons__item' key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}