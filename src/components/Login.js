import React from "react";
import { LeftLoginImg } from "../components/assets";
import { Button, Col, Input, Row, Form, Card } from "antd";
import fetchapi from "../config/fetchApi";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleUserLogin = async (value) => {
    console.log(value);
    let reqBody = {
      method: "get",
      reqUrl: "UserCredential",
    };
    let apiResponse = await fetchapi(reqBody);
    
    var data = apiResponse.data;
    if (data.emailId === value.email && data.password === value.password) {
      navigate("/home");
      localStorage.setItem("token", data.userToken);
    } else {
      NotificationManager.error("Please enter proper EmailId and Password");
    }
  };
  return (
    <div className="login-bg-color login-content">
      <Row>
        <Col lg={12} md={12} xs={24} sm={24}>
          <div>
            <h2>Hi, Welcome Back</h2>
            <img src={LeftLoginImg} alt="img" />
          </div>
        </Col>
        <Col lg={12} md={12} xs={24} sm={24}>
          <div className="login-form">
            <Card bordered={false} className="login-card">
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={handleUserLogin}
                autoComplete="off"
                className="login-indv-form"
              >
                <Row className="">
                  <p>Email</p>
                </Row>
                <Form.Item
                  label=""
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    {
                      type: "email",
                      message: "Please enter a valid E-mail address.",
                    },
                  ]}
                >
                  <Input size="large" placeholder="example@gmail.com" />
                </Form.Item>

                <Row className="justify-content-between">
                  <p>Password</p>
                </Row>

                <Form.Item
                  label=""
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password size="large" placeholder="********" />
                </Form.Item>

                <Row className="indv-login-form-btn-sec">
                  <Form.Item>
                    <Button
                      className="signin-btn"
                      size="large"
                      htmlType="submit"
                      type="primary"
                    >
                      Sign In
                    </Button>
                  </Form.Item>
                </Row>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
      <NotificationContainer />
    </div>
  );
};

export default Login;
