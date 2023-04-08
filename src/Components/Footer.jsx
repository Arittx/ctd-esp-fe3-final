import React from 'react'
import { ContextProvider, useContextGlobal } from './utils/global.context';

const Footer = () => {

  const {state} = useContextGlobal();


  return (
    <footer  style={{background:state.theme.backgroundNavbar}}>
      <div>
        <p style={{color:state.theme.color}}>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' style={{color:state.theme.color}} />
        </div>
        <div >
        <a href="www.facebook.com" style={{color: "black"}}><img src="./images/ico-facebook.png" alt="DH-facebook" style={{color: "black"}}/></a>
        <a href="www.instagram.com"><img src="./images/ico-instagram.png" alt="DH-instagram" /></a>
        <a href="www.tiktok.com"><img src="./images/ico-tiktok.png" alt="DH-tiktok" /></a>
        <a href="www.whatsapp.com"><img src="./images/ico-whatsapp.png" alt="DH-whatsapp" /></a>
        </div>
    </footer>
  )
}

export default Footer
