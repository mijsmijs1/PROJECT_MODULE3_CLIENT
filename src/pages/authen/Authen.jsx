import React, { useState } from 'react'
import './authen.scss'
import Register from './components/Register'
import Login from './components/Login'
export default function Authen() {
    const [loadFlag, setLoadFlag] = useState(false)
    return (
        <>
        <Register loadFlag={loadFlag} setLoadFlag = {setLoadFlag}/>
        <Login loadFlag={loadFlag} setLoadFlag = {setLoadFlag}/>
        </>
    )
}
