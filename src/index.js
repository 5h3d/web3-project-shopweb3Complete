import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </NotificationProvider>
      </MoralisProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
