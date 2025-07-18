import Button from '@/components/Button'
import './banner.scss'
import RatingView from '@/components/RatingView'

export const Banner = () => {
  const titleId = "banner-title"
  return (
    <section className="banner section container" aria-labelledby={titleId}>
      <div className="banner__inner">
        <div className="banner__body">
          <h2 className="banner__title" id={titleId}>Start your free trial today!</h2>
          <div className="banner__desc">
            <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
          </div>
        </div>
        <Button className="banner__button" href="/subscriptions" label="Start a Free Trial" />
      </div>
    </section>
  )
}