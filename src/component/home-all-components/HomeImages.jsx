import React, { useEffect, useState } from 'react'
import HeroImage1 from '../../assets/hero-images1.svg'
import HeroImage2 from '../../assets/hero-images2.svg'
import HeroImage3 from '../../assets/hero-images3.svg'
import HeroImage4 from '../../assets/hero-images4.svg'
import HeroImageSaly from '../../assets/hero-main-image-saly.svg'
import AllHero1to4ImgPhone from '../../assets/main4-hero-img-group.svg'
import SalyPhone from '../../assets/phone-saly-hero-main-img.svg'

import '../../styles/homeimage.css'
import Reveal from '../Reveal'


const HomeImages = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>

            {windowWidth < 870 ? (
                <>
                    <Reveal>
                        <div className='overflow-hidden mt-40 flex flex-col justify-center items-center relative'>

                            <img className='custom-width-all4img-inone' src={AllHero1to4ImgPhone} alt=" " />

                            <img className='w-7/12 absolute mt-3' src={SalyPhone} alt=" " />
                        </div>
                    </Reveal>

                    <div className='relative z-50'>
                        <div className='hero-current-status-div flex justify-around items-center' >
                            <Reveal><div>
                                <p className='text-sm md:text-2xl xl:text-4xl font-extrabold -mb-1'>100+</p>
                                <p className='text-xs md:text-base xl:text-xl font-medium'>Project Completed</p>
                            </div>
                            </Reveal>
                            <Reveal><div>
                                <p className='text-sm md:text-2xl xl:text-4xl font-extrabold -mb-1'>70+</p>
                                <p className='text-xs md:text-base xl:text-xl font-medium'>Design Project</p>
                            </div>
                            </Reveal>
                            <Reveal><div>
                                <p className='text-sm md:text-2xl xl:text-4xl font-extrabold -mb-1'>30+</p>
                                <p className='text-xs md:text-base xl:text-xl font-medium'>Dev Project</p>
                            </div>
                            </Reveal>
                            <Reveal><div>
                                <p className='text-sm md:text-2xl xl:text-4xl font-extrabold -mb-1'>99.9+</p>
                                <p className='text-xs md:text-base xl:text-xl font-medium'>Satisfied Clients</p>
                            </div>
                            </Reveal>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Reveal>
                        <div className='overflow-hidden mt-40'>
                            <div className='hero-img1-to-img4'>
                                <img className='hero-img1' src={HeroImage1} alt=" " />
                                <div className='hero-img2-and-img3-div'>
                                    <img className='hero-img2' src={HeroImage2} alt=" " />

                                    <img className='hero-img3' src={HeroImage3} alt=" " />
                                </div>
                                <img className='hero-img4' src={HeroImage4} alt=" " />
                            </div>



                            <div className='hero-saly-div'>
                                <img className='hero-saly-img' src={HeroImageSaly} alt=" " />
                            </div>
                        </div>
                    </Reveal>

                    <div className='relative z-50'>
                        <div className='hero-current-status-div flex justify-around items-center' >
                            <Reveal>
                                <p className='text-sm md:text-2xl lg:text-4xl font-extrabold'>My Recent <span className='primary-text'>Work</span></p>
                            </Reveal>

                            <Reveal>
                                <div>
                                    <p className='text-sm md:text-2xl xl:text-4xl font-extrabold -mb-1'>100+</p>
                                    <p className='text-xs md:text-base xl:text-xl font-medium'>Project Completed</p>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div>
                                    <p className='text-sm md:text-2xl xl:text-4xl font-extrabold -mb-1'>70+</p>
                                    <p className='text-xs md:text-base xl:text-xl font-medium'>Design Project</p>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div>
                                    <p className='text-sm md:text-2xl xl:text-4xl font-extrabold -mb-1'>30+</p>
                                    <p className='text-xs md:text-base xl:text-xl font-medium'>Dev Project</p>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div>
                                    <p className='text-sm md:text-2xl xl:text-4xl font-extrabold -mb-1'>99.9+</p>
                                    <p className='text-xs md:text-base xl:text-xl font-medium'>Satisfied Clients</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default HomeImages