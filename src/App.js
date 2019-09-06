import React from "react";
import Routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThLarge, faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faThLarge, faBars, faCartPlus);

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
