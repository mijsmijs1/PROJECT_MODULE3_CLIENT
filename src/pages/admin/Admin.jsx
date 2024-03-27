import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import './admin.scss'
import Container from './components/Container'
export default function Admin() {
    const [menuState, setMenuState] = useState(false);
    const userStore = useSelector(store => store.userStore)
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    console.log(userStore);
    const acceptRole = ["admin", "master"]
    useEffect(() => {
        if (userStore.data) {
            setIsDataLoaded(true);
        }
    }, [userStore.data]);

    useEffect(() => {
        if (isDataLoaded) {
            if (!acceptRole.find(item => item === userStore.data?.role)) {
                alert("Permission Denied");
                // window.location.href = "/";
            }
        }
    }, [isDataLoaded, userStore.data]);

    if (!isDataLoaded) {
        // Nếu dữ liệu chưa tải, hiển thị một tiến trình tải hoặc thông báo chờ
        return <div>Loading...</div>;
    }
    return (
        <>
            {
                acceptRole.find(item => item == userStore.data?.role) && (
                    <div style={{ color: 'black' }} className='admin_page'>
                        <Navbar menuState={menuState} setMenuState={setMenuState} userStore={userStore} />
                        <Container menuState={menuState} userStore={userStore} />
                    </div>
                )
            }
        </>
    )
}
