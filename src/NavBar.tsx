import React from "react";
import { Menu } from "antd";

import Icon, {
  LinkedinFilled,
  FacebookFilled,
  GithubFilled,
} from "@ant-design/icons";
const { SubMenu } = Menu;
function NavBar(prop: any) {
  return (
    <>
      <Menu onClick={(e) => prop.handleClick(e)} mode="horizontal">
        <Menu.Item key="intro">Who am I?</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="timeline">Timeline</Menu.Item>
        <Menu.Item key="blog">Blogs</Menu.Item>
        <Menu.Item
          key="https://www.linkedin.com/in/phuc-tran-thanh/"
          style={{ float: "right", marginLeft: "auto" }}
        >
          <LinkedinFilled style={{ fontSize: "20px" }} />
        </Menu.Item>
        <Menu.Item
          key="https://github.com/PhucThanh"
          style={{ float: "right" }}
        >
          <GithubFilled style={{ fontSize: "20px" }} />
        </Menu.Item>
        <Menu.Item
          key="https://www.facebook.com/Phuc.Entertainment/"
          style={{ float: "right" }}
        >
          <FacebookFilled style={{ fontSize: "20px" }} />
        </Menu.Item>
      </Menu>
    </>
  );
}
export default NavBar;
