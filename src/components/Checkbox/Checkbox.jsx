import { getIdFromTitle } from '@/utils/getIdFromTitle'
import './checkbox.scss'
import cn from 'classnames'

export const Checkbox = ({ className, label, id = getIdFromTitle(label), isReq }) => {
  return (
    <label className={cn(className, 'checkbox')}
      htmlFor={id}
    >
      <input className='checkbox__input' id={id} type='checkbox' required={isReq} />
      <span className='checkbox__label'>{label}</span>
    </label>
  )
}