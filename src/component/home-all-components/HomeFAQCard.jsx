import React, { useState } from 'react'
import Reveal from '../Reveal';

const HomeFAQCard = ({ faq }) => {
    const [isHidden, setIsHidden] = useState(false);

    const { title, description } = faq;

    const handleToggle = () => {
        setIsHidden(!isHidden);
    }

    return (
        <>
            <Reveal>
                <div className={`sm:mx-10 lg:mx-20 py-4 px-4 cursor-pointer ${isHidden ? 'rounded-2xl bg-black' : 'border-white border-b-4'}`} onClick={handleToggle}>
                    <div>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs sm:text-xl lg:text-2xl xl:text-4xl font-bold'>{title}</p>
                            <div>
                                {isHidden ? (
                                    <p className='font-bold mx-3'>&#8743;</p>
                                ) : (
                                    <p className='font-bold mx-3'>&#8744;</p>
                                )}
                            </div>
                        </div>
                        <div className={`${isHidden ? 'block' : 'hidden'}`}>
                            <p className='text-xs sm:text-lg lg:text-xl xl:text-2xl font-normal'>{description}</p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </>
    )
}

export default HomeFAQCard