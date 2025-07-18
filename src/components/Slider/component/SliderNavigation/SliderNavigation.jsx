import cn from 'classnames'
import './sliderNavigation.scss'
import Button from '@/components/Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const SliderNavigation = (
  { classname, id, hasPagination = true, mode = '', position = '', isHiddenMobile }
) => {
  return (
    <div
      className={cn(classname, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
        [`slider-navigation--${position}`]: position,
        "hidden-mobile": isHiddenMobile,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        hasIcon
        tranparent
        label="Previos slide"
        icon={<ArrowLeft />}
        isLabelVusible={false}
        extraAttrs={{
          'data-js-slider-previous-button': "",
        }}
      />
      {hasPagination && (
        <div className="slider-navigation__pagination" data-js-slider-pagination="" />

      )}
      <Button className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        hasIcon
        tranparent
        label="Next slide"
        icon={<ArrowRight />}
        isLabelVusible={false}
        extraAttrs={{
          'data-js-slider-next-button': "",
        }}
      />
    </div>
  )
}