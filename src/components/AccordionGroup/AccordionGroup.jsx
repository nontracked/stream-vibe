import cn from "classnames"
import "./accordionGroup.scss"

export const AccordionGroup = ({ className, mode = '', columns, children, isOrderedList = true }) => {
  const ListTag = isOrderedList ? 'ol' : 'ul'
  const itemsPerColumn = Math.ceil(children.length / columns)
  return (
    <ListTag className={cn(className, "accordion-group", {
      [`accordion-group--${columns}-columns`]: columns > 1,
      "accordion-group--has-counter": isOrderedList,
      [`accordion-group--${mode}`]: mode,
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