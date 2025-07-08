import Title from '@/components/Title'
import './categories.scss'
import CategoryCard from '@/components/CategoryCard'

export const Categories = () => {
  const titleId = "categories"
  const categoryItems = [
    {
      title: 'Action',
      images: [
        '/src/assets/images/categories-card/action/1.jpg',
        '/src/assets/images/categories-card/action/2.jpg',
        '/src/assets/images/categories-card/action/3.jpg',
        '/src/assets/images/categories-card/action/4.jpg',
      ]
    },
    {
      title: 'Adventure',
      images: [
        '/src/assets/images/categories-card/action/1.jpg',
        '/src/assets/images/categories-card/action/2.jpg',
        '/src/assets/images/categories-card/action/3.jpg',
        '/src/assets/images/categories-card/action/4.jpg',
      ]
    },
    {
      title: 'Comedy',
      images: [
        '/src/assets/images/categories-card/action/1.jpg',
        '/src/assets/images/categories-card/action/2.jpg',
        '/src/assets/images/categories-card/action/3.jpg',
        '/src/assets/images/categories-card/action/4.jpg',
      ]
    },
    {
      title: 'Drama',
      images: [
        '/src/assets/images/categories-card/action/1.jpg',
        '/src/assets/images/categories-card/action/2.jpg',
        '/src/assets/images/categories-card/action/3.jpg',
        '/src/assets/images/categories-card/action/4.jpg',
      ]
    },
    {
      title: 'Horror',
      images: [
        '/src/assets/images/categories-card/action/1.jpg',
        '/src/assets/images/categories-card/action/2.jpg',
        '/src/assets/images/categories-card/action/3.jpg',
        '/src/assets/images/categories-card/action/4.jpg',
      ]
    },

  ]
  return (
    <section className="categories section container" aria-labelledby={titleId}>
      <div className="categories__header">
        <Title
          titleId="categories"
          title={"Explore our wide variety of categories"}
          desc={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}
          action={(
            <div>
              <button>Назад</button>
              <button>Вперед</button>
            </div>
          )}
          isActionHiddenOnMobile
        />
      </div>
      <div className="categories__body">
        {categoryItems.map(({ title, images }, index) => (
          <CategoryCard title={title} images={images} key={index} />
        ))}
      </div>
    </section>
  )
}