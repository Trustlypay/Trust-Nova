import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import SortIcon from "@mui/icons-material/Sort";

import "react-loading-skeleton/dist/skeleton.css";

import { Link, useNavigate } from "react-router-dom";
import { DATA } from "../products";

const Products = () => {
  const [filter, setFilter] = useState(
    location.pathname === "/product"
      ? DATA
      : DATA.sort(() => 0.5 - Math.random())
          .filter((filterItem) => filterItem.price <= 1000)
          .slice(0, 8)
  );
  const [selectedValue, setSelectedValue] = useState();
  const [filterSelected, setFilterSelected] = useState("All");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProduct = (cat) => {
    setFilterSelected(cat);
    const updatedList = DATA.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        {location.pathname === "/product" && (
          <>
            <div style={{ textAlign: "end" }}>
              <SortIcon fontSize="large" />
              <select
                value={selectedValue}
                style={{
                  marginLeft: "16px",
                  width: "200px",
                  padding: "10px",
                  border: "none",
                  borderRadius: "6px",
                }}
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
                className={
                  filterSelected === "All"
                    ? "btn  button-color"
                    : "btn btn-outline-light m-2"
                }
                onClick={() => {
                  setFilter(DATA);
                  setFilterSelected("All");
                }}
              >
                All
              </button>
              {[
                "Video - Cameras, Adapters",
                "Power Adapters, Extentions & Chargers",
                "USB, Wires, Cables, Adapters",
                "Gaming",
                "Electronics",
                "Audio - Speakers, Headphones, Microphones & Accessories",
                "Computer & Computer Accessories, Components, Peripherals",
                "Electronic Components",
              ].map((mapItem) => {
                return (
                  <button
                    className={
                      filterSelected === mapItem
                        ? "btn button-color"
                        : "btn btn-outline-light m-2"
                    }
                    onClick={() => filterProduct(mapItem)}
                  >
                    {mapItem}
                  </button>
                );
              })}
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
                  backgroundColor: "#fff",
                  color: "#2D5D7B",
                  display: "flex",
                  flexDirection: "column",
                  justifyItems: "flex-end",
                  gap: "12px",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "12px",
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
                <div
                  onClick={() => {
                    navigate("/product/" + product.id);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  {product.title.substring(0, 25)}
                </div>

                <div>
                  <div className="heading-2">
                    ₹ {product.price?.toLocaleString("en-IN")}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center,",
                  }}
                >
                  <div
                    className="lead "
                    style={{
                      color: "#FAA916",
                      alignSelf: "center",
                    }}
                  >
                    {product.rating && product.rating.rate}{" "}
                    <i className="fa fa-star"></i>
                  </div>{" "}
                  <button
                    className="btn m-1"
                    style={{
                      fontSize: "24px",
                      border: "1.5px",
                    }}
                    onClick={() => addProduct(product)}
                  >
                    <i class="fa-solid fa-cart-plus"></i>
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
