// importing the components
import HeroBanner from "./hero-banner/HeroBanner";
import HeroSlider from "./hero-slider/HeroSlider";

const HeroSection = () => {
    return (
        <div className="flex flex-col">
            <HeroBanner></HeroBanner>
            <HeroSlider></HeroSlider>
        </div>
    );
}

export default HeroSection;