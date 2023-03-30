import { Table } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSwaps } from "../../redux/actions/swaps";

const Inventory = ({ swaps, fetchSwaps }) => {
  useEffect(() => {
    fetchSwaps();
  }, []);

  const columns = [
    {
      title: "Station",
      dataIndex: "SwapStationId",
      key: "SwapStationId",
      render: (i, station) => <span>{station.SwapStation.name}</span>,
    },
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
      render: (time) => <span>{new Date(time).toLocaleString()}</span>,
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
      <Table dataSource={swaps} columns={columns} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  swaps: state.swaps.swapsList,
  loading: state.swaps.loading,
});
export default connect(mapStateToProps, { fetchSwaps })(Inventory);
