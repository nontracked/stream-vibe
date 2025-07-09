import Categories from "@/sections/Categories"
import Devices from "@/sections/Devices"
import Hero from "@/sections/Hero"
import Quastions from "@/sections/Quastions"

export const metadata = {
  title: 'Home'
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Quastions />
    </>
  )
}
