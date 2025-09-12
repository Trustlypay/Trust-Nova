import { Modal } from "antd";
import { ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";

export default function PaymentFailure({
  isModalOpenFail,
  setIsModalOpenFail,
}) {
  const navigate = useNavigate();

  const handleOk = () => {
    setIsModalOpenFail(false);
    navigate("/checkout");
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
        <Modal
          open={isModalOpenFail}
          footer={null}
          closable={false}
          title="Payment Failed"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className="btn btn-outline-dark btn-sbuttonm m-2"
              onClick={handleOk}
            >
              Retry
            </button>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
}
