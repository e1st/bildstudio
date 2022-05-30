import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faRss,
  faPlay,
  faLink,
  faGear,
  faMagnifyingGlass,
  faCamera,
  faServer,
  faFaceFrown,
  faBorderAll,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faTwitter,
  faFacebook,
  faPinterest,
  faGooglePlus,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faHeart,
  faGear,
  faMagnifyingGlass,
  faCamera,
  faServer,
  faFaceFrown,
  faBorderAll,
  faBars,
  faRss,
  faPlay,
  faLink,
  fab,
  faTwitter,
  faFacebook,
  faPinterest,
  faGooglePlus,
  faDribbble
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
