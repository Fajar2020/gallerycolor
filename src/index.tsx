import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<div>Loading ~~~~</div>}>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
