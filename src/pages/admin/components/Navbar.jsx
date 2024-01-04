import React, { useState } from 'react'
import pictures from '@/pictures'

import MenuBtn from '@components/menu_btn/MenuBtn.jsx'
export default function Navbar({  menuState, setMenuState }) {

  return (
    <nav>
      <div className='logo'>
        <div className='logo_box'>
          <img src={pictures.logo} onClick={() => {
            window.location.href = "/";
          }} />
          <a href="http://localhost:5173/"><img className='phuquy' src="https://images.cooltext.com/5681142.png" width="401" height="97" alt="PHUQUY.VN" /></a>
        </div>
        <MenuBtn onClickFn={setMenuState} open={menuState} />
      </div>
      <div className='log-out' onClick={()=>{
        window.location.href = "/";
      }}>
      <ion-icon name="exit-outline"></ion-icon>
      </div>
    </nav>
  )
}
