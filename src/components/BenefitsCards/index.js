import { memo } from "react";
import { images } from "../../constants/icons";
import ui from "./index.module.css";

function BenefitCards() {

  const { card1, card2, card3, card4 } = images;
  const cardItem = [
    {
      pic: card1,
      title: "Envía paquetes en cualquier momento",
      parraf: "Selecciona el seguro más conveniente para tus envios."
    },
    {
      pic: card2,
      title: "Programa tus envios",
      parraf: "Sin importar lo ocupado que estes puedes dejar enviado tu paquete."
    },
    {
      pic: card3,
      title: "Conviertete en socio ",
      parraf: "Selecciona el seguro más conveniente para tus envios."
    },
    {
      pic: card4,
      title: "Protege tu paquete",
      parraf: "Selecciona el seguro más conveniente para tus envios."
    }
  ]


  return (
    <div className={ui.cards}>
      {
        cardItem.map((item, index) => {
          const { pic, title, parraf } = item;
          return (
            <div className={ui.card} key={index}>
              <div className={ui.cardImage}>
                <img src={pic} alt="cardImage" />
              </div>
              <div className={ui.cardContent}>
                <h4>{title}</h4>
                <p>{parraf}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default memo(BenefitCards);