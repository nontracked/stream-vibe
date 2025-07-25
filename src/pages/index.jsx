import Banner from "@/sections/Banner"
import Categories from "@/sections/Categories"
import Devices from "@/sections/Devices"
import Hero from "@/sections/Hero"
import Plans from "@/sections/Plans"
import Quastions from "@/sections/Quastions"

export const metadata = {
  title: 'Home'
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Quastions />
      <Plans />
      <Banner />

    </>
  )
}
