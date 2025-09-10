import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="card bg-dark text-white">
      <div
        style={{
          height: "90vh",
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(68, 88, 64, 0.6)), url("./assets/trustnova.jpg")',
          backgroundPosition: "center",
        }}
      />
      <div className="card-img-overlay d-flex align-items-center flex-column justify-content-end">
        <h5 className="card-title fs-1 text fw-lighter">
          Browse our latest products
        </h5>
        <NavLink to="/product" className="btn btn-outline-light m-1">
          All Products
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
