import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
function TimeLine() {
  return (
    <Timeline
      mode="alternate"
      style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
    >
      <Timeline.Item color="blue">
        KMS Software Engineer Internship 08-2021
      </Timeline.Item>
      <Timeline.Item color="red">
        Third place AtWare's Minathon 03-2021
      </Timeline.Item>
      <Timeline.Item color="green">
        Launched{" "}
        <a target="_blank" href="https://dgnl.herokuapp.com/">
          <b>DGNL mock test</b>
        </a>{" "}
        2019
      </Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
        Started studying at HCMUS 08-2018
      </Timeline.Item>
      <Timeline.Item color="yellow">
        Tired of making game and start getting into Web instead. Make some good
        Wordpress website... 2016.
      </Timeline.Item>
      <Timeline.Item color="red" style={{ fontSize: "10px" }}>
        Made a game called "Keep Digging" after months of hard work and then
        throw it to the trash because I lost the game files. I didn't know Git
        exist back then. 2015
      </Timeline.Item>
      <Timeline.Item color="red">
        Made a Flappy bird clone but failed to deliver it 2014.
      </Timeline.Item>
      <Timeline.Item color="orange" style={{ fontSize: "10px" }}>
        First time scripting on a game called CS2D. This was my childhood game.
        I met many good friends from it. 2012
      </Timeline.Item>
      <Timeline.Item dot={<UserOutlined style={{ fontSize: "16px" }} />}>
        Born in 2000
      </Timeline.Item>
    </Timeline>
  );
}
export default TimeLine;
