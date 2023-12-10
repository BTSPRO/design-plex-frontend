import React from 'react'
import MemberstackImg from '../../assets/memberstack.svg'
import CometchatImg from '../../assets/cometchat.svg'
import FlowbaseImg from '../../assets/flowbase.svg'
import NectarImg from '../../assets/nectar.svg'
import AstroImg from '../../assets/astro.svg'
import FailoryImg from '../../assets/failory.svg'
import '../../styles/homepatners.css'

const HomePatners = () => {
    return (
        <>
            <div className='bg-black py-2 px-3 flex justify-around items-center home-patners-div'>
                <img className='home-patners-img' src={MemberstackImg} alt="Memberstack" />
                <img className='home-patners-img' src={CometchatImg} alt="Cometchat" />
                <img className='home-patners-img' src={FlowbaseImg} alt="Flowbase" />
                <img className='home-patners-img' src={NectarImg} alt="Nectar" />
                <img className='home-patners-img' src={AstroImg} alt="Astro" />
                <img className='home-patners-img' src={FailoryImg} alt="Failory" />
            </div>
        </>
    )
}

export default HomePatners