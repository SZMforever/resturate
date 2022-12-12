import "./App.css";
import Home from "./Components/HomePage/Home";
import Navs from "./Components/NavBar/Navs";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
    </Fragment>
  );
}

export default App;
