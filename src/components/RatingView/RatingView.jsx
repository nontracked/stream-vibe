import "./ratingView.scss"

export const RatingView = ({ value = 5, label }) => {
  const ariaLabel = `Rating: ${value} stars`

  return (
    <div
      className="rating-view"
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        '--ratingViewValue': value
      }}
    >
      <div className="rating-view__stars">
        <img
          className="rating-view__stars-unfilled"
          src="/rating/stars-unfilled.svg"
          width={98}
          height={18}
          alt=""
        />
        <img
          className="rating-view__stars-filled"
          src="/rating/stars-filled.svg"
          width={98}
          height={18}
          alt=""
        />
      </div>
      {label && (
        <div className="rating-view__label">{label}</div>
      )}
    </div>
  )
}