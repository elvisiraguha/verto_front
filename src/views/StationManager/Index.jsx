import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStationSwaps } from "../../redux/actions/swaps";
import NewSwapRecord from "./NewSwapRecord";

const Station = ({ swaps, fetchStationSwaps, profile }) => {
  useEffect(() => {
    fetchStationSwaps(profile["SwapStation.id"]);
  }, []);
  const columns = [
    {
      title: "Battery in",
      dataIndex: "batterySubmitted",
      key: "batterySubmitted",
    },
    {
      title: "Used capacity",
      dataIndex: "batterySubmittedStatus",
      key: "batterySubmittedStatus",
    },
    {
      title: "Battery out",
      dataIndex: "batteryTaken",
      key: "batteryTaken",
    },
    {
      title: "Swapped at",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Driver",
      dataIndex: "UserId",
      key: "UserId",
      render: (i, station) => <span>{station.User.firstName}</span>,
    },
    {
      title: "Waiting time (sec)",
      dataIndex: "waitingTime",
      key: "waitingTime",
    },
  ];
  return (
    <div>
      <h3>Swaps records</h3>
      <NewSwapRecord />
      <Table dataSource={swaps} columns={columns} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  swaps: state.swaps.swapsList,
  loading: state.swaps.loading,
  profile: state.user.profile,
});
export default connect(mapStateToProps, { fetchStationSwaps })(Station);
