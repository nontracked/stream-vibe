import { Image } from 'minista'
import './support.scss'
import { Field } from '@/components/Field/Field'

export const Support = () => {
  const titleId = 'support-title'
  return (
    <section className='support container section' aria-labelledby={titleId}>
      <div className='support__body'>
        <div className='support__header'>
          <h1 className='support__title h2' id={titleId}>Welcome to our support page!</h1>
          <div className='support__desc'>
            <p>We're here to help you with any problems you may be having with our product.</p>
          </div>
        </div>
        <Image className='support__image' src='/src/assets/images/support/1.png' width={533} height={477} />
      </div>
      <form className='support__form' action="">
        <Field className="support__form-cell" label="First Name" placeholder="Ivan" isReq />
        <Field className="support__form-cell" label="Last Name" placeholder="Ivanov" />
        <Field className="support__form-cell" label="Email" type="email" placeholder="example@mail.com" isReq />
        <Field className="support__form-cell" label="Phone number" inputMode="tel"
          placeholder="(999) 999-99-99" mask="(000) 000-00-00" />
        <Field className="support__form-cell support__form-cell--wide" label="Message" type="textarea"
          placeholder="Hi! I have a quastions" isReq />
      </form>
    </section>
  )
}