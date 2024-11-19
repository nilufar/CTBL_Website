'use client'

import Image from 'next/image';
import styles from './statsSection.module.css';
import { Button } from '../ui/button';
import Link from 'next/link';
import CountUp from 'react-countup';

const StatsSection = () => {
    return (
        <div className="min-w-full flex justify-center items-center mb-10">
            <div className={`${styles.responsive_container} flex flex-row gap-4`}>
               

               <div className='flex-1 flex flex-col'>
                    <div className='basis-1/12'>
                        <Button className=' bg-transparent border-2 border-true-blue text-true-blue hover:bg-true-blue hover:text-white rounded-3xl'>
                            <Link href='/'>
                                About CTBL
                            </Link>
                        </Button>
                    </div>

                    <div className='basis-2/12'>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            Time has been witness
                        </h1>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            To our commitment 
                        </h1>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            To excellence
                        </h1>
                    </div>

                    <div className='basis-5/12'>
                        <p className=' text-xl'>
                            It is not software that only meets your expectation. Rather it is used to find all of the solutions in a complete package.
                        </p>
                        <p className=' text-xl'>
                            We can also create customized products if you need any. If you want to add more functionalities just discuss them with us. We can add more features to our existing products.
                        </p> 
                    </div>

                    {/* <div className='basis-5/12 flex flex-row justify-center items-centers'>
                        <div className='flex-1 flex flex-row justify-center items-centers gap-3'>
                            <div className='flex flex-col items-center gap-3'>
                                <CountUp
                                    end={5}
                                    duration={10}
                                    className=' text-7xl text-davy-grey font-bold'
                                ></CountUp>
                                <p className='text-xl text-davy-grey font-light'>Products</p>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-row justify-center items-centers gap-3'>
                            <div className='flex flex-col items-center gap-3'>
                                <CountUp
                                    end={852}
                                    duration={10}
                                    className=' text-7xl text-davy-grey font-bold'
                                ></CountUp>
                                <p className='text-xl text-davy-grey font-light'>Units</p>
                            </div>
                        </div>
                    </div> */}
               </div>
               <div className='flex-1 relative'>
                    <Image
                        src='/graph-image.png'
                        alt='Graph Image'
                        fill
                    ></Image>
               </div>
            </div>
            
        </div>
    );
}

export default StatsSection;