import React from 'react'
import "./footer.scss"
import logo from "../../img/logo.png";
import tg from "../../img/Telegram.png";
export const Footer = () => {
  return (
   <div className="footer_wrap">
    <div className="container">


    <div className="footer_boxs">
      <div className='footer_content'>
      <img src={logo} alt={logo} />
      <ul>
        <li>Main</li>
        <li>Mach center</li>
        <li>Football</li>
        <li>Tennis</li>
        <li>Cybersport</li>
      </ul>
      <ul>
        <li>Main</li>
        <li>Mach center</li>
        <li>Football</li>
        <li>Tennis</li>
        <li>Cybersport</li>
      </ul>
      <ul>
        <li>Main</li>
        <li>Mach center</li>
        <li>Football</li>
        <li>Tennis</li>
        <li>Cybersport</li>
      </ul>

      <div className='footer_imgs'>
        <div>
          <img src={tg} alt={tg} />
          <img src={tg} alt={tg} />
          <img src={tg} alt={tg} />
        </div>
        <div>
          <img src={tg} alt={tg} />
          <img src={tg} alt={tg} />
          <img src={tg} alt={tg} />
          <img src={tg} alt={tg} />
        </div>
      </div>
      </div>
    
    </div>
    <div className="line_news"></div>
    <p className='year'>© 2023  Footboll. All rights reserved</p>
    </div>
   </div>
  )
}
