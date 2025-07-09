import "./deviceCard.scss"

export const DeviceCard = ({ title, desc, imgSrc }) => {
  return (
    <div className="device-card">
      <div className="device-card__header">
        <div className="device-card__image-wrapper">
          <img className="device-card__image" src={imgSrc} alt="" width={40} height={40} loading="lazy" />
        </div>
        <h3 className="device-card__title h4 ">
          {title}
        </h3>
      </div>
      <div className="device-card__body">
        <div className="device-card__desc">
          <p>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}