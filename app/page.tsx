'use client'

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

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Cards />
      <ServiceSection />
      <WhyChooseUs />
      <HowItWorks />
      <BoardOfDirectors />
      <ClientReviews />
      <RecentUpdates />
      <AboveFooter />
      <Footer />
    </div>
  );
}
