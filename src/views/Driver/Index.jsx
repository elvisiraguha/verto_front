import { Alert, Button, Divider, Progress } from "antd";
import React from "react";
import { connect } from "react-redux";
import { getBatteryStatus } from "../../redux/actions/battery";

const Index = ({ profile, getBatteryStatus, loading, status, charge }) => {
  const checkStatus = (e) => {
    getBatteryStatus();
  };
  const warning = status < 50 ? true : false;

  return (
    <div>
      <h4>
        Hello {profile.firstName} {profile.lastName}
      </h4>
      <Button onClick={checkStatus} loading={loading}>
        Check battery status
      </Button>
      <Divider />
      {status ? (
        <div>
          <Progress
            type="circle"
            percent={status}
            status="active"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
          />
          <div>Current battery capacity</div>
          <Divider />
          {warning ? (
            <Alert message={charge} type="warning" />
          ) : (
            <Alert message={charge} type="success" />
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.user.profile,
  status: state.battery.status,
  charge: state.battery.charge,
  loading: state.battery.loading,
});
export default connect(mapStateToProps, { getBatteryStatus })(Index);
