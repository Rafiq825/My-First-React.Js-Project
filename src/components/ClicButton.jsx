import React from 'react'


const ClicButton = ({label, iconUrl,backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <>
    <button className={`flex justify-center items-end gap-2 px-7 py-4 border font-montserrat text-lg leading-none
     ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
     : 'bg-coral-red text-white border-coral-red'}
     rounded-full ${fullWidth && "w-full"}
    
    bg-coral-red rounded-full text-white border-coral-red`}>
      {label}
     {iconUrl && <img src={iconUrl} alt="arrow icon" className='ml-2 rounded-full w-5 h-5' />}
    </button>
     </>
  )
}

export default ClicButton
