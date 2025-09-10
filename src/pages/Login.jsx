import { useState } from "react";
import { Form, Input } from "antd";

const Login = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);

  const onFinish = () => {
    void form.validateFields().then(async () => {
      // loginMutate({
      //   email: form.getFieldValue("Email"),
      //   password: form.getFieldValue("Password"),
      //   onSuccess: (data) => {
      //     localStorage.setItem("token", data.token);
      //     navigate("/");
      //   },
      //   onError: (data) => {
      //     setError(data.response.data.error);
      //   },
      // });
    });
  };

  return (
    <>
      <div>
        <h1 className="text-center">Login</h1>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form
            style={{
              minWidth: "300px",
              textAlign: "center",
            }}
            onFinish={onFinish}
            form={form}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          >
            <Form.Item
              name="Email"
              validateFirst
              rules={[
                { required: true },
                { type: "email" },
                { whitespace: true },
              ]}
            >
              <Input placeholder="Enter Email Address" variant="underlined" />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                variant="underlined"
              />
            </Form.Item>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            <button className="btn btn-outline-light btn-sbuttonm m-2">
              Login
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
