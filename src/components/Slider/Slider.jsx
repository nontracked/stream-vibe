import 'swiper/css';
import './slider.scss'
import SliderNavigation from './component/SliderNavigation';
import cn from 'classnames';

const defaultSliderParams = {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,
  breakpoints: {
    375: {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1023: {
      spaceBetween: 20,
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1441: {
      spaceBetween: 30,
      slidesPerView: 5,
      slidesPerGroup: 5,
    }
  }
}

export const Slider = (
  { flexible = false, children = [], navigationTargetElementId = null, sliderParams = defaultSliderParams, hasScrollbar = true, navigationPosition = '', isNavigationHiddenMobile = true, navigationMode, }
) => {
  return (
    <div className="slider" data-js-slider={JSON.stringify({
      sliderParams,
      navigationTargetElementId,
      flexible
    })}>
      {hasScrollbar && (
        <div className="slider__scrollbar visible-mobile"
          data-js-slider-scrollbar=""></div>
      )}
      <div className={cn("slider__swiper swiper", {
        "slider__list-flex": flexible,
      })} data-js-slider-swiper="">
        <ul className={cn("slider__list swiper-wrapper")}>
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>

        {!navigationTargetElementId && (
          <SliderNavigation classname="slider__navigation"
            mode={navigationMode}
            position={navigationPosition}
            isHiddenMobile={isNavigationHiddenMobile}
          />
        )}

      </div>
    </div>
  )
}