import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Spin } from "antd";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/user";
import Dashboard from "../views/Dashboard";
import StationDashboard from "../views/StationManager/Index";
import DriverDashboard from "../views/Driver/Index";
import InventoryDashboard from "../views/Inventory/Index";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
  DownOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import "./home.css";

const Landing = ({ logout, profile, isAuth }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeBar, setActiveBar] = useState("1");
  const [pageLoading, setPageLoading] = useState(true);
  const [filteredRoutes, setFilteredRoutes] = useState([]);

  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const routes = [
    {
      menuKey: "1",
      name: "Dashboard",
      component: <StationDashboard />,
      icon: <UploadOutlined />,
      role: "stationManager",
    },
    {
      menuKey: "2",
      name: "Dashboard",
      component: <DriverDashboard />,
      icon: <UploadOutlined />,
      role: "driver",
    },
    {
      menuKey: "3",
      name: "Dashboard",
      component: <InventoryDashboard />,
      icon: <UploadOutlined />,
      role: "inventory",
    },
  ];

  useEffect(() => {
    if (isAuth && profile) {
      const userRoutes = routes.filter((route) => route.role === profile.role);
      const firstKey = userRoutes[0].menuKey;
      setActiveBar(firstKey);
      setFilteredRoutes(userRoutes);
      setPageLoading(false);
    }
  }, [profile]);

  const userMenu = (
    <Menu>
      <Menu.Item key={"1"}>
        <a href="#here">Profile</a>
      </Menu.Item>

      <Menu.Item key={"2"} danger onClick={() => logout()}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return !isAuth ? (
    <Navigate to="/" />
  ) : (
    <Layout className="home-container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">Ampersand Network </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={(e) => setActiveBar(e.key)}
          defaultSelectedKeys={[activeBar]}
        >
          {pageLoading
            ? ""
            : filteredRoutes.map((route) => (
                <Menu.Item key={route.menuKey} icon={route.icon}>
                  {route.name}
                </Menu.Item>
              ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          {collapsed ? (
            <MenuUnfoldOutlined onClick={toggle} className="trigger" />
          ) : (
            <MenuFoldOutlined onClick={toggle} className="trigger" />
          )}

          <Dropdown icon={<DownOutlined />} overlay={userMenu}>
            <div>
              {isAuth ? (
                <div>
                  <UserOutlined />
                  {profile.firstName} {profile.lastName}
                </div>
              ) : (
                ""
              )}
            </div>
          </Dropdown>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {pageLoading ? (
            <Spin indicator={antIcon} />
          ) : (
            <Dashboard routes={filteredRoutes} activePage={activeBar} />
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  profile: state.user.profile,
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { logout })(Landing);
