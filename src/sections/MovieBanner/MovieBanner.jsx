import MovieBannerCard from "@/components/MovieBannerCard"
import "./movieBanner.scss"

export const MovieBanner = () => {
  const titleId = 'movie-banner-title'
  return (
    <section className="movie-banner section container" aria-labelledby={titleId}>
      <MovieBannerCard  titleId={titleId} TitleTag="h1" title="Дичь" desc="bla bla bla" imgSrc="/src/assets/images/movieBanner/1.jpg" />
    </section>
  )
}