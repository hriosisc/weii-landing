import React from 'react'
import { Routes, Route } from "react-router-dom";
import ROUTES from '../constants/routes';


export default function RoutesPages() {
  return (
    <Routes>
      <Route path={ROUTES.HOMEURL} element={ROUTES.HOME} />
    </Routes>
  )
}
