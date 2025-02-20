import Image from "next/image";
import HeaderSection from "./header/page";
import NavbarSection from "./navbar/page";
import SliderSection from "./slider/page";
import Newsection from "./news/page";
import ImageSlider from "./imageslider/page";
import FooterSection from "./footer/Footer";
import ResponsiveNavbar from "./responsivenavbar/page";
import TestonomialSection from "./testonomials/page";
import TestimonialSection from "./testonomials/page";
import Testimonial from "./testonomials/page";
import FAQ from "./faq/page";

export default function Home() {
  return (
    <div>
      <HeaderSection/>
      <ResponsiveNavbar/>
      <SliderSection/>
      <Newsection/>
      <ImageSlider/>
      <Testimonial/>
      <FAQ/>
      <FooterSection/>
      

    </div>
  );
}
