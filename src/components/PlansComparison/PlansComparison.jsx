import Specifications from '../Specifications'
import Table from '../Table'
import Tabs from '../Tabs'
import Title from '../Title'
import './PlansComparison.scss'

export const PlansComparisons = () => {
  const headCells = [
    {
      children: 'Features',
      width: '25%',
    },
    {
      children: 'Basic',
      width: '25%',
      tabsTitle: 'basic',
    },
    {
      children: <>Standart <span className='badge'>Popular</span></>,
      width: '25%',
      tabsTitle: 'Standart',
    },
    {
      children: 'Premium',
      width: '25%',
      tabsTitle: 'Premium',
    },
  ]

  const rows = [
    {
      cells: [
        'Price',
        '$9.99/Month',
        '$12.99/Month',
        '$14.99/Month',
      ]
    },
    {
      cells: [
        'Content',
        'Access to a wide selection of movies and shows, including some new releases.',
        'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
      ],
      isWide: true,
    },
    {
      cells: [
        'Devices',
        'Watch on one device simultaneously',
        'Watch on Two device simultaneously',
        'Watch on Four device simultaneously',
      ],
      isWide: true,

    },
    {
      cells: [
        'Free Trail',
        '7 Days',
        '7 Days',
        '7 Days',
      ],


    },
    {
      cells: [
        'Cancel Anytime',
        'Yes',
        'Yes',
        'Yes',
      ]
    },
    {
      cells: [
        'HDR',
        'No',
        'Yes',
        'Yes',
      ]
    },
    {
      cells: [
        'Dolby Atmos',
        'No',
        'Yes',
        'Yes',
      ]
    },
    {
      cells: [
        'Ad - Free',
        'No',
        'Yes',
        'Yes',
      ]
    },
    {
      cells: [
        'Offline Viewing',
        'No',
        'Yes, for select titles.',
        'Yes, for all titles.',
      ]
    },
    {
      cells: [
        'Family Sharing',
        'No',
        'Yes, up to 5 family members.',
        'Yes, up to 6 family members.',
      ]
    },
  ]

  const tabsItem = headCells
    .filter((headCell) => headCell.tabsTitle)
    .map((headCell, headCellIndex) => ({
      title: headCell.tabsTitle,
      isActive: headCellIndex === 0,
      children: (
        <Specifications items={rows.map(({ cells, isWide }) => ({
          key: cells[0],
          value: cells[headCellIndex + 1],
          isWide,
        }))} />
      )
    }))
  return (
    <section className='plans-comparisons section container'>
      <Title title="Compare our plans and find the right one for you"
        desc="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
      />
      <Table className='hidden-mobile' headCells={headCells} rows={rows} />
      <Tabs className='visible-mobile' title='plans-comparisons-tabs-title'
        items={tabsItem}
      />
    </section>
  )
}