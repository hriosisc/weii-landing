import React from "react";
import ui from "./index.module.css";
import { images } from "../../constants/icons"

export default function StartNowView() {
  return (
    <section className={ui.startNowSection}>
      <div className={ui.sectionContainer}>
        <div className={ui.containerHead}>
          <h1 className={ui.headTitle}>¡Empieza ahora!</h1>
        </div>
        <div className={ui.containerBody}>
          <div>
            <img src={images.gEmail} alt="girlEmail" />
            <button type="button" className={ui.filledButton}>
              <span>Quiero hacer un envío</span>
            </button>
          </div>
          <div>
            <img src={images.dMan} alt="manDelivery" />
            <button type="button" className={ui.roundedButton}>
              <span>Quiero ser repartidor</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
