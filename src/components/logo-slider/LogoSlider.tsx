'use client';

import styles from './logoSlider.module.css';

import { EmblaOptionsType } from 'embla-carousel';
import ScrollSlider from './scroll-slider/ScrollSlider';

import { logoSliderDetails } from '@/assets/index';

const OPTIONS: EmblaOptionsType = { loop: true }

const LogoSlider = () => {
    return (
        <div className="min-w-full flex justify-center items-center">
            <div className={styles.responsive_container}>
                <ScrollSlider slides={logoSliderDetails} options={OPTIONS}></ScrollSlider>
            </div>
        </div>
    );
}

export default LogoSlider;