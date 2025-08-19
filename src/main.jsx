import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "flowbite/dist/flowbite.js";
import "react-toastify/dist/ReactToastify.css";
import "../src/Modules/Translate/i18n.js";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
