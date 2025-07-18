import { getIdFromTitle } from '@/utils/getIdFromTitle'
import cn from 'classnames'
import './tabsNavigation.scss'
import { GetTitle } from '@/utils/getTitle'

export const TabsNavigation = ({ className, id, title, items = [] }) => {
  const titleFormatted = getIdFromTitle(title)
  const titleId = `${titleFormatted}-title`
  return (
    <div className={cn(className, 'tabs-navigation')}
      id={id}
      role="tablist"
      aria-labelledby={titleId}
      data-js-tabs-navigation=""
    >
      <h3 className="visually-hidden" id={titleId}>
        {title}
      </h3>
      {items.map((item, index) => {
        const {buttonId, contentId} = GetTitle(item.title)
        return (
          <div className={cn("tabs-navigation__button", {
            'is-active': item.isActive
          })}
            id={buttonId}
            aria-controls={contentId}
            role="tab"
            aria-selected={item.isActive}
            tabIndex={item.isActive ? 0 : -1}
            data-js-tabs-button=""
            key={index}
          >
            {item.title}
          </div>
        )
      })}
    </div>
  )
}