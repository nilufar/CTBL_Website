'use client';

import Image from 'next/image';
import styles from './industryGrid.module.css'

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

const IndustryGrid = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: false, delay: 1000 })
      ])
    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi])

    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: false, delay: 1000 })
      ])
    const toggleAutoplay2 = useCallback(() => {
        const autoplay = emblaApi2?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi2])

    const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: false, delay: 1000 })
      ])
    const toggleAutoplay3 = useCallback(() => {
        const autoplay = emblaApi3?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi3])

    const [emblaRef4, emblaApi4] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: false, delay: 1000 })
      ])
    const toggleAutoplay4 = useCallback(() => {
        const autoplay = emblaApi4?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi4])

    const [emblaRef5, emblaApi5] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: false, delay: 1000 })
      ])
    const toggleAutoplay5 = useCallback(() => {
        const autoplay = emblaApi5?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi5])

    const [emblaRef6, emblaApi6] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: false, delay: 1000 })
      ])
    const toggleAutoplay6 = useCallback(() => {
        const autoplay = emblaApi6?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi6])

    const [emblaRef7, emblaApi7] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: false, delay: 1000 })
      ])
    const toggleAutoplay7 = useCallback(() => {
        const autoplay = emblaApi7?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi7])


    const [emblaRef8, emblaApi8] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: false, delay: 1000 })
      ])
    const toggleAutoplay8 = useCallback(() => {
        const autoplay = emblaApi8?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi8])

    return (
        <div  className={`${styles.responsive_container} flex flex-col items-center`}>
            <div className=" text-4xl font-bold text-white p-4">
                Industry Solutions
            </div>
            <div className='flex flex-col '>
                <div className=' flex flex-row'>
                    <div className={`${styles.info_card} flex flex-col gap-3 items-center justify-center bg-ghost-white m-4` } 
                    onMouseEnter={toggleAutoplay} onMouseLeave={toggleAutoplay}>
                        <div>
                            <Image 
                            src='/garments-industries-alt.png' 
                            alt='Garments Industry Image'
                            width={84}
                            height={84}></Image>
                        </div>
                        <div className='text-2xl font-bold text-true-blue flex flex-col items-center justify-center hover:text-saffron cursor-pointer'>
                            <p>Garments </p>
                            <p>Industries</p>
                        </div>

                        {/* new carousel */}
                        <div className='w-40'>
                            <div className={`${styles.embla}`}>
                                <div className={`${styles.embla__viewport}`} ref={emblaRef}>
                                    <div className={`${styles.embla__container}`}>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Inventory</p>
                                                    <p>& Warehouse</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Supply</p>
                                                    <p>Chain</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Product</p>
                                                    <p>Development</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Costing</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Planning</p>
                                                    <p>& Production</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Sales</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Credit</p>
                                                    <p>Control</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Commercial</p>
                                                    <p>Import</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Commercial</p>
                                                    <p>Export</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Complain</p>
                                                    <p>Module</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Financial</p>
                                                    <p>Accounting</p>
                                                </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.info_card} flex flex-col gap-3 items-center justify-center bg-ghost-white m-4` }
                    onMouseEnter={toggleAutoplay2} onMouseLeave={toggleAutoplay2}>
                        <div>
                            <Image 
                                src='/textile-industries-alt.png' 
                                alt='Textile Industry Image'
                                width={84}
                                height={84}></Image>
                        </div>
                        <div className='text-2xl font-bold text-true-blue flex flex-col items-center justify-center hover:text-saffron cursor-pointer'>
                            <p>Textile </p>
                            <p>Industries</p>
                        </div>

                        {/* new carousel */}
                        <div className='w-40'>
                            <div className={`${styles.embla}`}>
                                <div className={`${styles.embla__viewport}`} ref={emblaRef2}>
                                    <div className={`${styles.embla__container}`}>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Financial</p>
                                                    <p>Accounting</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Inventory</p>
                                                    <p>& Warehouse</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Supply</p>
                                                    <p>Chain</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Product</p>
                                                    <p>Development</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Costing</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Planning</p>
                                                    <p>& Production</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Sales</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Credit</p>
                                                    <p>Control</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Commercial</p>
                                                    <p>Import</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Commercial</p>
                                                    <p>Export</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center text-sm font-bold`}>
                                                    <p>Complain</p>
                                                    <p>Module</p>
                                                </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.info_card} flex flex-col gap-3 items-center justify-center bg-ghost-white m-4` }
                    onMouseEnter={toggleAutoplay3} onMouseLeave={toggleAutoplay3}>
                        <div>
                            <Image 
                                src='/real-estate.png' 
                                alt='Footwear Industry Image'
                                width={84}
                                height={84}></Image>
                        </div>
                        <div className='text-2xl font-bold text-true-blue flex flex-col items-center justify-center hover:text-saffron cursor-pointer'>
                            <p>Real Estate </p>
                            <p>Industries</p>
                        </div>

                        {/* new carousel */}
                        <div className='w-40'>
                            <div className={`${styles.embla}`}>
                                <div className={`${styles.embla__viewport}`} ref={emblaRef3}>
                                    <div className={`${styles.embla__container}`}>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Land</p>
                                                    <p className='text-sm font-bold'>Procurement</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Mouza</p>
                                                    <p className='text-sm font-bold'>Creation</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Projectwise</p>
                                                    <p className='text-sm font-bold'>Documentation</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Media</p>
                                                    <p className='text-sm font-bold'>Creation</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Baina</p>
                                                    <p className='text-sm font-bold'>Creation</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Registration</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Witness</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Record</p>
                                                    <p className='text-sm font-bold'>Room</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Survey</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Marketing &</p>
                                                    <p className='text-sm font-bold'>Collection</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Flat & Plot</p>
                                                    <p className='text-sm font-bold'>Management</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>MIS</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p className='text-sm font-bold'>Inventory</p>
                                                </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.info_card} flex flex-col gap-3 items-center justify-center bg-ghost-white m-4` }
                    onMouseEnter={toggleAutoplay4} onMouseLeave={toggleAutoplay4}>
                        <div>
                            <Image 
                                src='/trade-industries.png' 
                                alt='Chemical Industry Image'
                                width={84}
                                height={84}></Image>
                        </div>
                        <div className='text-2xl font-bold text-true-blue flex flex-col items-center justify-center hover:text-saffron cursor-pointer'>
                            <p>Trading</p>
                            <p>Industries</p>
                        </div>

                        {/* new carousel */}
                        <div className='w-40'>
                            <div className={`${styles.embla}`}>
                                <div className={`${styles.embla__viewport}`} ref={emblaRef4}>
                                    <div className={`${styles.embla__container}`}>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number}`}>
                                                    <p className='text-sm font-bold'>Inventory</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number}`}>
                                                    <p className='text-sm font-bold'>Purchase</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number}`}>
                                                    <p className='text-sm font-bold'>Sales</p>
                                                </div>
                                         </div>
                                         <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number}`}>
                                                    <p className='text-sm font-bold'>Accounting</p>
                                                </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-row'>
                    <div className={`${styles.info_card} flex flex-col gap-3 items-center justify-center bg-ghost-white m-4` }
                    onMouseEnter={toggleAutoplay5} onMouseLeave={toggleAutoplay5}>
                        <div>
                            <Image 
                            src='/it-infrastructure.png' 
                            alt='Embroidery Industry Image'
                            width={84}
                            height={84}></Image>
                        </div>
                        <div className='text-2xl font-bold text-true-blue flex flex-col items-center justify-center hover:text-saffron cursor-pointer'>
                            <p>IT </p>
                            <p>Infrastructure</p>
                        </div>

                        {/* new carousel */}
                        <div className='w-40'>
                            <div className={`${styles.embla}`}>
                                <div className={`${styles.embla__viewport}`} ref={emblaRef5}>
                                    <div className={`${styles.embla__container} text-sm font-bold`}>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Network</p>
                                                    <p>Security</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Cyber</p>
                                                    <p>Security</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Hardware</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Manage</p>
                                                    <p>IT services</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Disaster</p>
                                                    <p>Recovery</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Monitoring</p>
                                                    <p>& Analytics</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Remote</p>
                                                    <p>Support</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Desktop</p>
                                                    <p>Support</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Help Desk</p>
                                                    <p>Ticketing System</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.info_card} flex flex-col gap-3 items-center justify-center bg-ghost-white m-4` }
                    onMouseEnter={toggleAutoplay6} onMouseLeave={toggleAutoplay6}>
                        <div>
                            <Image 
                                src='/ngo.png' 
                                alt='Public Organization Image'
                                width={84}
                                height={84}></Image>
                        </div>
                        <div className='text-2xl font-bold text-true-blue flex flex-col items-center justify-center hover:text-saffron cursor-pointer'>
                            <p>Non-Profit</p>
                            <p>Organizations</p>
                        </div>
                        
                        {/* new carousel */}
                        <div className='w-40'>
                            <div className={`${styles.embla}`}>
                                <div className={`${styles.embla__viewport}`} ref={emblaRef6}>
                                    <div className={`${styles.embla__container} text-sm font-bold`}>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Accounting</p>
                                                    <p>Systems</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Banking</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Investment</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>General</p>
                                                    <p>Savings</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Collection</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>DPS</p>
                                                    <p>Management</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>FDR</p>
                                                    <p>Management</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.info_card} flex flex-col gap-3 items-center justify-center bg-ghost-white m-4` }
                    onMouseEnter={toggleAutoplay7} onMouseLeave={toggleAutoplay7}>
                        <div>
                            <Image 
                                src='/courier-industries.png' 
                                alt='Apparel Industries Image'
                                width={84}
                                height={84}></Image>
                        </div>
                        <div className='text-2xl font-bold text-true-blue flex flex-col items-center justify-center hover:text-saffron cursor-pointer'>
                            <p>Courier </p>
                            <p>Industries</p>
                        </div>
                        
                        {/* new carousel */}
                        <div className='w-40'>
                            <div className={`${styles.embla}`}>
                                <div className={`${styles.embla__viewport}`} ref={emblaRef7}>
                                    <div className={`${styles.embla__container} text-sm font-bold`}>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Dispatchers</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Drivers</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Deliveries</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Real time</p>
                                                    <p>Tracking</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.info_card} flex flex-col gap-3 items-center justify-center bg-ghost-white m-4` }
                    onMouseEnter={toggleAutoplay8} onMouseLeave={toggleAutoplay8}>
                        <div>
                            <Image 
                                src='/hotel-industries.png' 
                                alt='Healthcare Service Image'
                                width={84}
                                height={84}></Image>
                        </div>
                        <div className='text-2xl font-bold text-true-blue flex flex-col items-center justify-center hover:text-saffron cursor-pointer'>
                            <p>Hotel</p>
                            <p>Industries</p>
                        </div>

                        {/* new carousel */}
                        <div className='w-40'>
                            <div className={`${styles.embla}`}>
                                <div className={`${styles.embla__viewport}`} ref={emblaRef8}>
                                    <div className={`${styles.embla__container} text-sm font-bold`}>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Frontdesk</p>
                                                    <p>Management</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Back</p>
                                                    <p>Office</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>CRM</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Reservation</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Point of Sale</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>House</p>
                                                    <p>Keeping</p>
                                                </div>
                                        </div>
                                        <div className={`${styles.embla__slide}`}>
                                                <div className={`${styles.embla__slide__number} flex flex-col items-center justify-center`}>
                                                    <p>Revenue</p>
                                                    <p>Management</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndustryGrid;