import React from 'react'

const Storyprsn = ({image,profile_picture,profile_name}) => {
  return (
    <div>
        <div className='relative group'>
            <div className='absolute z-10 top-[5px] left-[5px] overflow-hidden border-2 border-blue border-solid rounded-full'>
                <img className='w-[40px] h-[40px] object-cover rounded-full' src={profile_picture} alt="" />
            </div>
            <img className='w-full h-[183px] object-cover group-hover:scale-[1.02] transition-all ease-linear duration-150' src={image} alt="images" />
            <span className='absolute bottom-[10px] left-[5px] text-base font-primary font-regular text-white z-10 leading-[16px]'>{profile_name}</span>
            <div className='absolute top-0 left-0 w-full h-full transition-all ease-out duration-100 bg-[rgba(41,_49,_61,_.2)] rounded-md'></div>        
        </div>
    </div>
  )
}

export default Storyprsn