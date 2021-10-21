import React from "react";
import "antd/dist/antd.css";
import "./App.css";

import { Layout, Menu, Typography } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import TimeLine from "./TimeLine";
import Projects from "./Projects";

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
function App() {
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <Menu mode="horizontal">
            <Menu.Item key="intro">Who am I?</Menu.Item>
            <Menu.Item key="project">Projects</Menu.Item>
            <Menu.Item key="experience">Timeline</Menu.Item>
            <Menu.Item key="blog">Blogs</Menu.Item>
          </Menu>
        </Header>
        <img
          style={{ maxHeight: "200px", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=812&q=80"
        />
        <Content style={{ padding: "25px 50px", backgroundColor: "white" }}>
          <section>
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
          <section className="section_project">
            <Title>Projects</Title>
            <Projects />
          </section>
          <section>
            <Title>Timeline</Title>
            <TimeLine />
          </section>
          <section>
            <Title>Blogs</Title>
            <Text type="danger">Coming soon...</Text>
          </section>
        </Content>
      </Layout>
    </>
  );
}

export default App;
