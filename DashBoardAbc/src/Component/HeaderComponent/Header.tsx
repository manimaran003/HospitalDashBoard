import React, { useState } from 'react'
import './Header.scss'
import { BiCalendar } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosLogOut } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi'
import { TiMessages } from 'react-icons/ti';
const Header: React.FC<{ handleSide: (state: Boolean) => void }> = (props) => {
    const openHandleSideBar = () => {
        props.handleSide(true)
    }
    return (
        <div>
            <div className='container-fluid mainHeader d-flex'>
                <div className='d-flex align-items-center'>
                    <div className="menu--icon">
                        <AiOutlineMenu onClick={openHandleSideBar} />
                    </div>
                    <div className='header--logo'>
                        <img src="https://i.pinimg.com/736x/b9/c5/34/b9c5344544ba5f44997f4190dfdf273d.jpg" alt="logo" />
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-between align-items-center'>
                    <div className='header--search d-flex'>
                        <input placeholder='search...' className='form-control' />
                    </div>
                    <div className='d-flex gap-4 header--icon'>
                        <div>
                            <BiCalendar />
                        </div>
                        <div>
                            <BsChat />
                        </div>
                        <div>
                            <TiMessages />
                        </div>
                        <div>
                            <IoIosNotificationsOutline />
                        </div>
                        <div>
                            <GiSettingsKnobs />
                        </div>
                        <div>
                            <IoIosLogOut />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header