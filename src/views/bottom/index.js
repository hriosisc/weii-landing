import React from 'react'
import ui from "./index.module.css";
import { images } from '../../constants/icons';
import { Link } from 'react-router-dom';

export default function BottomView({ breakpoint }) {

  const isSmall = breakpoint === "sm";

  return (
    <section className={ui.bottomSection}>
      <div className={ui.backgroundImage} style={{ backgroundImage: `url(${images.bg})` }}></div>
      <div className={ui.sectionContainer}>
        <div className={ui.containerHead}>
          <div className={ui.headTitle}>
            <h1>¡Descargar la app ahora!</h1>
            <p>Disponible para Ios y Android</p>
          </div>
        </div>
        <div className={ui.containerBody}>
          <div className={ui.bodyImage}>
            <img src={isSmall ? images.phonessm : images.phoneslg} alt="phones" />
          </div>
          {isSmall
            ? (
              <div className={ui.storeApp}>
                <Link to={"#"}> <img src={images.googleApp} alt="storeapp" />  </Link>
                <Link to={"#"}> <img src={images.appStore} alt="storeapp" />  </Link>
              </div>
            ) : null}
        </div>
      </div>
    </section>
  )
}
