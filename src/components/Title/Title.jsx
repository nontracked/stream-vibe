import cn from 'classnames'
import './title.scss'
export const Title = (
  { title, titleId, desc, action, isActionHiddenOnMobile = false, shortDescOnMobile, shortDesk }
) => {


  return (
    <>
      <div className="categories__info">
        <h2 className="categories__title h3" id={titleId}>
          {title}
        </h2>
        {shortDescOnMobile ? (
          <div className="categories__desc">
            <p className="hidden-mobile">{desc}</p>
            <p className="visible-mobile">{shortDesk}</p>
          </div>
        ) :
          <div className="categories__desc">
            <p>{desc}</p>
          </div>
        }
      </div>
      {action && (
        <div className={cn("categories__action", {
          "hidden-mobile": isActionHiddenOnMobile
        })}>{action}</div>
      )}
    </>
  )
}