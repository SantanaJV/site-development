import React from "react";
import Routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThLarge,
  faBars,
  faCartPlus,
  faArrowLeft,
  faArrowRight,
  faStore,
  faCogs,
  faPencilAlt,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

library.add(
  faThLarge,
  faBars,
  faCartPlus,
  faArrowLeft,
  faArrowRight,
  faStore,
  faCogs, 
  faPencilAlt, 
  faPlusSquare
);

function App() {
  return (
    <div className="App">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Routes />
    </div>
  );
}

export default App;
