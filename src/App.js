import React from "react";
import Routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

library.add(faThLarge);

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
