import React, { useState } from 'react'
import { ClientReviewDatas } from '../../all-datas/EveryDatas';
import HomeClientCard from './HomeClientCard';
import RightArrow from '../../assets/right-arrow-client-review.svg'
import LeftArrow from '../../assets/left-arrow-client-review.svg'
import Reveal from '../Reveal';


const HomeClient = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        if (window.innerWidth > 1024) {
            setCurrentIndex((currentIndex + 3) % ClientReviewDatas.length);
        } else {
            setCurrentIndex((currentIndex + 1) % ClientReviewDatas.length);
        }
    }

    const prevReview = () => {
        if (window.innerWidth > 1024) {
            setCurrentIndex((currentIndex - 3 + ClientReviewDatas.length) % ClientReviewDatas.length)
        } else {
            setCurrentIndex((currentIndex - 1 + ClientReviewDatas.length) % ClientReviewDatas.length);
        }
    }


    return (
        <>
            <div className='my-28 py-3 mx-3'>
                <Reveal>
                    <p className='text-4xl lg:text-5xl xl:text-7xl font-extrabold text-center'>What My <span className='primary-text'>Clients </span>Say</p>
                    <p className='sm:text-xs md:text-lg lg:text-xl xl:text-3xl mx-10 md:mx-40 font-medium text-center'>We deliver excellent service and our customers appreciate it. Check out their positive <span className='primary-text'>feedback </span>and ratings on our website here.</p>
                </Reveal>



                <div className='mx-5 mt-5 flex flex-col justify-center items-center gap-4 xl:flex xl:flex-row xl:gap-3 xl:px-5'>
                    {window.innerWidth > 1024 ? (
                        ClientReviewDatas.slice(currentIndex, currentIndex + 3).map((reviewData, index) => (
                            <HomeClientCard key={reviewData.id} reviewData={reviewData} index={index} />
                        ))
                    ) : (
                        ClientReviewDatas.slice(currentIndex, currentIndex + 1).map((reviewData, index) => (
                            <HomeClientCard key={reviewData.id} reviewData={reviewData} index={index} />
                        ))
                    )}
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <img className='mx-5 cursor-pointer' onClick={nextReview} src={LeftArrow} alt=" " />
                    <img className='mx-5 cursor-pointer' onClick={prevReview} src={RightArrow} alt=" " />
                </div>
            </div>
        </>
    )
}

export default HomeClient