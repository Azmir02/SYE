import React,{useRef,useState,useEffect} from 'react'
import EmojiPicker from 'emoji-picker-react';
import OutsideClick from '../../helpers/click';

const Emojipicker = ({users,setText,text,changepart}) => {
    const [picker,setPicker] = useState(false);
    const [cursorPosition,setCursorPosition] = useState()  
    const textRef = useRef(null);
    const outsideClick = useRef(null);

    const handleEmoji = ({emoji},e)=>{
        const ref = textRef.current;
        ref.focus();
        const start = text.substring(0,ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end;
        setText(newText);
        setCursorPosition(start.length + emoji.length)
      }

      useEffect(()=>{
        textRef.current.selectionEnd = cursorPosition;
      },[cursorPosition])
    
    OutsideClick (outsideClick,()=>{
        setPicker(false)
    })
    
  return (
    <div className={`${changepart && "flex justify-between items-start"}`}>
        <textarea ref={textRef} value={text} onChange={(e)=>setText(e.target.value)} className={`${!changepart ? "resize-none focus:outline-none w-full text-2xl" : "resize-none focus:outline-none w-full text-base"}`} placeholder={`What's on your mind ${users.fName} ${users.lName}?`}/>

        <div className='flex items-center justify-between'>
        {
            !changepart ?
            <div className='w-[40px]'>
              <img className='w-full cursor-pointer' src="../../../icons/colorful.png" alt="globe" />
         
            </div>
            :
            ""
        }
        
        <div className='relative'>
            <i className='emoji_icon_large' onClick={()=>setPicker((prev)=>!prev)}></i>
            {
                picker &&
                <div className='absolute top-[-460px] right-[-100px] shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]' ref={outsideClick}>
                    <EmojiPicker  onEmojiClick={handleEmoji}/>
                </div>
            }
            </div>         
        </div>     
    </div>
  )
}

export default Emojipicker