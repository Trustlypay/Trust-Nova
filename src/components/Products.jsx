import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import { DATA } from "../products";

const Products = () => {
  const [filter, setFilter] = useState(DATA);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProduct = (cat) => {
    const updatedList = DATA.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => setFilter(DATA)}
          >
            All
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Cameras")}
          >
            Cameras
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Handheld Players & Recorders")}
          >
            Handheld Players & Recorders
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Power Adapters & Chargers")}
          >
            Power Adapters & Chargers
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("3D Printers & Components")}
          >
            3D Printers & Components
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Cables, Wires & Cable Ties")}
          >
            Cables, Wires & Cable Ties
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Electronics Components")}
          >
            Electronics Components
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("USB Flash Drives & Hard Drives")}
          >
            USB Flash Drives & Hard Drives
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Electronics Cleaners")}
          >
            Electronics Cleaners
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Computer Accessories")}
          >
            Computer Accessories
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() =>
              filterProduct("Speakers, Microphones, Audio Components")
            }
          >
            Speakers, Microphones, Audio Components
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Desktop Computers")}
          >
            Desktop Computers
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Gaming Chairs")}
          >
            Gaming Chairs
          </button>

          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Desks")}
          >
            Desks
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Mobile Phone Stands")}
          >
            Mobile Phone Stands
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Powered Hand Fans & Misters")}
          >
            Powered Hand Fans & Misters
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() => filterProduct("Multimedia Projectors")}
          >
            Multimedia Projectors
          </button>
          <button
            className="btn btn-outline-light btn-sm m-2"
            onClick={() =>
              filterProduct(
                "Lighting Control Kits, Night Lights & Ambient Lighting"
              )
            }
          >
            Lighting Control Kits, Night Lights & Ambient Lighting
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <Link to={"/product/" + product.id}>
                  <img
                    className="card-img-top p-3"
                    src={product.image}
                    alt="Card"
                    height={300}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description?.[0]?.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </>
  );
};

export default Products;
