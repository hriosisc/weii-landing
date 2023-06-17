import React from "react"
import { Link } from "react-router-dom"
import { icons } from "../../constants/icons"
import ui from "./index.module.css";

export default function Header() {
  return (
    <header>
      <div className={ui.headerContainer}>
        <nav>
          <div className={ui.brandIcon}>
            <img src={icons.brand} alt="brand" />
          </div>
          <ul className={ui.navigation}>
            <li className={ui.navItem}><Link to="#">Compañia</Link></li>
            <li className={ui.navItem}><Link to="#">Seguridad</Link></li>
            <li className={ui.navItem}><Link to="#">Ayuda</Link></li>
            <li className={ui.navItem}><Link to="#">Ingresa</Link></li>
          </ul>
          <button type="button" className={ui.borderedButton}>
            <span>Registrate</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
