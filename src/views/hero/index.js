import React from "react";
import ui from "./index.module.css";
import HeroForm from "../../components/HeroForm";
import { images } from "../../constants/icons";

export default function HeroView({ breakpoint }) {

  const isSmall = breakpoint === "sm";

  const heroImg = isSmall
    ? images.deliverHero
    : images.deliveryMan;

  return (
    <section className={ui.heroSection}>
      <div className={ui.sectionContainer}>
        <HeroForm />
        <article className={ui.containerArticle}>
          <h1>Weeii, el mejor servicio de transporte de paquetes</h1>
          {isSmall
            ?
            (<div className={ui.heroTextImage}>
              <p>Disfruta de nuestro servicio o se parte de WEEII</p>
              <div className={ui.articleImages}>
                <img src={heroImg} alt="deliveryman" />
              </div>
            </div>)
            :
            (<>
              <p>Disfruta de nuestro servicio o se parte de WEEII</p>
              <div className={ui.articleImages}>
                <img src={heroImg} alt="deliveryman" />
              </div>
            </>)
          }
        </article>
      </div>
    </section>
  )
}
