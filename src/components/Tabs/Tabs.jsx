import cn from "classnames"
import "./tabs.scss"
import TabsNavigation from "./Components/TabsNavigation"
import { GetTitle } from "@/utils/getTitle"

export const Tabs = ({ className, title, items = [], navigationTargetElementId = null, isEnableOnMobile = false }) => {
  return (
    <div className={cn(className, "tabs", {
      "tabs--enable-only-on-mobile": isEnableOnMobile,
    })} data-js-tabs={JSON.stringify({
      navigationTargetElementId
    })}>
      {!navigationTargetElementId && <TabsNavigation title={title} items={items} />
      }
      <div className="tabs__body">
        {items.map((item, index) => {
          const {
            title,
            children,
            isActive,
          } = item
          const { buttonId, contentId } = GetTitle(title)
          return (
            <div className={cn("tabs__content", {
              "is-active": isActive,
            })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={index}
            >
              {children}
            </div>
          )

        })}
      </div>
    </div>
  )
}