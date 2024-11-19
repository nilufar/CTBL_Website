import IndustryGrid from "./industry-grid/IndustryGrid";

const IndustrySection = () => {
    return (
        <div 
            className="w-full flex items-center justify-center mb-4 bg-true-blue"
            style={
                {
                    backgroundPosition: "cover",
                    height: '850px'
                }
            }
        >
            <IndustryGrid></IndustryGrid>
        </div>
    );
}

export default IndustrySection;