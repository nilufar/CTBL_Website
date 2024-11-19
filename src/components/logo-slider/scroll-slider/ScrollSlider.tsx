'use client';

import styles from './scrollSlider.module.css';

import { FunctionComponent, useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './arrow-buttons/ArrowButtons'
import Image from 'next/image';
import Link from 'next/link';

import { logoSlider } from '@/assets/index'

type PropType = {
    slides: logoSlider[]
    options?: EmblaOptionsType
}

const ScrollSlider : FunctionComponent<PropType> = (props) => {
    const { slides, options } = props;

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true})
    ]);
    
    const [isPlaying, setIsPlaying] = useState(false);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
          const autoScroll = emblaApi?.plugins()?.autoScroll
          if (!autoScroll) return
    
          const resetOrStop =
            autoScroll.options.stopOnInteraction === false
              ? autoScroll.reset
              : autoScroll.stop
    
          resetOrStop()
          callback()
        },
        [emblaApi]
    )

    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return
    
        const playOrStop = autoScroll.isPlaying()
          ? autoScroll.stop
          : autoScroll.play
        playOrStop()
    }, [emblaApi])

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return
    
        setIsPlaying(autoScroll.isPlaying())
        emblaApi
          .on('autoScroll:play', () => setIsPlaying(true))
          .on('autoScroll:stop', () => setIsPlaying(false))
          .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
    }, [emblaApi])

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                        {
                            slides.map((data, i) => {
                                return (
                                    <div 
                                        className={styles.embla__slide} 
                                        key={i}
                                    >
                                        <div 
                                            className={`${styles.embla__slide__number} flex flex-col items-center justify-between`}
                                        >
                                            <div 
                                                className='relative' 
                                                style={{
                                                    width: "150px",
                                                    height: "150px"
                                                }}
                                            >
                                                    <Image
                                                        src={data.src}
                                                        alt={data.alt}
                                                        fill
                                                    ></Image>
                                            </div>
                                                <Link 
                                                href={data.link} 
                                                passHref 
                                                legacyBehavior
                                            >
                                                <a target="_blank">
                                                    <p 
                                                        className=' text-lg font-bold text-true-blue pt-5'
                                                    >
                                                        {data.title}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    );
}

export default ScrollSlider;