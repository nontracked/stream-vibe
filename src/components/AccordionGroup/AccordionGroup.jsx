import cn from "classnames"
import "./accordionGroup.scss"

export const AccordionGroup = ({ columns, children, isOrderedList = true }) => {
  const ListTag = isOrderedList ? 'ol' : 'ul'
  const itemsPerColumn = Math.ceil(children.length / columns)
  return (
    <ListTag className={cn("accordion-group", {
      [`accordion-group--${columns}-columns`]: columns > 1,
      "accordion-group--has-counter": isOrderedList,
    })}>
      {children.map((child, index) => (
        <li className={cn("accordion-group__item", {
          'accordion-group__item--last-column-item': columns > 1 && (index + 1) % itemsPerColumn === 0
        })} key={index}>
          {child}
        </li>
      ))}
    </ListTag>
  )
} 