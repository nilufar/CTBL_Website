import Image from 'next/image';
import { Button } from '../ui/button';
import styles from './teamSection.module.css'
import { ArrowBigRight } from 'lucide-react';
import Link from 'next/link';

import { teamSectionDetails } from '@/assets/index'

const TeamSection = () => {
    return (
        <div className={`${styles.responsive_container} m-10`}>
            <div className={`${styles.responsive_container} flex flex-row gap-5 justify-center items-center`}>
                <div className="flex flex-col items-start gap-5">
                    <div className='text-true-blue text-lg'>
                        <p>Board of Directors</p>
                    </div>
                    <div className='text-3xl font-bold'>
                        <p>Meet the Board</p>
                    </div>
                    <div>
                    <p>Introducing our team of talented and skilled professionals</p> 
                    <p>who are ready to increase your productivity</p>
                    <p>and bring your business to the new level of sustainability</p> 
                    </div>
                    <div>
                        <Link href={'./about'}>
                            <Button className='bg-true-blue text-white p-5 hover:bg-true-blue transform transition duration-200 hover:scale-125'>
                                Our Team
                                <ArrowBigRight></ArrowBigRight>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    {
                        teamSectionDetails.map((data, i) => {
                            return (
                                <div 
                                    className='flex flex-col gap-3'
                                    key={i}
                                >
                                    <div 
                                        className='relative' 
                                        style={{
                                            width : "250px",
                                            height: "290px"
                                        }}
                                    >
                                        <Image 
                                            src={data.src}
                                            alt={data.alt} 
                                            fill
                                        ></Image>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <p className='text-xl font-bold'>
                                            { data.name }
                                        </p>
                                        <p>{ data.post }</p>
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

export default TeamSection;