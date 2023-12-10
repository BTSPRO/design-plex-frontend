import React from 'react'
import { FaqDatas } from '../../all-datas/EveryDatas';
import HomeFAQCard from './HomeFAQCard';

import '../../styles/homefaq.css';
import Reveal from '../Reveal';

const HomeFAQ = () => {
    return (
        <>
            <div className='my-28 py-3 mx-3'>
                <Reveal>
                    <p className='text-4xl lg:text-5xl xl:text-7xl font-extrabold text-center'>Frequently Asked <span className='primary-text'>Questions</span></p>
                    <p className='sm:text-xs md:text-lg lg:text-xl xl:text-3xl mx-10 md:mx-40 font-medium text-center'>Our <span className='primary-text'>FAQ </span>page has answers to many common questions. If you are looking for more information, please check it out.</p>
                </Reveal>



                <div className='mt-20 flex flex-col gap-4 mx-2'>
                    {FaqDatas.map((faq) => (
                        <HomeFAQCard key={faq.id} faq={faq} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default HomeFAQ