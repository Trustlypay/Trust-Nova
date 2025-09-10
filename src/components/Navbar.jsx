import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

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
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className="navbar-brand fw-bold fs-4 mx-auto" to="/">
          <img
            src="./assets/trust_nova_logo.jpg"
            alt="Card"
            style={{ height: "18px" }}
          />
        </NavLink>

        <div className="d-flex align-items-center">
          <div className="buttons text-center">
            <NavLink to="/cart" className="btn btn-outline-light m-1">
              <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
            </NavLink>
            <NavLink to="/login" className="btn btn-outline-light m-1">
              <i className="fa fa-sign-in-alt me-1"></i> LogOut
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
