import React, { useEffect, useState } from 'react'
import SeeMoreArrowImg from '../../assets/see-more-arrow.svg'
import SpringArrowImg from '../../assets/home-recent-work-spring.svg'
import PaymentImg from '../../assets/home-recent-work-payment-img.svg'
import '../../styles/homerecentwork.css'
import Reveal from '../Reveal'


const HomeRecentWork = () => {
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
                <div className='px-16 my-28 home-recent-work-div'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <p className='text-6xl font-extrabold home-recent-work-heading'>My Recent <span className='primary-text'>Work</span></p>
                            <img className='home-recent-work-spring' src={SpringArrowImg} alt=" " />
                        </div>

                        <div className='flex justify-center items-center w-fit home-recent-work-see-more mt-6 cursor-pointer'>
                            <p className='text-xl home-recent-work-see-more-text font-bold me-2'>See More</p>
                            <img className='w-5 mb-3 home-recent-work-see-more-img' src={SeeMoreArrowImg} alt=" " />
                        </div>
                    </div>


                    <div className='px-4 py-1'>
                        <Reveal>
                            <img src={PaymentImg} alt=" " />
                        </Reveal>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex home-recent-work-see-more-figma-like'>
                            <Reveal>
                                <p className='text-xl home-recent-work-see-more-text home-recent-work-see-more-figma-like-all-p font-medium bg-white text-black rounded-xl w-fit'>web Design</p>
                            </Reveal>
                            <Reveal>
                                <p className='text-xl home-recent-work-see-more-text home-recent-work-see-more-figma-like-all-p font-medium bg-white text-black rounded-xl w-fit'>Figma</p>
                            </Reveal>
                            <Reveal>
                                <p className='text-xl home-recent-work-see-more-text home-recent-work-see-more-figma-like-all-p font-medium bg-white text-black rounded-xl w-fit'>UI Design</p>
                            </Reveal>
                        </div>

                        <Reveal>
                            <p className='text-4xl hero-recent-work-dec-heading text-center font-extrabold'><span className='primary-text'>Cardverse</span> - Payment Landing Page</p>
                        </Reveal>

                        <Reveal>
                            <p className='text-3xl hero-recent-work-dec-heading-desc font-medium text-center'><span className='font-extrabold'>Cardverse:</span> A User-Friendly Destination for All Your Online Payments. Simple, Secure, and Designed with You in Mind.</p>
                        </Reveal>
                    </div>
                </div>
            ) : (
                <div className='px-16 my-28 home-recent-work-div'>
                    <div className='flex justify-between items-center relative'>
                        <div>
                            <img className='spring-img-hero' src={SpringArrowImg} alt=" " />
                        </div>

                        <div className='flex justify-center items-center w-fit home-recent-work-see-more mt-6 cursor-pointer'>
                            <p className='text-xl home-recent-work-see-more-text font-bold me-2'>See More</p>
                            <img className='w-5 mb-3 home-recent-work-see-more-img' src={SeeMoreArrowImg} alt=" " />
                        </div>
                    </div>


                    <div className='px-4 py-1'>
                        <Reveal>
                            <img src={PaymentImg} alt=" " />
                        </Reveal>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex home-recent-work-see-more-figma-like'>
                            <Reveal>
                                <p className='text-xl home-recent-work-see-more-text home-recent-work-see-more-figma-like-all-p font-medium bg-white text-black rounded-xl w-fit'>web Design</p>
                            </Reveal>
                            <Reveal>
                                <p className='text-xl home-recent-work-see-more-text home-recent-work-see-more-figma-like-all-p font-medium bg-white text-black rounded-xl w-fit'>Figma</p>
                            </Reveal>
                            <Reveal>
                                <p className='text-xl home-recent-work-see-more-text home-recent-work-see-more-figma-like-all-p font-medium bg-white text-black rounded-xl w-fit'>UI Design</p>
                            </Reveal>
                        </div>

                        <Reveal>
                            <p className='text-4xl hero-recent-work-dec-heading text-center font-extrabold'><span className='primary-text'>Cardverse</span> - Payment Landing Page</p>
                        </Reveal>

                        <Reveal>
                            <p className='text-3xl hero-recent-work-dec-heading-desc font-medium text-center'><span className='font-extrabold'>Cardverse:</span> A User-Friendly Destination for All Your Online Payments. Simple, Secure, and Designed with You in Mind.</p>
                        </Reveal>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomeRecentWork