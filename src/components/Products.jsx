import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import { DATA } from "../products";

const Products = () => {
  const [filter, setFilter] = useState(
    location.pathname === "/product"
      ? DATA
      : DATA.sort(() => 0.5 - Math.random()).slice(0, 8)
  );
  const [selectedValue, setSelectedValue] = useState();
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
        {location.pathname === "/product" && (
          <>
            <div style={{ textAlign: "end" }}>
              Sort by{" "}
              <select
                value={selectedValue}
                style={{ width: "200px" }}
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                  if (e.target.value === "a-z") {
                    const filters = [...filter];
                    filters.sort((a, b) =>
                      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                    );
                    setFilter(filters);
                  }
                  if (e.target.value === "z-a") {
                    const filters = [...filter];
                    filters.sort((a, b) =>
                      b.title.toLowerCase().localeCompare(a.title.toLowerCase())
                    );
                    setFilter(filters);
                  }
                  if (e.target.value === "0-5") {
                    const filters = [...filter];
                    filters.sort((a, b) => a.rating.rate - b.rating.rate);
                    setFilter(filters);
                  }
                  if (e.target.value === "5-0") {
                    const filters = [...filter];
                    filters.sort((a, b) => b.rating.rate - a.rating.rate);
                    setFilter(filters);
                  }
                  if (e.target.value === "low - high") {
                    const filters = [...filter];
                    filters.sort((a, b) => a.price - b.price);
                    setFilter(filters);
                  }
                  if (e.target.value === "high - low") {
                    const filters = [...filter];
                    filters.sort((a, b) => b.price - a.price);
                    setFilter(filters);
                  }
                }}
              >
                <option value="a-z">Alphabetically, A-Z</option>
                <option value="z-a">Alphabetically, Z-A</option>
                <option value="0-5">rating, 0-5</option>
                <option value="5-0">rating, 5-0</option>{" "}
                <option value="low - high">price, low - high</option>
                <option value="high - low">price, high - low</option>
              </select>
            </div>
            <div className="buttons text-center py-5">
              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() => setFilter(DATA)}
              >
                All
              </button>
              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() => filterProduct("Video - Cameras, Adapters")}
              >
                Video - Cameras, Adapters
              </button>
              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() =>
                  filterProduct("Power Adapters, Extentions & Chargers")
                }
              >
                Power Adapters, Extentions & Chargers
              </button>

              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() => filterProduct("USB, Wires, Cables, Adapters")}
              >
                USB, Wires, Cables, Adapters
              </button>
              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() =>
                  filterProduct(
                    "Audio - Speakers, Headphones, Microphones & Accessories"
                  )
                }
              >
                Audio - Speakers, Headphones, Microphones & Accessories
              </button>

              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() =>
                  filterProduct(
                    "Computer & Computer Accessories, Components, Peripherals"
                  )
                }
              >
                Computer & Computer Accessories, Components, Peripherals
              </button>
              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() => filterProduct("Gaming")}
              >
                Gaming
              </button>
              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() => filterProduct("Electronic Components")}
              >
                Electronic Components
              </button>
              <button
                className="btn btn-outline-light btn-sm m-2"
                onClick={() => filterProduct("Electronics")}
              >
                Electronics
              </button>
            </div>
          </>
        )}
        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12 col-12 mb-4"
              style={{ textAlign: "center" }}
            >
              <div
                key={product.id}
                style={{
                  height: "100%",
                  backgroundColor: "#EEF0F2",
                  color: "#222222",
                  display: "flex",
                  flexDirection: "column",
                  justifyItems: "flex-end",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Link
                  to={"/product/" + product.id}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  <img
                    src={product.image}
                    alt="Card"
                    style={{
                      height: "200px",
                      width: "200px",
                    }}
                  />
                </Link>
                <Link
                  to={"/product/" + product.id}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  <div style={{ padding: "10px" }}>
                    {product.title.substring(0, 50)}...
                  </div>
                </Link>
                <div className="heading-3">
                  ₹ {product.price?.toLocaleString("en-IN")}
                </div>
                <button
                  className="btn btn-dark m-1"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </button>
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
