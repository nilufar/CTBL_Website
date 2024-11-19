import BottomBanner from "@/components/bottom-banner/BottomBanner";
import FeatureSection from "@/components/feature-section/FeatureSection";
import HeroSection from "@/components/hero-section/HeroSection";
import IndustrySection from "@/components/industry-section/IndustrySection";
import InfoSection from "@/components/info-section/InfoSection";
import LogoSlider from "@/components/logo-slider/LogoSlider";
import ReviewSection from "@/components/review-section/ReviewSection";
import TeamSection from "@/components/team-section/TeamSection";

const Home = () => {
  return (
    <div className=" flex flex-col">
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <LogoSlider></LogoSlider>
      <IndustrySection></IndustrySection>
      <InfoSection></InfoSection>
      <BottomBanner></BottomBanner>
      <TeamSection></TeamSection>
      <ReviewSection></ReviewSection>
    </div>
  );
}

export default Home;
