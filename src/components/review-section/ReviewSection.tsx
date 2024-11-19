import ReviewCardsSlider from "./review-cards-slider/ReviewCardsSlider";

import { reviewDetails } from '@/assets/index'

const ReviewSection = () => {
    return (
        <div>
            <main 
              className="flex flex-col items-center justify-top py-24 px-5 bg-ghost-white"
            >
                <div className=" flex flex-col justify-center items-center">
                  <div>
                    <h1 className=" text-6xl font-bold text-true-blue">User Reviews and Comments</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center m-5">
                    <p>
                      We have done more than 1200 projects so far and many more are under development. 
                    </p>
                    <p>
                      Here are some valuable feedback from our clients!
                    </p>
                  </div>
                </div>
                <div>
                    <ReviewCardsSlider testimonials={reviewDetails}/>
                </div>
            </main>
        </div>
    );
}

export default ReviewSection;