import React, { useState } from 'react'
import SwitchFunction from '../../pages-and-main-component/SwitchFunction'

const HomeUpdateCard = ({ icon }) => {
    const [iconClick, setIconClick] = useState()
    const [isAbove700, setIsAbove700] = useState(false)

    const { imageURL, title } = icon;

    const handleClick = () => {
        setIconClick(!iconClick);
    }

    const handleAbove700Change = (isAbove) => {
        setIsAbove700(isAbove);
    }

    return (
        <>
            <SwitchFunction onAbove700Change={handleAbove700Change} />

            <div onClick={handleClick} className={`something ${iconClick ? 'bg-blue-rgba rounded-full' : ''}`}>
                <img className={`${isAbove700 ? 'mx-1 my-1' : 'h-5 mx-2 my-2'}`} src={imageURL} alt={title} />
            </div>
        </>
    )
}

export default HomeUpdateCard