import React  from "react"
import { Link } from "react-router-dom"
import { icons } from "../../constants/icons"
import ui from "./index.module.css"; 
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function Header() {

  const { breakpoint } = useBreakpoint();
  console.log({ breakpoint })

  const LargeRender = () => {

    return breakpoint === "lg" ? (
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
    ) : null
  }

  const SmallRender = () => {
    return breakpoint === "sm" ? (
      <nav>
        <button type="button" className={ui.burgerMenu}>
          <i className="material-icons-outlined">menu</i>
        </button>
        <div className={ui.brandIcon}>
          <img src={icons.brand} alt="brand" />
        </div>
      </nav >
    ) : null
  }

  return (
    <header>
      <div className={ui.headerContainer}>
        <SmallRender />
        <LargeRender />
      </div>
    </header>
  )
}
