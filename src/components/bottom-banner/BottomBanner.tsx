import BannerBottom from "./banner-bottom/BannerBottom";
import BannerTop from "./banner-top/BannerTop";

const BottomBanner = () => {
    return (
        <div className=" flex flex-col">
            <BannerTop></BannerTop>
            <BannerBottom></BannerBottom>
        </div>
    );
}

export default BottomBanner;