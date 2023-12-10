import React from 'react'
import { OurServicesCardDatas } from '../../all-datas/EveryDatas'
import HomeOurServicesCard from './HomeOurServicesCard'
import Reveal from '../Reveal'


const HomeOurServices = () => {
    return (
        <>
            <div className='my-28 py-3 mx-3'>
                <Reveal>
                    <p className='text-4xl lg:text-5xl xl:text-7xl font-extrabold text-center'>Our <span className='primary-text'>services</span></p>
                    <p className='sm:text-xs md:text-lg lg:text-xl xl:text-3xl font-medium text-center'>Ready to boost your brand's image? Order now and get best services from <span className='primary-text'>Design Hub</span> experts!</p>
                </Reveal>



                <div className="bg-black rounded-3xl px-2 py-16 flex flex-col justify-center items-center gap-5 sm:flex sm:flex-col sm:gap-7 sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:mx-52 md:mt-10 md:py-8 md:items-center md:gap-10 lg:flex lg:flex-row lg:justify-evenly lg:mx-0">
                    {OurServicesCardDatas.map((card) => (
                        <HomeOurServicesCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeOurServices