import React from 'react'

const Leftpart = ({icon,title,description}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='w-[15%]'>
            <img src={`../../left/${icon}.png`} alt="icon" />
        </div>
        <div className='w-[85%]'>
            <h4 className='font-primary text-lg font-semibold text-black'>{title}</h4>
            <p className='font-primary text-sm text-secondary_color'>{description}</p>
        </div>
    </div>
  )
}

export default Leftpart