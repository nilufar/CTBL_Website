import Image from 'next/image';
import styles from './featureChart.module.css'

import { featureChartData } from '@/assets/index';

const FeatureChart = () => {
    return (
        <div className={`${styles.container} flex flex-col justify-center items-center m-5`}>
            <div 
                className="grid grid-cols-3 grid-rows-2 gap-5"
            >
                {
                    featureChartData.map((data, i) => {
                        return (
                            <div 
                                className='flex-1 flex flex-row'
                                key={i}
                            >
                                <div className=' basis-1/3'>
                                    <Image
                                        src={ data.src }
                                        alt={ data.alt }
                                        height={95}
                                        width={95}
                                    ></Image>
                                </div>
                                <div className=' basis-2/3 flex flex-col'>
                                    <div>
                                        <p className=' text-black text-xl font-bold'>
                                            { data.title }
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' text-dark-liver font-light'>
                                            { data.description }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FeatureChart;