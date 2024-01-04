import React, { useEffect } from 'react'
import './backHome.scss'
export default function BackHome() {
    useEffect(() => {
        window.location.href = '/'
    }, [])
  return (
    <div className='page_body'>
      <div className='container'>
        <img src='https://i.pinimg.com/originals/c2/a2/a6/c2a2a60047736df1a7e3ed8584e08516.gif'></img>
      </div>
    </div>
  )
}
