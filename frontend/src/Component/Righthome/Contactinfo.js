import React from 'react'

const Contactinfo = ({user}) => {
  return (
    <div>
        <div className='flex items-center justify-between cursor-pointer hover:bg-[#F1F4F7] px-3 py-2 rounded-md transition-all ease-in-out duration-200'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden bg-red'></div>
            <div className='w-[240px]'>
                <span className='font-primary text-base font-semibold text-black capitalize'>{user.fName} {user.lName}</span>
            </div>
        </div>
    </div>
  )
}

export default Contactinfo