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
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top p-3"
      style={{
        backgroundColor: "#2D5D7B",
        color: "white",
      }}
    >
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

        <div>
          <div style={{ display: "flex", gap: "10px" }}>
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
                  {DATA.filter(
                    (filteredItem) =>
                      filteredItem.title
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                      filteredItem.tags.map((tagItem) =>
                        tagItem.toLowerCase().includes(value.toLowerCase())
                      )
                  ).length > 0 ? (
                    DATA.filter((filteredItem) =>
                      filteredItem.title
                        .toLowerCase()
                        .includes(value.toLowerCase())
                    ).map((item) => (
                      <>
                        <div
                          key={item.id}
                          style={{ display: "flex", gap: "16px" }}
                          className="cursor-pointer"
                          onClick={() => {
                            navigate("/product/" + item.id);
                            setValue("");
                          }}
                        >
                          <img
                            src={item.image}
                            alt="index"
                            width="64px"
                            height="64px"
                          />
                          <div className="heading-3">
                            {item.title.substring(0, 100)}...
                          </div>
                        </div>
                        <div
                          style={{
                            border: "1.5px solid rgba(234, 223, 223, 1)",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </>
                    ))
                  ) : (
                    <div className="heading-3">no results for search</div>
                  )}
                </div>
              }
            >
              <div
                style={{
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="🔍 Search.."
                  aria-label="Search.."
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </div>
            </Popover>

            <NavLink to="/cart" className="btn-lg btn-outline-light ">
              <i className="fa fa-cart-shopping me-1"></i>
              <span style={{ textDecoration: "none" }}>({state.length})</span>
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
              <div className="btn-lg btn-outline-light">
                <i className="fa-regular fa-user"></i>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
