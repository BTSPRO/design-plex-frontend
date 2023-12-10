import React, { useEffect, useState } from 'react'
import { PortfolioDatas } from '../../all-datas/EveryDatas';
import HomePortfolioCard from './HomePortfolioCard';
import Reveal from '../Reveal';



const HomePortfolio = () => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const buttons = document.querySelectorAll('.custom-btn');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                buttons.forEach((b) => b.classList.remove('active-btn'));
                button.classList.add('active-btn');
            })
        })
    }, [])


    useEffect(() => {
        const WebDesignFiltered = PortfolioDatas.filter(item => item.category === 'web design')
        setFilteredData(WebDesignFiltered);
    }, [])

    const handleCategoryFilter = (category) => {
        if (category === 'all') {
            setFilteredData(PortfolioDatas);
        } else {
            const filteredItems = PortfolioDatas.filter(item => item.category === category);
            setFilteredData(filteredItems);
        }
    };



    return (
        <>
            <div className='my-28 py-3 mx-3'>
                <Reveal>
                    <p className='text-4xl lg:text-5xl xl:text-7xl font-extrabold text-center'>Let’s a have a look at my <span className='primary-text'>portfolio</span></p>
                    <p className='sm:text-xs md:text-lg lg:text-xl xl:text-3xl mx-10 md:mx-40 font-medium text-center'>See my creative works in my <span className='primary-text'>portfolio</span> Collection. Spend a little time looking at what I've made over the years.</p>
                </Reveal>


                {/* hidden when below 640 px  */}
                <div className='mt-16 hidden sm:flex sm:justify-around sm:items-center mx-3 lg:mx-28'>
                    <Reveal><button className='text-xl col-span-1 font-medium px-3 custom-btn' type='button' onClick={() => handleCategoryFilter('all')}>All</button></Reveal>
                    <Reveal><button className='text-xl col-span-1 font-medium px-3 custom-btn active-btn' type='button' onClick={() => handleCategoryFilter('web design')}>Web Design</button></Reveal>
                    <Reveal><button className='text-xl col-span-1 font-medium px-3 custom-btn' type='button' onClick={() => handleCategoryFilter('app design')}>App Design</button></Reveal>
                    <Reveal><button className='text-xl font-medium px-3 custom-btn' type='button' onClick={() => handleCategoryFilter('branding')}>Dashboard</button></Reveal>
                    <Reveal><button className='text-xl font-medium px-3 custom-btn' type='button' onClick={() => handleCategoryFilter('dashboard')}>Branding</button></Reveal>
                </div>


                {/* hidden when above 640 px  */}
                <div className='mt-16 flex flex-col sm:hidden mx-1'>
                    <div className='flex justify-evenly'>
                        <Reveal><button className='text-xl font-medium custom-btn' type='button' onClick={() => handleCategoryFilter('all')}>All</button></Reveal>
                        <Reveal><button className='text-xl font-medium custom-btn active-btn' type='button' onClick={() => handleCategoryFilter('web design')}>Web Design</button></Reveal>
                        <Reveal><button className='text-xl font-medium custom-btn' type='button' onClick={() => handleCategoryFilter('app design')}>App Design</button></Reveal>
                    </div>
                    <div className='flex justify-evenly mt-4'>
                        <Reveal><button className='text-xl font-medium custom-btn' type='button' onClick={() => handleCategoryFilter('branding')}>Dashboard</button></Reveal>
                        <Reveal><button className='text-xl font-medium custom-btn' type='button' onClick={() => handleCategoryFilter('dashboard')}>Branding</button></Reveal>
                    </div>
                </div>



                <div className='mt-16 flex flex-col justify-around items-center gap-3 lg:grid lg:grid-cols-3 lg:w-fit lg:mx-auto'>
                    {filteredData.map((portData) => (
                        <HomePortfolioCard key={portData.id} portData={portData} />
                    ))}
                </div>





                <div className='flex justify-center'>
                    <button className='text-white bg-black mt-20 rounded-xl text-sm py-2 px-3 md:text-2xl md:pt-4 md:pb-2 md:px-6' type='button'>View More</button>
                </div>
            </div>
        </>
    )
}

export default HomePortfolio