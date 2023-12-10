import React from 'react'
import '../../styles/hometypo.css'

const HomeTypo = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <p className='text-center text-8xl font-extrabold w-7/12 hero-typo-heading'>Your <span className='primary-text'>UI/UX</span> & <span className='primary-text'>Branding</span> Partner</p>
        <p className='text-center text-3xl font-medium w-6/12 mt-4 hero-typo-desc'>Designing <span className='primary-text'>easy-to-use</span> interfaces and memorable brands for your success</p>

        <button className='text-4xl hero-typo-btn font-bold bg-black px-3 py-2 mt-5 rounded-2xl primary-border-color border-r-4 border-b-4' type='button'>Get Started</button>
    </div>
    </>
  )
}

export default HomeTypo