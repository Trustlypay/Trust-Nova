import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Popover } from "antd";
import { useContext, useState } from "react";
import UserContext from "./user-context";
import { DATA } from "../products";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const { userDetails } = useContext(UserContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/">
          <img
            src="/assets/trust_nova_logo.jpg"
            alt="Card"
            style={{ height: "25px" }}
          />
        </NavLink>

        <div className="d-flex align-items-center">
          <div className="buttons text-center">
            <Popover
              placement="bottomLeft"
              open={value ? true : false}
              content={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    padding: "18px",
                    height: "600px",
                    overflow: "auto",
                  }}
                >
                  {DATA.filter((filteredItem) =>
                    filteredItem.title.includes(value)
                  ).length > 0 ? (
                    DATA.filter((filteredItem) =>
                      filteredItem.title.includes(value)
                    ).map((item) => (
                      <div
                        style={{ display: "flex", gap: "16px" }}
                        className="cursor-pointer"
                        onClick={() => {
                          navigate("/product/" + item.id);
                          setValue("");
                        }}
                      >
                        <img src={item.image} alt="index" width="64px" />
                        <div className="heading-3">{item.title} </div>
                      </div>
                    ))
                  ) : (
                    <div className="heading-3">no results for search</div>
                  )}
                </div>
              }
            >
              <input
                value={value}
                type="text"
                name="search"
                placeholder="Search.."
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Popover>

            <NavLink to="/cart" className="btn btn-outline-light m-1">
              <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
            </NavLink>
            <Popover
              placement="bottom"
              title={
                <div
                  style={{
                    padding: "18px 6px 0px 6px ",
                    textAlign: "center",
                  }}
                >
                  My Account
                </div>
              }
              content={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    padding: "18px",
                  }}
                >
                  <div>Name : {userDetails?.userName ?? ""}</div>
                  <div>Email : {userDetails?.email ?? ""}</div>
                  <div>Phone Number : {userDetails?.phoneNumber ?? ""}</div>
                  <NavLink
                    to="/login"
                    className="btn btn-outline-dark m-1"
                    onClick={() => {
                      localStorage.removeItem("token");
                    }}
                  >
                    <i className="fa fa-sign-in-alt me-1"></i> LogOut
                  </NavLink>
                </div>
              }
            >
              <div className="btn btn-outline-light m-1">
                <i class="fa-regular fa-user"></i>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
