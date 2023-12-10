import React from 'react'
import CommaImg from '../../assets/comma.svg'
import Reveal from '../Reveal';

const HomeClientCard = ({ reviewData }) => {
    const { name, email, imageURL, review } = reviewData;

    return (
        <>
            <div className='bg-black rounded-3xl py-4 px-4 flex flex-col justify-center items-center sm:w-96 xl:w-fit'>
                <Reveal><img src={CommaImg} alt=" " /></Reveal>
                <Reveal><p className='mt-4 text-base lg:text-lg font-medium px-3 text-center'>{review}</p></Reveal>

                <Reveal>
                    <div className='flex'>
                        <img src={imageURL} alt=' ' />

                        <div className='mt-3 ms-2'>
                            <p className='text-xl lg:text-2xl font-bold'>{name}</p>
                            <p className='text-xs md:text-base lg:text-lg font-medium -mt-5'>{email}</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </>
    )
}

export default HomeClientCard