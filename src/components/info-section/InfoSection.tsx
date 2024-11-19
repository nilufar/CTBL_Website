'use client'

import Image from 'next/image';
import styles from './infoSection.module.css';
import { Button } from '../ui/button';
import Link from 'next/link';
import CountUp from 'react-countup';

const InfoSection = () => {
    return (
        <div className="min-w-full flex justify-center items-center mb-10">
            <div className={`${styles.responsive_container} flex flex-row gap-4`}>
               <div className='flex-1 relative'>
                    <Image
                        src='/group-avatar.jpg'
                        alt='Info Image'
                        fill
                    ></Image>
               </div>

               <div className='flex-1 flex flex-col'>
                    <div className='basis-1/12'>
                        <Button className=' bg-transparent border-2 border-true-blue text-true-blue hover:bg-true-blue hover:text-white rounded-3xl'>
                            <Link href='/'>
                                About CTBL
                            </Link>
                        </Button>
                    </div>

                    {/* <div className='basis-3/12'>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            One Of The Leading
                        </h1>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            Software Companies In
                        </h1>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            Bangladesh
                        </h1>
                    </div> */}

                    <div className='basis-3/12'>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            Where Ideas
                        </h1>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            Meet
                        </h1>
                        <h1 className=' text-4xl text-true-blue font-bold'>
                            Implementation
                        </h1>
                    </div>

                    <div className='basis-5/12'>
                        <p className=' text-xl'>
                            CTBL is a competent provider of any kind of software solutions including mission critical business applications, complex engineering of software, data centric analytical software, smart device solutions, web solutions and so on. Our expertise lies in clearly perceiving the business goals of our customers, choosing the most appropriate technologies and efficiently developing solutions catered to the business needs.
                        </p>
                    </div>

                    {/* <div className='basis-3/12 flex flex-row justify-center items-centers'>
                        <div className='flex-1 flex flex-row justify-center items-centers gap-3'>
                            <div className='flex flex-col items-center gap-3'>
                                <CountUp
                                    end={200}
                                    duration={10}
                                    className=' text-7xl text-davy-grey font-bold'
                                ></CountUp>
                                <p className='text-xl text-davy-grey font-light'>Buyers Served</p>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-row justify-center items-centers gap-3'>
                            <div className='flex flex-col items-center gap-3'>
                                <CountUp
                                    end={1102}
                                    duration={10}
                                    className=' text-7xl text-davy-grey font-bold'
                                ></CountUp>
                                <p className='text-xl text-davy-grey font-light'>Projects</p>
                            </div>
                        </div>
                    </div> */}
               </div>
            </div>
            
        </div>
    );
}

export default InfoSection;