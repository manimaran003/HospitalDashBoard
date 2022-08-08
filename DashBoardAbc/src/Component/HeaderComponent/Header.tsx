import React, { useState } from 'react';
import './Header.scss';
import { BiCalendar } from 'react-icons/bi';
import { BsChat } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosLogOut } from 'react-icons/io';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi';
import { TiMessages } from 'react-icons/ti';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="container-fluid mainHeader d-flex ">
        <div className="d-flex align-items-center">
          <div className="menu--icon">
            <AiOutlineMenu
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            />
          </div>
          <div className="header--logo">
            <img
              src="https://i.pinimg.com/736x/b9/c5/34/b9c5344544ba5f44997f4190dfdf273d.jpg"
              alt="logo"
            />
          </div>
        </div>
        <div className="d-flex flex-grow-1 justify-content-between align-items-center">
          <div className="header--search d-flex">
            <input placeholder="search..." className="form-control" />
          </div>
          <div className="mobile--show header--icon">
            <div>
              <AiOutlineSearch />
            </div>
          </div>
          <div className="d-flex gap-2 gap-sm-2 gap-md-2 gap-lg-4 header--icon">
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
              <IoIosLogOut
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
