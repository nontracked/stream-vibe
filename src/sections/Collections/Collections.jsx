import Tabs from '@/components/Tabs'
import './collections.scss'
import { collectionsGroup } from './collectionsGroups'
import { getIdFromTitle } from '@/utils/getIdFromTitle'
import SliderNavigation from '@/components/Slider/component/SliderNavigation'
import Slider from '@/components/Slider'
import { categoryItems } from '../Categories/categoryItems'
import CategoryCard from '@/components/CategoryCard'
import RatingView from '@/components/RatingView'

export const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnMobile
      items={collectionsGroup.map((collectionsGroup) => ({
        isActive: collectionsGroup.isActive,
        title: collectionsGroup.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionsGroup.title}
            </p>
            {
              collectionsGroup.items.map((collectionItem, index) => {
                const { title, categoryItem, sliderParams } = collectionItem
                const titleFormatted = `${getIdFromTitle(collectionsGroup.title)}-${getIdFromTitle(title)}`
                const titleId = `${titleFormatted}-title`
                const sliderNavigationId = `${titleFormatted}-slider-navigation`

                return (

                  <section
                    className='collections__sections section'
                    title={title}
                    titleId={titleId}
                    actions={(
                      <SliderNavigation
                        id={sliderNavigationId}
                        mode="tile"
                      />
                    )}
                    isActionsHiddenOnMobile
                    key={index}
                  >
                    {/* <Slider sliderParams={sliderParams}
                      navigationTargetElementId={sliderNavigationId}

                    >
                      {categoryItems.map((categoryItem, index) => (
                        <CategoryCard {...categoryItem} key={index} />
                      ))}
                    </Slider> */}
                    <RatingView value={2} />

                  </section>
                )
              })
            }
          </div>
        )
      }))}
    />
    // <section className="collections section container">
    //   <div className="collections__inner">

    //   </div>
    // </section>
  )
}