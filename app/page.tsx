import Image from "next/image";
import HeroSlider from '@/components/HeroSlider';
import AboutUs from "@/components/Aboutus";
import Product from "@/components/Product";

export default function Home() {
  return (
    <>
    <HeroSlider />
    <AboutUs />
    <Product />
    
    </>
  );
}
