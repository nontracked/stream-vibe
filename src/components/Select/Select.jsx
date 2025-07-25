import { getIdFromTitle } from '@/utils/getIdFromTitle'
import './select.scss'
import classNames from 'classnames'

export const Select = (
  { label, id = getIdFromTitle(label), isLabelHidden = true, options = [], fieldControlClassName , }
) => {
  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`
  }
  const selectedOptions = options.find(({ isSelected }) => isSelected) ?? options[0]
  return (
    <div className='select' data-js-select=''>
      <label className={classNames('select__label', {
        'visually-hidden': isLabelHidden,
      })}
        id={IDs.label}
        htmlFor={IDs.originalControl}>
        {label}
      </label>
      <select className={classNames('select__original-control',fieldControlClassName )}
        defaultValue={selectedOptions.value}
        id={IDs.originalControl}
        tabIndex={-1}
        data-js-select-original-control=""
      >{options.map(({ value }, index) => (
        <option value={value} key={index}>{value}</option>
      ))}</select>
      <div className='select__body'>
        <div className={classNames('select__button',fieldControlClassName )} tabIndex={0}
          role='combobox'
          aria-expanded={false}
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          data-js-select-button=''
        >
          {selectedOptions.value}
        </div>
        <div className='select__dropdown' id={IDs.dropdown}
          role='listbox'
          aria-labelledby={IDs.label}
          data-js-select-dropdown=""
        >
          {options.map(({ value, isSelected = false }, index) => {
            return (
              <div className={classNames('select__option', {
                'is-selected': isSelected,
                'is-current': isSelected,
              })}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                data-js-select-option=''
                key={index}
              >{value}</div>
            )
          })}
        </div>
      </div>
    </div >
  )
}