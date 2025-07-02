import './logo.scss'
import cn from 'classnames'
export const Logo = ({ className, loading = 'lazy' }) => {
  return (
    <a href="/" className={cn(className, 'logo')} title="Home">
      <img className="logo__image" src="/Logo.svg"
        alt=""
        width={199}
        height={60}
        loading={loading} />
    </a>
  )
}