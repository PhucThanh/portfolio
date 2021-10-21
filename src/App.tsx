import React from "react";
import "antd/dist/antd.css";
import "./App.css";

import { Layout, Menu, Typography } from "antd";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import TimeLine from "./TimeLine";
import Projects from "./Projects";

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
function App() {
  const handleClick = (e: any) => {
    scroller.scrollTo(e.key, { duration: 1000, delay: 50, smooth: true });
  };
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <Menu onClick={(e) => handleClick(e)} mode="horizontal">
            <Menu.Item key="intro">Who am I?</Menu.Item>
            <Menu.Item key="projects">Projects</Menu.Item>
            <Menu.Item key="timeline">Timeline</Menu.Item>
            <Menu.Item key="blog">Blogs</Menu.Item>
          </Menu>
        </Header>
        <img
          style={{ maxHeight: "300px", objectFit: "cover" }}
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/facebook-cover.jpg"
        />
        <Content style={{ padding: "25px 50px", backgroundColor: "white" }}>
          <Title type="danger"> Site is work in progess...</Title>
          <section id="intro">
            <Title>Who am I?</Title>
            <Paragraph>
              In the process of internal desktop applications development, many
              different design specs and implementations would be involved,
              which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design
              language for background applications, is refined by Ant UED Team,
              which aims to{" "}
              <Text strong>
                uniform the user interface specs for internal background
                projects, lower the unnecessary cost of design differences and
                implementation and liberate the resources of design and
                front-end development
              </Text>
              .
            </Paragraph>
          </section>
          <section id="projects" className="section_project">
            <Title>Projects</Title>
            <Projects />
          </section>
          <section id="timeline">
            <Title>Timeline</Title>
            <TimeLine />
          </section>
          <section id="blog">
            <Title>Blogs</Title>
            <Text type="danger">Coming soon...</Text>
          </section>
        </Content>
      </Layout>
    </>
  );
}

export default App;
