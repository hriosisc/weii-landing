import React from 'react'
import ui from "./index.module.css";
import { images } from '../../constants/icons';

export default function BottomView() {
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
            <img src={images.phoneslg} alt="phones" />
          </div>
        </div>
      </div>
    </section>
  )
}
