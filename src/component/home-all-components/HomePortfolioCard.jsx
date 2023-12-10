import React from 'react'
import SeeMoreArrow from '../../assets/see-more-arrow.svg'
import Reveal from '../Reveal';


const HomePortfolioCard = ({ portData }) => {
  const { title, imageURL, description } = portData;

  const CorrectDescription = description.split(' ').slice(0, 4).join(' ');


  return (
    <>
      <div className="bg-black pb-2 md:px-5 md:pt-16 md:pb-28 lg:px-0 lg:pt-0 lg:pb-2 lg:w-fit rounded-3xl">
        <Reveal>
          <img src={imageURL} alt={title} />
        </Reveal>

        <div className='mx-3'>

          <div className='flex justify-between items-center'>
            <Reveal><p className='text-xl md:text-2xl font-bold'>{title}</p></Reveal>
            <Reveal><img className='mb-3' src={SeeMoreArrow} alt=" " /></Reveal>
          </div>

          <Reveal><p className='text-sm md:text-base'>{CorrectDescription}...</p></Reveal>

        </div>
      </div>
    </>
  )
}

export default HomePortfolioCard