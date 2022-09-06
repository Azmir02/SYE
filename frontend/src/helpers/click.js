import React, { useEffect } from 'react'

export default function OutsideClick(ref,fun) {
    useEffect(()=>{
        let click = (e)=>{
            if(!ref.current || ref.current.contains(e.target)){
                return false;
            }
            fun()
        };
        document.addEventListener('mousedown',click)
        document.addEventListener('touchstart',click)

        return ()=> {
            document.removeEventListener('mousedown',click)
            document.removeEventListener('touchstart',click)
        }
    },[ref])
}
