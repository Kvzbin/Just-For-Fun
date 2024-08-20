import React from 'react'
import './Footer.css'

function Footer({ footerColor }) {
    const  year = new Date().getFullYear();

  return (
    <>
        <footer className='foot-main' style={{ backgroundColor: footerColor}}>
            <p> Copyright &copy; {year} C-DAC Delhi, All Rights Reserved.</p>
            <p> Application Developed & Maintained by e-Governence Solution Group, C-DAC Delhi.</p>
        </footer>
    </>
  )
}

export default Footer