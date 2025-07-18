import SliderNavigation from "@/components/Slider/component/SliderNavigation"
import "./movieDetails.scss"
import Slider from "@/components/Slider"
import PersonCard from "@/components/PersonCard"
import Button from "@/components/Button"
import { Plus } from "lucide-react"
import ReviewCard from "@/components/ReviewCard"
import { Icon } from "minista"
import Tags from "@/components/Tags"
import Ratings from "@/components/Ratings"

export const MovieDetails = () => {
  const titleId = 'movie-details-title'
  const castSliderNavigationId = 'movie-cast-navigation'
  const castItems = [
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Ivan Ivanov',
    },
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Ivan Ivanov2',
    },
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Ivan Ivanov',
    },
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Ivan Ivanov',
    },
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Ivan Ivanov',
    },
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Ivan Ivanov',
    },
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'Ivan Ivanov',
    },
  ]

  const reviewsItems = [
    {
      name: "Aniket Roy",
      subtitle: "From India",
      desc: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      rating: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      desc: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      rating: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      desc: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      rating: 4.5,
    },

  ]

  return (
    <section className="movie-details section container" aria-labelledby={titleId}>
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        <div className="movie-details__panel movie-details__panel--desc">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__desc">
              <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation id={castSliderNavigationId} hasPagination={false} mode="rounded" />
          </header>
          <Slider navigationTargetElementId={castSliderNavigationId} hasScrollbar={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                }
              }
            }}
          >
            {castItems.map(({ imgSrc, imgAlt }, index) => (
              <PersonCard imgSrc={imgSrc} imgAlt={imgAlt} key={index} />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button className="movie-details__panel-button" hasIcon icon={<Plus />} label="Add Your Review" />
          </header>
          <Slider navigationMode="rounded" isNavigationHiddenMobile={false}
            hasScrollbar={false}
            flexible
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  allowTouchMove: false,
                  spaceBetween: 20,

                },
              }
            }}
          >
            {reviewsItems.map((reviewsItem, index) => (
              <ReviewCard {...reviewsItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details-groups">
            <div className="movie-details-group">
              <h3 className="movie-details-title">
                <img src="/src/assets/icons/calendar.svg" alt="" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__desc">
                <time className="h6" datetime="2022">2022</time>
              </div>
            </div>

            <div className="movie-details-group">
              <h3 className="movie-details-title">
                <img src="/src/assets/icons/translate.svg" alt="" />
                <span>Available Languages</span>
              </h3>
              <Tags items={['English', 'Hindi', 'Tamil', 'Telegu', 'Kannada']} />
            </div>
            <div className="movie-details-group">
              <h3 className="movie-details-title">
                <img src="/src/assets/icons/rating.svg" alt="" />
                <span>Ratings</span>
              </h3>
              <Ratings items={[
                {
                  title: 'IMDb',
                  ratingValue: 4.5,
                },
                {
                  title: 'Streamvibe',
                  ratingValue: 4,
                },
              ]} />
            </div>
            <div className="movie-details-group">
              <h3 className="movie-details-title">
                <img src="/src/assets/icons/gernes.svg" alt="" />
                <span>Gernes</span>
              </h3>
              <Tags items={['Action', 'Adventure']} />
            </div>
            <div className="movie-details-group">
              <h3 className="movie-details-title">
                <span>Director</span>
              </h3>
              <PersonCard
                hasBody
                imgSrc="./src/assets/images/people/director.jpg"
                imgAlt="Director"
                name="Rishab Shetty"
                from="From India"
              />

            </div>
            <div className="movie-details-group">
              <h3 className="movie-details-title">
                <span>Music</span>
              </h3>
              <PersonCard
                hasBody
                imgSrc="./src/assets/images/people/music.jpg"
                name="B. Ajaneesh Loknath"
                from="From India"
                imgAlt="B. Ajaneesh Loknath"
              />

            </div>

          </div>
        </div>
      </aside>
    </section>
  )
}