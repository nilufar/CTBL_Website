import Image from 'next/image';
import styles from './bannerBottom.module.css';

import { bannerBottomDetails } from '@/assets/index'

const BannerBottom = () => {
    return (
        <div className={`${styles.overlap} flex justify-center`}>
            <div className={`${styles.responsive_container} flex flex-row gap-3 justify-center items-center`}>
                {
                    bannerBottomDetails.map((data, i) => {
                        return (
                            <div 
                                className={`${styles.image_card} flex-1 flex flex-col justify-center border-4 border-white`}
                                key={i}
                            >
                                <div 
                                    className='flex-1 relative'
                                    style={{
                                        minWidth:'420px',
                                        minHeight: "260px",
                                    }}
                                >
                                    <Image 
                                        src={data.src}
                                        alt={data.alt}
                                        fill
                                    ></Image>
                                </div>
                                <div className='flex-1 mt-2'>
                                    <p className='text-2xl font-semibold mb-2'>
                                        { data.title }
                                    </p>
                                    <p>
                                        { data.description }
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BannerBottom;