import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import {
  Home,
  Product,
  ProductsPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import RefundPolicy from "./pages/Refund-Policy";
import TermsOfService from "./pages/Terms-Of-Service";
import ShippingPolicy from "./pages/Shipping-Policy";
import DataRetentionPolicy from "./pages/Data-Retention-Policy";
import CancellationPolicy from "./pages/Cancellation-Policy";
import { userService } from "./service/user.service";
import UserContextProvider from "./components/user-context-provider";
import PaymentSuccess from "./components/payment-success";
import PaymentFailure from "./components/payment-failure";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userDetails, setUserDetails] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    userService
      .getCurrentUser()
      .then((res) => {
        setUserDetails(res);
      })
      .catch((error) => {
        console.log(error);
      });

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
      <UserContextProvider userDetails={userDetails}>
        {token && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          {!token && <Route path="/login" element={<Login />} />}
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/*" element={<PageNotFound />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route
            path="/data-retention-policy"
            element={<DataRetentionPolicy />}
          />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route
            path="/checkout/success"
            element={
              <PaymentSuccess
                isModalOpenSuccess={true}
                setIsModalOpenSuccess={() => false}
              />
            }
          />
          <Route
            path="/checkout/error"
            element={
              <PaymentFailure
                isModalOpenFail={true}
                setIsModalOpenFail={() => false}
              />
            }
          />
        </Routes>
        {token && (
          <footer
            className="custom-class"
            style={{
              backgroundColor: "#2D5D7B",
              color: "white",
            }}
          >
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
                  <i className="heading-3"> Quick Links</i>
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
                        navigate("/product");
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
                      Data Retention Policy
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                padding: "10px",
              }}
            >
              <small>© 2025,Trust Nova </small>
            </div>
          </footer>
        )}
      </UserContextProvider>
    </Provider>
  );
}
