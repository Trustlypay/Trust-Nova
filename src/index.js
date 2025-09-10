import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactQueryClient from "./components/queryclient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="text-white">
    <React.StrictMode>
      <BrowserRouter>
        <ReactQueryClient>
          <App />
        </ReactQueryClient>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
