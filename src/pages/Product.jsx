import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { DATA } from "../products";

const Product = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const data = DATA.find((item) => {
        return item?.id === Number(id);
      });
      setProduct(data);
      setLoading(false);
      const data2 = DATA?.filter((item) => {
        return item?.category === data?.category;
      });
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 5%",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              width="500px"
              height="500px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h6 className="text-uppercase text-muted">{product.category}</h6>
            <h1 className="display-5">{product.title}</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <h3 className="display-4  my-4">
                ₹{product.price?.toLocaleString("en-IN")}
              </h3>{" "}
              <p
                className="lead"
                style={{
                  color: "#FAA916",
                  fontSize: "24px",
                  paddingRight: "60px",
                }}
              >
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
            </div>

            <div className="lead">
              {product?.description?.[0].split("?").map((item1) => (
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <span>👉 </span> <span> {item1}</span>
                </div>
              ))}
            </div>
            <br />
            <button
              className="btn btn-outline-dark"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    const navigate = useNavigate();

    return (
      <>
        <div className="py-4 my-4">
          <div
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            {similarProducts.map((item) => {
              return (
                <div
                  id={item.id}
                  key={item.id}
                  style={{ textAlign: "center", height: "100%" }}
                >
                  <div
                    key={item.id}
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
                      to={"/product/" + item.id}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }}
                    >
                      <img
                        src={item.image}
                        alt="Card"
                        style={{
                          height: "200px",
                          width: "200px",
                        }}
                      />
                    </Link>
                    <div
                      onClick={() => {
                        navigate("/product/" + item.id);
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }}
                    >
                      {item.title.substring(0, 25)}
                    </div>

                    <div>
                      <div className="heading-2">
                        ₹ {item.price?.toLocaleString("en-IN")}
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
                        {item.rating && item.rating.rate}{" "}
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <button
                        className="btn m-1"
                        style={{
                          fontSize: "24px",
                          border: "1.5px",
                        }}
                        onClick={() => addProduct(item)}
                      >
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <div>{loading ? <Loading /> : <ShowProduct />}</div>
      <div className="row my-5 py-5">
        <div className="d-none d-md-block">
          <h2 style={{ textAlign: "center" }}>You may also Like</h2>
          <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
            {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Product;
