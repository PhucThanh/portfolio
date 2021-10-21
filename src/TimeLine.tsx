import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
function TimeLine() {
  return (
    <Timeline mode="alternate">
      <Timeline.Item color="blue">
        KMS Software Engineer Internship 08-2022
      </Timeline.Item>
      <Timeline.Item color="red">
        Third place AtWare's Minathon 03-2021
      </Timeline.Item>
      <Timeline.Item color="green">
        Launched{" "}
        <a href="https://dgnl.herokuapp.com/">
          <b>DGNL mock test</b>
        </a>{" "}
        2019
      </Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
        Started studying at HCMUS 08-2018
      </Timeline.Item>
      <Timeline.Item dot={<UserOutlined style={{ fontSize: "16px" }} />}>
        Born in 2000
      </Timeline.Item>
    </Timeline>
  );
}
export default TimeLine;
