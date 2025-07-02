import cn from 'classnames'
import './icon.scss'
import { Icon as MinistaIcon } from 'minista'

export const Icon = ({ className, name }) => {
  return (
    <span className={cn(className, 'icon')}>
      <MinistaIcon iconId={name} />
    </span>
  )
}