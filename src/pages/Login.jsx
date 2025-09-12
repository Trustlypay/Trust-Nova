import { useState } from "react";
import { Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { userService } from "../service/user.service";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);

  const onFinish = () => {
    void form.validateFields().then(async () => {
      userService
        .login(form.getFieldValue("Email"), form.getFieldValue("Password"))
        .then((res) => {
          localStorage.setItem("token", res?.token);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setError(error?.response?.data?.error);
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
            <Input.Password placeholder="Enter Password" variant="underlined" />
          </Form.Item>

          <p style={{ color: "var(--white)" }}>
            New Here?{" "}
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
