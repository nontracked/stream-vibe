import MovieBannerCard from "@/components/MovieBannerCard"
import "./showBanner.scss"

export const ShowBanner = () => {
  const titleId = 'show-banner-title'

  return (
    <section className="show-banner section container" aria-labelledby={titleId}>
      <MovieBannerCard
        title="Stranger Things"
        desc="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        titleId={titleId}
        TitleTag="h1"
        imgSrc="./src/assets/images/show-banner/1.jpg"
        isSmallPaddingY
      />
    </section>
  )
}