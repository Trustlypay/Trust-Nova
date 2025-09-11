import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import {
  Home,
  Product,
  ProductsPage,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const parts = token?.split(".");

    if (parts && JSON.parse(atob(parts[1])).exp > dayjs().unix()) {
      navigate(
        location.pathname !== "/login"
          ? location.pathname + location.search
          : "/"
      );
    } else {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [token]);

  return (
    <Provider store={store}>
      {token && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        {!token && <Route path="/login" element={<Login />} />}
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Login />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
      {token && (
        <footer className="custom-class">
          <div className="custom-container">
            <div style={{ display: "flex", gap: "200px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <b className="heading-3">
                  TrustlyPay Financial Technology Private Limited
                </b>
                <p>
                  Plot No 4/2, Sector 1, Madhapur, HUDA Techno Enclave, HITEC
                  City,
                  <br /> Hyderabad, Telangana - 500081
                </p>
                <p>Phone: +91-8247 648 184</p>
                <p>Email: info@trustnova.com</p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <b> Quick Links</b>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div
                    className="hover-underline cursor-pointer"
                    onClick={() => {
                      navigate("/products");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Products
                  </div>
                  <div
                    className="hover-underline  cursor-pointer"
                    onClick={() => {
                      navigate("/contact-us");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Contact Us
                  </div>
                  <div
                    className="hover-underline cursor-pointer"
                    onClick={() => {
                      navigate("/terms-of-service");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Terms of Service
                  </div>
                  <div
                    className="hover-underline cursor-pointer"
                    onClick={() => {
                      navigate("/shipping-policy");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Shipping Policy
                  </div>{" "}
                  <div
                    className="hover-underline cursor-pointer"
                    onClick={() => {
                      navigate("/refund-policy");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Refund Policy
                  </div>
                  <div
                    className="hover-underline cursor-pointer"
                    onClick={() => {
                      navigate("/cancellation-policy");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Cancellation Policy
                  </div>
                  <div
                    className="hover-underline cursor-pointer"
                    onClick={() => {
                      navigate("/data-retention-policy");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Data Retention
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <small>© 2025,</small>
            <div
              className="hover-underline cursor-pointer"
              onClick={() => {
                navigate("/privacy-policy");
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
            >
              Privacy Policy
            </div>
          </div>
        </footer>
      )}
    </Provider>
  );
}
