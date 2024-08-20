import React, { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import './SettingsSidebar.css'

function SettingsSidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
        <div className='setting-main rotate'>
            <span onClick={toggleDrawer}> <IoMdSettings /> </span>
        </div>
    </>
  )
}

export default SettingsSidebar