import "@/styles"
import { Head } from "minista"
import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"

export default function ({ children, title }) {

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Stream Vibe | {title} </title>
      </Head>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  )
}
