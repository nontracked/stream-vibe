import Title from '@/components/Title'
import './categories.scss'
import CategoryCard from '@/components/CategoryCard'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/component/SliderNavigation'
import { categoryItems } from './categoryItems'

export const Categories = () => {
  const titleId = "categories"

  const sliderNavId = "categories-slider-navigation"
  return (
    <section className="categories section container" aria-labelledby={titleId}>
      <div className="categories__header">
        <Title
          titleId="categories"
          title={"Explore our wide variety of categories"}
          desc={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}
          action={(
            <SliderNavigation
              mode="tile"
              id={sliderNavId}
            />
          )}
          isActionHiddenOnMobile
        />
      </div>
      <div className="categories__body">
        <Slider navigationTargetElementId={sliderNavId}>
          {categoryItems.map(({ title, images }, index) => (
            <CategoryCard title={title} images={images} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  )
}