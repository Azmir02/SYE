import React, { useRef } from 'react'
import {menu_option,create} from '../../data/Option'
import Search from '../../svg/search'
import Leftpart from './Leftpart'

const MenuOption = () => {
  const focused = useRef(null)

  return (
    <div className='w-[800px] h-[90vh] bg-[#F7F8FA] rounded-md shadow-[-3px_4px_12px_0px_rgba(219,219,219,0.75)] p-5 box-border'>
      <h2 className='font-primary text-black font-bold text-2xl'>Menu</h2>
      <div className='flex justify-between mt-5 overflow-y-auto h-[95%]'>
        <div className='left bg-white w-[420px] rounded-md p-6'>
          <div className="search flex items-center bg-[#F0F2F5] px-4 py-2 rounded-full" onClick={()=>{focused.current.focus()}}>
              <Search color="#65676B"/>
              <input type="text" className='focus:outline-none w-[90%] ml-2 bg-[#F0F2F5] font-primary text-base' placeholder='Search' ref={focused}/>
          </div>
          <div className='mt-4 border-b border-solid border-secondary_color'>
            <h2 className='font-primary text-2xl text-black font-bold mb-4'>Social</h2>
          {
            menu_option.slice(0,7).map((item,i)=>(
              <div className='mb-3'>
                <Leftpart key={i} icon={item.icon} title={item.title} description={item.description}/>
              </div>
            ))
          }
          </div>          

          <div className='mt-4 border-b border-solid border-secondary_color'>
            <h2 className='font-primary text-2xl text-black font-bold mb-4'>Entertainment</h2>
          {
            menu_option.slice(7,11).map((item,i)=>(
              <div className='mb-3'>
                <Leftpart key={i} icon={item.icon} title={item.title} description={item.description}/>
              </div>
            ))
          }
          </div>

          <div className='mt-4 border-b border-solid border-secondary_color'>
            <h2 className='font-primary text-2xl text-black font-bold mb-4'>Shopping</h2>
          {
            menu_option.slice(11,13).map((item,i)=>(
              <div className='mb-3'>
                <Leftpart key={i} icon={item.icon} title={item.title} description={item.description}/>
              </div>
            ))
          }
          </div>

          <div className='mt-4 border-b border-solid border-secondary_color'>
            <h2 className='font-primary text-2xl text-black font-bold mb-4'>Personal</h2>
          {
            menu_option.slice(13,16).map((item,i)=>(
              <div className='mb-3'>
                <Leftpart key={i} icon={item.icon} title={item.title} description={item.description}/>
              </div>
            ))
          }
          </div>

          <div className='mt-4 border-b border-solid border-secondary_color'>
            <h2 className='font-primary text-2xl text-black font-bold mb-4'>Professional</h2>
          {
            menu_option.slice(16,19).map((item,i)=>(
              <div className='mb-3'>
                <Leftpart key={i} icon={item.icon} title={item.title} description={item.description}/>
              </div>
            ))
          }
          </div>

          <div className='mt-4 border-b border-solid border-secondary_color'>
            <h2 className='font-primary text-2xl text-black font-bold mb-4'>Community Resource</h2>
          {
            menu_option.slice(19,24).map((item,i)=>(
              <div className='mb-3'>
                <Leftpart key={i} icon={item.icon} title={item.title} description={item.description}/>
              </div>
            ))
          }
          </div>

          <div className='mt-4'>
            <h2 className='font-primary text-2xl text-black font-bold mb-4'>More From SYE</h2>
          {
            menu_option.slice(24,27).map((item,i)=>(
              <div className='mb-3'>
                <Leftpart key={i} icon={item.icon} title={item.title} description={item.description}/>
              </div>
            ))
          }
          </div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default MenuOption