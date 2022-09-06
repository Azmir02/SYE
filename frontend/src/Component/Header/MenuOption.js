import React, { useRef } from 'react'
import Search from '../../svg/search'

const MenuOption = () => {
  const focused = useRef(null)

  return (
    <div className='w-[800px] h-[90vh] bg-[#F7F8FA] rounded-md shadow-[-3px_4px_12px_0px_rgba(219,219,219,0.75)] p-5 box-border'>
      <h2 className='font-primary text-black font-bold text-2xl'>Menu</h2>
      <div className='flex justify-between mt-5 h-[95%] overflow-y-auto'>
        <div className='left bg-white w-[420px] rounded-md p-6'>
          <div className="search flex items-center bg-[#F0F2F5] px-4 py-2 rounded-full" onClick={()=>{focused.current.focus()}}>
              <Search color="#65676B"/>
              <input type="text" className='focus:outline-none w-[90%] ml-2 bg-[#F0F2F5] font-primary text-base' placeholder='Search' ref={focused}/>
          </div>
          
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default MenuOption