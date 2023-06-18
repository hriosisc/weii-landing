import React from 'react';
import { Link } from 'react-router-dom';
import ui from "./index.module.css";
import { images } from "../../constants/icons"

export default function OpinionsView({ breakpoint }) {

  const { avatar } = images;
  const isSmall = breakpoint === "sm";

  const opinionList = isSmall
    ? [{ pic: avatar, name: "Guy Hawkins", rating: "4.0", parraf: "consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt", date: " 12 Ene 2022" }]
    : [
      { pic: avatar, name: "Guy Hawkins", rating: "4.0", parraf: "consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt", date: " 12 Ene 2022" },
      { pic: avatar, name: "Guy Hawkins", rating: "4.0", parraf: "consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt", date: " 12 Ene 2022" },
      { pic: avatar, name: "Guy Hawkins", rating: "4.0", parraf: "consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt", date: " 12 Ene 2022" }
    ]

  return (
    <section className={ui.opinionSection}>
      <div className={ui.sectionContainer}>
        <div className={ui.containerBody}>
          <div className={ui.containerOpinions}>
            {
              opinionList.map((item, index) => {
                const { pic, name, rating, parraf, date } = item;
                return (
                  <div className={ui.opinionCard} key={index}>
                    <div className={ui.cardHead}>
                      <img src={pic} alt="avatar" />
                      <span className={ui.headName}>{name}</span>
                      <span className={ui.headRating}>{rating}</span>
                    </div>
                    <div className={ui.cardBody}>
                      <p>{parraf}</p>
                      <span>{date}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {
            isSmall
              ? null
              : (<div className={ui.containerStores}>
                <Link to="#"><img src={images.googleApp} alt="storeIcon" /></Link>
                <Link to="#"><img src={images.appStore} alt="storeIcon" /></Link>
              </div>)
          }
        </div>
      </div>
    </section>
  )
}
