import { BrowserRouter } from "react-router-dom";
import RoutesPages from "./router";
import "./css/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <RoutesPages />
    </BrowserRouter>
  );
} 