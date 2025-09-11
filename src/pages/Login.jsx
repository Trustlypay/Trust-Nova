import { useState } from "react";
import { Form, Input } from "antd";
import { useLogin } from "../service/user.service.hook";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const { mutateAsync: loginMutate } = useLogin();

  const onFinish = () => {
    void form.validateFields().then(async () => {
      loginMutate({
        email: form.getFieldValue("Email"),
        password: form.getFieldValue("Password"),
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          navigate("/");
        },
        onError: (data) => {
          setError(data.response.data.error);
        },
      });
    });
  };

  return (
    <div className="wrapper">
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
            initialValue="kiran@123456.com" // TODO - remove this
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
            initialValue="qwertyuiop" // TODO - remove this
          >
            <Input.Password placeholder="Enter Password" variant="underlined" />
          </Form.Item>

          <p>
            New Here?
            <NavLink
              to="/register"
              className="text-decoration-underline text-info"
            >
              Register
            </NavLink>
          </p>

          {error && <p style={{ color: "red" }}>Error: {error}</p>}

          <button className="btn btn-outline-light btn-sbuttonm m-2">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
