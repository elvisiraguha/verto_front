import React, { useEffect } from "react";
import { connect } from "react-redux";

const Dashboard = ({ routes, activePage }) => {
  return (
    <div>
      {routes.map((route, i) => {
        if (route.menuKey != activePage) {
          return <div key={i} />;
        } else {
          return <div key={i}>{route.component}</div>;
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  profile: state.user.profile,
});
export default connect(mapStateToProps, {})(Dashboard);
