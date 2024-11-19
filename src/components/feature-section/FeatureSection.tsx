import FeatureChart from "./feature-chart/FeatureChart";
import FeatureHeader from "./feature-header/FeatureHeader";

const FeatureSection = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-ghost-white">
            <FeatureHeader></FeatureHeader>
            <FeatureChart></FeatureChart>
        </div>
    );
}

export default FeatureSection;