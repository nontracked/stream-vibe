import Logo from '@/components/Logo'
import cn from 'classnames'
import './header.scss'
import Button from '@/components/Button'
import { Bell, Bookmark, Search } from 'lucide-react';
import BurgerButton from '@/components/BurgerButton';
export const Header = ({ url }) => {
  const navItems = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Movies & Shows",
      href: "/movies",
    },
    {
      title: "Support",
      href: "/support"
    },
    {
      title: "Subscriptions",
      href: "/subs"
    },
  ]
  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog="">
          <nav className="header__menu">
            <ul className="header__menu-list">
              {navItems.map(({ title, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a className={cn("header__menu-link", {
                    "is-active": href === url
                  })} href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button tranparent isLabelVusible={false} hasIcon icon={<Search className='header__icon' />} className="header__button" label={"Search"} />
            <Button tranparent isLabelVusible={false} hasIcon icon={<Bell className='header__icon' />} className="header__button" label={"Search"} />
          </div>
        </dialog>
        <BurgerButton classname="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': ''
          }} />
      </div>
    </header >
  )
}