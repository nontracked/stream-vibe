import Title from '@/components/Title'
import './plans.scss'
import PlanCard from '@/components/PlanCard'
import Grid from '@/components/Grid'
import { planGroups } from './planGroups'
import TabsNavigation from '@/components/Tabs/Components/TabsNavigation'
import Tabs from '@/components/Tabs'
import classNames from 'classnames'

export const Plans = ({className}) => {
  const tabsTitle = "plans-tabs"
  const tabsNavigationId = "plans-tabs-navigation "

  return (
    <section className={classNames(className,'plan section container')}>
      <div className="plan__header">
        <Title
          title="Choose the plan that's right for you"
          desc="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          titleId="plansId"
          action={(
            <TabsNavigation id={tabsNavigationId} title={tabsTitle} items={planGroups}/>
          )}
        />
      </div>
      <div className="plan__body">
        <Grid columns={3}>
          {planGroups[0].items.map((item, index) => (
            <PlanCard {...item} key={index} />
          ))}
        </Grid>
        <Tabs title={tabsTitle} navigationTargetElementId={tabsNavigationId} 
        items={planGroups.map((planGroup) => ({
          title: planGroup.title,
          isActive: planGroup.isActive,
          // children: (
            
          // )
        }))}></Tabs>
      </div>
    </section>
  )
}