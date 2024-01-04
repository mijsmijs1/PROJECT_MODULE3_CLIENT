import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import './admin.scss'
import Container from './components/Container'
export default function Admin() {
    const [menuState, setMenuState] = useState(false);
    const userStore = useSelector(store => store.userStore)
    const acceptRole = ["admin", "master"]
    useEffect(() => {
        if (!userStore.data) {
            alert("Permission Denine")
            window.location.href = "/"
            return
        }

        if (!acceptRole.find(item => item == userStore.data.role)) {
            alert("Permission Denine")
            window.location.href = "/"
            return
        }
    }, [userStore.data])
    return (
        <>
            {
                acceptRole.find(item => item == userStore.data.role) && (
                    <div style={{ color: 'black' }} className='admin_page'>
                        <Navbar menuState={menuState} setMenuState={setMenuState} userStore={userStore} />
                        <Container menuState={menuState} userStore={userStore} />
                    </div>
                )
            }
        </>
    )
}
