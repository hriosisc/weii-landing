import React from "react";
import ui from "../index.module.css"
import { icons } from "../../../constants/icons";

export default function FormDeliveryPerson({ deliveryTrack, handleOrigin, handleDestination }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={ui.formComponent}>
      <h1>Realiza un envío ahora</h1>
      <form onSubmit={handleSubmit}>
        <div className={ui.formGroup}>
          <label htmlFor="origin">Origen</label>
          <div className={ui.groupInput} data-icon="gps">
            <i
              className="material-icons-outlined"
              onClick={(e) => { document.getElementById("origin").focus() }}
            >place</i>
            <input
              type="text"
              placeholder="Ubicacion de origen"
              id="origin"
              defaultValue={deliveryTrack.origin}
              onBlur={(e) => { handleOrigin(e.target.value) }}
            />
          </div>
        </div>
        <div className={ui.formGroup}>
          <label htmlFor="destination">Destino</label>
          <div className={ui.groupInput} data-icon="gps">
            <i
              className="material-icons-outlined"
              onClick={(e) => { document.getElementById("destination").focus() }}
            >place</i>
            <input
              type="text"
              placeholder="Ubicacion de destino"
              id="destination"
              defaultValue={deliveryTrack.destination}
              onBlur={(e) => { handleDestination(e.target.value) }}
            />
          </div>
        </div>
        <button type="submit" className={ui.submitButton}>
          <img src={icons.bike} alt="buttonIcon" />
          <span>Enviar ahora</span>
        </button>
      </form>
    </div>
  )
}
