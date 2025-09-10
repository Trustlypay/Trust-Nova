import { Form, Input } from "antd";

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
    <>
      <div
        style={{
          padding: "4% 12%",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div>
          <h1 className="heading-1" style={{ marginBottom: "24px" }}>
            Contact Us
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <p>
              <strong>Address:</strong>
              <span>&nbsp;</span>A2 312 Palladium Corpora, RD BHD Divyabhaskar
              Press, <br /> Jivraj Park, Ahmedabad City – 380051, Gujarat
            </p>
            <p>
              <strong>Email:</strong>
              <span>&nbsp;</span>Info@onestopfashionhub.com
            </p>
            <p>
              <strong>Phone:</strong>
              <span> &nbsp;+91 8247648184</span>
            </p>
          </div>
        </div>
        <div className="my-3 h-px bg-zinc-500" />
        <div>
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
            <Form
              form={form}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
