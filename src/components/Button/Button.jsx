import cn from 'classnames'
import './button.scss'
export const Button = (
  { href, type = 'button', target = '_blank', className, label, isLabelVusible = true, hasIcon = false, icon, iconPosition = 'before',
    tranparent = false
  }) => {
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const buttonBackgroud = tranparent && "button--transparent"
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelVusible ? label : undefined
  const iconComponent = hasIcon && (<span className="button__icon">{icon}</span>)
  return (
    <Component
      className={cn(className, 'button', buttonBackgroud)}
      aria-label={title}
      title={title}
      {...specificProps}
    >
      {iconPosition === 'before' && iconComponent}

      {isLabelVusible && (
        <span className="button__label">{label}
        </span>
      )}

      {iconPosition === 'after' && iconComponent}

    </Component>
  )
}