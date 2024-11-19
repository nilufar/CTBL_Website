'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import styles from './heroSlider.module.css';
import Image from 'next/image';

import { sliderImagesList } from '@/assets/index';

const HeroSlider = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 2000})]);

    return (
        <div style={{"marginTop" : "-50px", "zIndex": "30"}}>
            <div className={`mx-auto max-w-5xl h-96 rounded-xl cursor-grab ${styles.embla}`} ref={emblaRef}>
                <div className={`${styles.embla__container} h-full`}>
                    {
                        sliderImagesList.map((data, i) => {
                            return(
                                <div 
                                    className={`${styles.embla__slide } flex items-center justify-center relative`}
                                    style={{
                                        minWidth:"1024px",
                                        minHeight:"500px"
                                    }}
                                    key={i}
                                >
                                    <Image
                                        src={data.src}
                                        alt={data.alt}
                                        fill
                                    ></Image> 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default HeroSlider