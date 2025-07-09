import cn from "classnames"
import "./grid.scss"

export const Grid = ({ columns = 1, children }) => {
  return (
    <ul className={cn("grid__list", {
      [`grid--${columns}`]: columns > 1,
    })}>
      {children.map((child, index) => (
        <li className="grid__item" key={index}>{child}</li>
      ))}
    </ul>
  )
}