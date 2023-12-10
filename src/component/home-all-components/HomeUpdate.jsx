import React, { useState } from 'react'
import HomeUpdateCard from './HomeUpdateCard';
import SwitchFunction from '../../pages-and-main-component/SwitchFunction'
import { SocialMediaIcons } from '../../all-datas/EveryDatas';
import Reveal from '../Reveal';

const HomeUpdate = () => {
    const [isAbove700, setIsAbove700] = useState(false);

    const handleAbove700Change = (isAbove) => {
        setIsAbove700(isAbove);
    }

    return (
        <>
            <SwitchFunction onAbove700Change={handleAbove700Change} />

            <div className={`py-10 bg-black ${isAbove700 ? 'flex justify-evenly items-center px-10' : 'mt-20'}`}>
                <div className='flex flex-col items-center'>
                    <Reveal>
                        <p className={`text-white font-bold text-center ${isAbove700 ? 'text-3xl lg:text-5xl' : 'text-xl'}`}>Subscribe for Updates</p>
                    </Reveal>
                    <Reveal>
                        <p className={`mt-2 text-center ${isAbove700 ? 'text-xl lg:text-base' : 'text-xs'}`} style={{ color: 'rgba(153, 153, 153, 1)' }}>Stay informed with fresh news sent directly to your email.</p>
                    </Reveal>
                </div>

                <form className={`rounded-3xl flex ${isAbove700 ? 'bg-black w-64 grow shrink-0 mx-10' : 'bg-white mx-3 ps-2 mt-6 items-center'}`}>
                    <input type="email" name='updateEmail' className={`custom-font outline-none ${isAbove700 ? 'text-white bg-black border-gray-600 border-y border-l w-full rounded-l-3xl text-base lg:text-3xl custom-bg-black-for-UpdateInput placeholder:text-xs py-2 ps-4 pe-6 relative left-4' : 'text-black rounded-3xl text-xs w-full bg-white placeholder-gray-600 ps-3 pe-7'}`} placeholder="Your email address" required />

                    <button className={`font-semibold text-white bg-blue-rgba rounded-3xl ${isAbove700 ? 'z-10 w-4/12 text-xs py-2 px-2' : 'px-4 text-lg py-3'}`} type='button'>Subscribe</button>
                </form>

                <div>
                    <div className={`flex justify-center ${isAbove700 ? 'gap-1 animation-leftTOright-hidden' : 'gap-3 mt-6'}`}>
                        {SocialMediaIcons.map((icon) => (
                            <HomeUpdateCard
                                key={icon.id}
                                icon={icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeUpdate