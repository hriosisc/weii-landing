import React from "react";
import ui from "./index.module.css";
import { images } from "../../constants/icons";
import BenefitsCards from "../../components/BenefitsCards";

export default function BenefitsView() {

  return (
    <section className={ui.benefitSection}>
      <div className={ui.sectionContainer}>
        <div className={ui.containerHead}>
          <div className={ui.headImage}>
            <img src={images.shield} alt="shield" />
          </div>
          <div className={ui.headTitles}>
            <h1>Conoce los beneficios que tenemos para ti</h1>
            <h4>Amabilidad, Seguridad y Puntualidad</h4>
          </div>
        </div>
        <div className={ui.containerBody}>
          <BenefitsCards />
        </div>
      </div>
    </section>
  )
}
