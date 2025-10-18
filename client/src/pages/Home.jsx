import Banner from "../components/home/Banner";
import CallToActionSection from "../components/home/CallToActionSection";
import FeatureSection from "../components/home/FeatureSection";
import Footer from "../components/home/Footer";
import HeroSection from "../components/home/HeroSection";
import TestimonialSection from "../components/home/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Home;
