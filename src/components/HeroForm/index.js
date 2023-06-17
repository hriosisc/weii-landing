import React, { useState } from "react";
import ui from "./index.module.css";
import { icons } from "../../constants/icons";
import useFormOption from "./Hooks/useFormOption";

export default function HeroForm() {

  const [activeOption, setActiveOption] = useState(0);
  const [deliveryTrack, setDeliveryTrack] = useState({
    origin: "",
    destination: ""
  });

  // Functions
  const handleOrigin = (origin) => {
    setDeliveryTrack((prev) => {
      return { ...prev, origin: origin }
    });
  }

  const handleDestination = (destination) => {
    setDeliveryTrack((prev) => {
      return { ...prev, destination: destination }
    })
  }

  const { form } = useFormOption({ deliveryTrack, activeOption, handleOrigin, handleDestination })

  return (
    <div className={ui.formContainer}>
      <div className={ui.containerTabs}>
        <div className={ui.tabOption}>
          <div className={ui.option}>
            <button
              type="button"
              className={ui.optionButton}
              disabled={activeOption === 0}
              onClick={() => { setActiveOption(0) }}
            >
              <img src={icons.box} alt="icon" />
              <span>Realiza un envío</span>
            </button>
          </div>
        </div>
        <div className={ui.tabOption}>
          <div className={ui.option}>
            <button
              type="button"
              className={ui.optionButton}
              disabled={activeOption === 1}
              onClick={() => { setActiveOption(1) }}
            >
              <img src={icons.deliver} alt="icon" />
              <span>Ser repartidor</span>
            </button>
          </div>
        </div>
      </div>
      <div className={ui.containerBody}>
        {form}
      </div>
    </div>
  )
}
