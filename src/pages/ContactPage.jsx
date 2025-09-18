import { ConfigProvider, Form, Input, theme } from "antd";
import { App as AntdApp } from "antd";

const ContactPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    form.resetFields();
  };

  return (
    <div
      style={{
        height: "calc(100vh - 78px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="heading-1" style={{ marginBottom: "24px" }}>
        Contact Us
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <img
            src="/assets/trust_nova_logo.jpg"
            alt="Card"
            style={{ width: "45%" }}
          />
          <p className="heading-2">
            TrustlyPay Financial Technology Private Limited
          </p>
          <p>
            <strong>Address:</strong>
            <span>&nbsp;</span>Plot No 4/2, Sector 1, Madhapur, HUDA Techno
            Enclave, HITEC City, <br /> Hyderabad, Telangana - 500081
          </p>
          <p>
            <strong>Email:</strong>
            <span>&nbsp;</span>info@trustnova.com
          </p>
          <p>
            <strong>Phone:</strong>
            <span> &nbsp;+91-8247 648 184</span>
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className="heading-2" style={{ marginBottom: "12px" }}>
            Contact form
          </h2>
          <AntdApp component={false}>
            <ConfigProvider
              theme={{
                algorithm: [theme.darkAlgorithm],
              }}
            >
              <Form
                form={form}
                size="large"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "600px",
                }}
              >
                <Form.Item name="Name">
                  <Input placeholder="Enter Name" />
                </Form.Item>
                <Form.Item name="Email">
                  <Input placeholder="Enter Email" />
                </Form.Item>
                <Form.Item name="Phone Number">
                  <Input placeholder="Enter Phone Number" />
                </Form.Item>
                <Form.Item name="Comment">
                  <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    placeholder="Enter Comment"
                  />
                </Form.Item>

                <Form.Item label={null}>
                  <button className="btn btn-outline-light btn-sbuttonm m-2">
                    Submit
                  </button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </AntdApp>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
