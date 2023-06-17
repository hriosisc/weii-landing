import React from "react";
import ui from "./index.module.css";
import HeroForm from "../../components/HeroForm";
import { images } from "../../constants/icons";

export default function HeroView() {
  return (
    <section className={ui.heroSection}>
      <div className={ui.sectionContainer}>
        <HeroForm />
        <article className={ui.containerArticle}>
          <h1>Weeii, el mejor servicio de transporte de paquetes</h1>
          <p>Disfruta de nuestro servicio o se parte de WEEII</p>
          <div className={ui.articleImages}>
            <img src={images.deliveryMan} alt="deliveryman" />
          </div>
        </article>
      </div>
    </section>
  )
}
