'use client';

import { Typewriter } from 'react-simple-typewriter'
import { Button } from "../../ui/button";
import Link from 'next/link';

import { typewriteWordList } from '@/assets/index'

const HeroBanner = () => {
    return (
        <div 
            style={
                { 
                    backgroundImage: `url(${"/section-background.jpg"})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                    minWidth: '100%',
                    minHeight: '630px', 
                    position: "relative",
                }
            }
        >
            <div
            style={
                {
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                }
            }
            className="flex flex-col items-center justify-top align-middle z-10"
            >
                <div className="p-5 m-5">
                    <h1 
                    className=" text-5xl font-bold text-true-blue"
                    style={{
                        textShadow : '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000'
                    }}>
                        Continental Technologies BD Limited (CTBL)
                    </h1>
                </div>
                <div className="p-5">
                    <h2 className=" text-xl font-semibold text-true-blue" style={{'width' : '1024px'}}>
                        Continental Technologies (BD) Ltd. is a team of
                        experienced professionals with an
                        established record in developing software
                        solutions that handle business processes
                        through
                        <span 
                            className=" text-2xl font-bold text-red-700"
                        >
                            <Typewriter
                                words={typewriteWordList}
                                loop={0}
                                cursor
                                cursorStyle={'_'}
                                cursorBlinking={true}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    
                </div>
                <div className="p-5">
                    <Button className=" p-5 m-3 bg-transparent text-lg font-semibold border-2 text-true-blue border-true-blue rounded-xl cursor-pointer hover:bg-white hover:text-true-blue transform transition duration-200 hover:scale-125">
                        <Link href='/products'>Explore Our Products</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;