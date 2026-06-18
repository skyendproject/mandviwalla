import AboveFooter from "@/components/AboveFooter";
import Footer from "@/components/Footer";
import AboutUs from "@/components/home/AboutUs";
import BoardOfDirectors from "@/components/home/BoardOfDirectors";
import Cards from "@/components/home/Cards";
import ClientReviews from "@/components/home/ClientReviews";
import Hero from "@/components/home/Home-Hero";
import HowItWorks from "@/components/home/HowItWorks";
import RecentUpdates from "@/components/home/RecentUpdates";
import ServiceSection from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "Mandviwalla Mauser Plastic Industries | Pakistan's Leading Plastic Manufacturer",
  description:
    "Leading manufacturer of plastic industrial packaging solutions in Pakistan.",
};


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Cards />
      <ServiceSection />
      <HowItWorks />
      <WhyChooseUs />
      <BoardOfDirectors />
      <ClientReviews />
      {/* <RecentUpdates /> */}
      <AboveFooter />
      <Footer />
    </div>
  );
}
