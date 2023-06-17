import React from "react";
import ui from "./index.module.css";

export default function Main({
  children
}) {
  return (
    <main>
      <div className={ui.mainContainer}>
        {children}
      </div>
    </main>
  )
}
