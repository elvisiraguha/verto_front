import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";
import { connect } from "react-redux";
import { login } from "../redux/actions/user";

import "./landing.css";

const Landing = ({ profile, isAuth, loading, error, message, login }) => {
  const [form] = Form.useForm();

  const handleSubmit = (data) => {
    login(data);
  };

  useEffect(() => {
    if (isAuth) {
      setTimeout(() => {
        return <Navigate to="/home" />;
      }, 2000);
    }
  }, [isAuth]);

  return isAuth ? (
    <Navigate to="/home" />
  ) : (
    <div className="page-container">
      <div
        style={{
          width: "400px",
          height: "340px",
          padding: "40px",
          boxShadow: "0px 0px 2px 0px",
          borderRadius: "3px",
        }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={true}
        >
          <Form.Item
            label="Email"
            name="email"
            required
            tooltip="This is a required field"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email" },
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            required
            tooltip="This is a required field"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="password" type="password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="submit"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              Submit
            </Button>
          </Form.Item>
          {message ? (
            <Alert closable description={message} type="success" showIcon />
          ) : (
            ""
          )}
          {error ? (
            <Alert closable description={error} type="error" showIcon />
          ) : (
            ""
          )}
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.user.profile,
  loading: state.user.loading,
  error: state.user.error,
  message: state.user.message,
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { login })(Landing);
