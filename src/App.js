import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Fragment>
  );
}

export default App;
