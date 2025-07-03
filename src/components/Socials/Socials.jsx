import cn from 'classnames'
import './socials.scss'
import Button from '../Button'
export const Socials = ({ className, links = [], }) => {
  return (
    <div className={cn(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <Button className="soc1als__link" href="/" target />
          </li>
        ))}
      </ul>
    </div>
  )
}