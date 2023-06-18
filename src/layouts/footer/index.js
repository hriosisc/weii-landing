import React from 'react';
import ui from "./index.module.css";
import { icons, images } from "../../constants/icons/";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className={ui.footerContainer}>
        <div className={ui.containerFlex}>
          <div className={ui.storesContainer}>
            <Link to={"#"}><img src={images.googleApp} alt="googleIcon" /></Link>
            <Link to={"#"}><img src={images.appStore} alt="appStoreIcon" /></Link>
          </div>
          <ul className={ui.navigation}>
            <li className={ui.navItem}><Link to={"#"}>Privacidad</Link></li>
            <li className={ui.navItem}><Link to={"#"}>Accesibilidad</Link></li>
            <li className={ui.navItem}><Link to={"#"}>Términos</Link></li>
          </ul>
        </div>
        <div className={ui.socialMediaContainer}>
          <Link to={"#"}><img src={icons.fb} alt="icon" /></Link>
          <Link to={"#"}><img src={icons.tw} alt="icon" /></Link>
          <Link to={"#"}><img src={icons.ig} alt="icon" /></Link>
        </div>
        <div className={ui.copyrightContainer}>
          <span>&copy; {new Date().getFullYear()} WEII Company</span>
          <span><i className='material-icons-outlined'>place</i> México, Tijuana</span>
        </div>
      </div>
    </footer >
  )
} 