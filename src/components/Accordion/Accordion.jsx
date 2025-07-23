import classNames from 'classnames'
import './accordion.scss'
import { ChevronDown } from 'lucide-react'

export const Accordion = ({ title, subtitle, id, name, isOpen, children, titleLevelClassName = 'h5', isArrowButton = false }) => {
  return (
    <div className="accordion">
      <details className="accordion__details" name={name} open={isOpen}>
        <summary className="accordion__summary">
          <h3 className={classNames("accordion__title", titleLevelClassName)}>
            <span role="term" aria-details={id}>{title}</span>
            {subtitle && (
              <span className='accordion__sibtitle'>{subtitle}</span>
            )}
            {isArrowButton && (
              <div className='accordion__arrow'>
                <ChevronDown />
              </div>
            )}
          </h3>
        </summary>
      </details>
      <div className="accordion__content" id={id} role="definition">
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}