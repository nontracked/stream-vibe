import Slider from '@/components/Slider'
import './moviesBanner.scss'
import MovieBannerCard from '@/components/MovieBannerCard'

export const MoviesBanner = () => {
  const titleId = "movies-banner-title"

  const movieCards = [
    {
      title: "Avengers : Endgame",
      desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
      imgSrc: "/src/assets/images/heroBanner/1.jpg",
    },
    {
      title: "Avengers : Endgame 2",
      desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
      imgSrc: "/src/assets/images/heroBanner/1.jpg",
    },
    {
      title: "Avengers : Endgame 3",
      desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
      imgSrc: "/src/assets/images/heroBanner/1.jpg",
    },
    {
      title: "Avengers : Endgame 4",
      desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
      imgSrc: "/src/assets/images/heroBanner/1.jpg",
    },
  ]
  return (
    <section className="movies-banner section container" aria-labelledby={titleId}>
      <div className="movies-banner__inner">
        <h1 className="visually-hidden" id={titleId}>Movies & Shows</h1>
        <Slider sliderParams={{
          slidesPerView: 1
        }}
        navigationPosition="abs-bottom"
        >
          {movieCards.map(({ title, desc, imgSrc }) => (
            <MovieBannerCard title={title} desc={desc} imgSrc={imgSrc} />
          ))}
        </Slider>
      </div>
    </section>
  )
}