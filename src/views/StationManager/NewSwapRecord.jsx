import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Radio, Alert } from "antd";
import { connect } from "react-redux";
import { createSwap, fetchSwaps } from "../../redux/actions/swaps";

const CreateForm = ({
  visible,
  onCreate,
  onCancel,
  creating,
  message,
  error,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="REcord a new swap"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
        creating={true}
      >
        <Form.Item
          name="UserId"
          required
          label="Driver code"
          rules={[
            {
              required: true,
              message: "Please input the driver's code",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="batterySubmitted"
          required
          label="Battery in"
          rules={[
            {
              required: true,
              message: "Please input the incoming battery code",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="batterySubmittedStatus"
          required
          label="Used energy (%)"
          rules={[
            {
              required: true,
              message: "Please input the battery used percentage",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="batteryTaken"
          required
          label="Battery out"
          rules={[
            {
              required: true,
              message: "Please input the outgoing battery code",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="waitingTime"
          required
          label="Wait time (sec)"
          rules={[
            {
              required: true,
              message:
                "Please input the time it took to swap batter in seconds",
            },
          ]}
        >
          <Input type="number" />
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
    </Modal>
  );
};

const NewSwapRecord = ({
  createSwap,
  loading,
  error,
  message,
  fetchSwaps,
  profile,
}) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    const payload = {
      ...values,
      SwapStationId: profile["SwapStation.id"],
    };
    createSwap(payload);
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Record
      </Button>
      <CreateForm
        visible={visible}
        onCreate={onCreate}
        creating={loading}
        error={error}
        message={message}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.swaps.loading,
  error: state.swaps.error,
  message: state.swaps.message,
  profile: state.user.profile,
});

export default connect(mapStateToProps, { createSwap, fetchSwaps })(
  NewSwapRecord
);
