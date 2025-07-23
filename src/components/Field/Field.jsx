import { getIdFromTitle } from '@/utils/getIdFromTitle'
import './field.scss'
import cn from 'classnames'

export const Field = (
  /**
   * type
   * undefined (default) | 'email' | 'textarea' 
   */
  //! здесь label должен идти до id
  { className, label, id = getIdFromTitle(label), type, placeholder, isReq, inputMode, mask }
) => {
  const Component = type === 'textarea' ? 'textarea' : 'input'
  const extraAttrs = {}

  if (mask) { // если в маск что то передали, то в extraAttrs добавляем data-js-input-mask
    extraAttrs['data-js-input-mask'] = mask
  }
  return (
    <div className={cn(className, 'field')}>
      <label className='field__label' htmlFor={id}>
        {label} {isReq && (
          <span className='field__req-star' aria-hidden={true}>*</span>
        )}
      </label>
      <div className='field__body'>
        <Component className='field__control' type={type} id={id} placeholder={placeholder}
          required={isReq} inputMode={inputMode} {...extraAttrs} />
      </div>
    </div>
  )
}