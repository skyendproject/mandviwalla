import AboutUs from "@/components/AboutUs";
import Cards from "@/components/Cards";
import Hero from "@/components/Home-Hero";
import ServiceSection from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Cards />
      <ServiceSection />
    </div>
  );
}
