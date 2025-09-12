import { Modal } from "antd";
import { ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess({
  isModalOpenSuccess,
  setIsModalOpenSuccess,
}) {
  const navigate = useNavigate();

  const handleOk = () => {
    setIsModalOpenSuccess(false);
    navigate("/");
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#ffffff",
              boxShadow:
                "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
              colorIcon: "rgba(0,0,0,0.45)#fff",
            },
          },
        }}
      >
        <Modal open={isModalOpenSuccess} footer={null} closable={false}>
          <div
            style={{
              textAlign: "center",
              padding: "10px",
            }}
          >
            <p>Order has been Placed</p>
            <p style={{ padding: "10px" }}>
              order will be shipped in 3-5 business days
            </p>
            <button
              className="btn btn-outline-dark btn-sbuttonm m-2"
              onClick={handleOk}
            >
              Continue Shopping
            </button>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
}
