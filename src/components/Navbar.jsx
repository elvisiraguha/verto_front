import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import "./Navbar.css";

const Navbar = ({ profile, isAuth }) => {
  return (
    <Row justify="space-between" className="navbar">
      <Col span={8}>Ampersand Dashboard</Col>
      <Col span={8} flex={1} justify="end">
        {!isAuth ? <div>unauthenticated</div> : <div>{profile.firstName}</div>}
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth,
  profile: user.profile,
});
export default connect(mapStateToProps, {})(Navbar);
