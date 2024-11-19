'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import styles from './industrySlider.module.css';
import { FunctionComponent } from 'react';

const IndustrySlider = (props : any) => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const  { featureText  } = props;

    return (
        <div>
            <div className={`cursor-default ${styles.embla}`} ref={emblaRef}>
                <div className={`${styles.embla__container}`}>
                    <div className={`${styles.embla__slide } flex items-center justify-center `}>
                        <p className=' text-sm font-bold text-black'>Text-1</p>
                    </div>
                    <div className={`${styles.embla__slide } flex items-center justify-center`}>
                        <p className=' text-sm font-bold text-black'>Text-2</p>
                    </div>
                    <div className={`${styles.embla__slide } flex items-center justify-center `}>
                        <p className=' text-sm font-bold text-black'>Text-3</p>
                    </div>
                    <div className={`${styles.embla__slide } flex items-center justify-center`}>
                        <p className=' text-sm font-bold text-black'>Text-4</p>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default IndustrySlider;