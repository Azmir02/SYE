import React from 'react'

const Optiondata = ({text,icon,notification}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='w-[15%]'>
            <img src={`../../../left/${icon}.png`} alt="icon" />
        </div>
        <div className='w-[85%]'>
            {
                notification !== undefined ? (
                    <>
                        <p className='font-primary text-base font-semibold text-black leading-[0.8]'>{text}</p>
                        <span className='font-primary text-sm text-title_color'>{notification}</span>
                    </> 
                )
                :
                <p className='font-primary text-base font-semibold text-black leading-[0.8]'>{text}</p> 
            }
        </div>
    </div>
  )
}

export default Optiondata