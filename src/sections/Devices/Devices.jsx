import Title from "@/components/Title"
import "./devices.scss"
import Grid from "@/components/Grid"
import DeviceCard from "@/components/DeviceCard"

export const Devices = () => {
  const titleId = "devices"
  const deciceItems = [
    {
      title: "Smartphones",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/1.svg"
    },
    {
      title: "Tablet",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/2.svg"
    },
    {
      title: "Smart TV",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/3.svg"
    },
    {
      title: "Laptops",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/4.svg"
    },
    {
      title: "Gaming Consoles",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/5.svg"
    },
    {
      title: "VR Headsets ",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/6.svg"
    },
  ]
  return (
    <section className="devices section container" aria-labelledby={titleId}>
      <div className="devices__header">
        <Title
          titleId={titleId}
          title={"We Provide you streaming experience across various devices."}
          shortDescOnMobile
          desc={"With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."}
          shortDesk={"With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere."}
        />
      </div>
      <div className="devices__body">
        <Grid columns={3}>
          {deciceItems.map(({ title, desc, imgSrc }, index) => (
            <DeviceCard title={title} desc={desc} imgSrc={imgSrc} key={index} />
          ))}
        </Grid>
      </div>
    </section>
  )
}