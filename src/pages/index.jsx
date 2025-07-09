import Categories from "@/sections/Categories"
import Hero from "@/sections/Hero"

export const metadata = {
  title: 'Home'
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}
