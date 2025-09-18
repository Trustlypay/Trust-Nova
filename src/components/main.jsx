import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="card bg-dark text-white">
      <div
        style={{
          height: "90vh",
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(68, 88, 64, 0.6)), url("/assets/trustnova.jpg")',
          backgroundPosition: "center",
        }}
      />
      <div
        className="card-img-overlay d-flex align-items-center flex-column justify-content-end"
        style={{ paddingBottom: "100px" }}
      >
        <h5 className="card-title fs-1 text fw-lighter">
          Browse our latest products
        </h5>
        <div
          className="btn btn-outline-light m-1"
          onClick={() => {
            navigate("/product");
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        >
          All Products
        </div>
      </div>
    </div>
  );
};

export default Main;
