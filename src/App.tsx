import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Gallery from "./screen/gallery";

export default function App(props: any) {
  return (
    <Provider store={props.store}>
      <Router>
        <Route exact path="/" component={Gallery} />
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
