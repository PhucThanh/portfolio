import { Layout, Menu, Typography } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { scroller } from "react-scroll";
import "./App.css";
import NavBar from "./NavBar";
import Projects from "./Projects";
import TimeLine from "./TimeLine";

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
function App() {
  const handleClick = (e: any) => {
    if (e.key[5] != ":")
      scroller.scrollTo(e.key, { duration: 1000, delay: 50, smooth: true });
    else window.open(e.key);
  };
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <NavBar handleClick={handleClick} />
        </Header>
        <img
          style={{ maxHeight: "300px", objectFit: "cover" }}
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/facebook-cover.jpg"
        />
        <Content style={{ padding: "25px 50px", backgroundColor: "white" }}>
          <Title type="danger"> I am still building this site!...</Title>
          <section id="intro">
            <Title>Who am I?</Title>
            <Paragraph>
              I am a developer who is very enthusiastic about AI. This is my
              current portfolio to showcase my web development and machine
              learning projects. Do web development and machine learning go well
              together? I think so. I learn a bit from both. Now I am focusing
              on finding a job in Machine learning/ AI / Data Science. Please
              feel free to contact me via my Facebook or LinkedIn at the top
              right corner of this page. ​ Meanwhile, why don't you have a look
              at some of my projects? I hope you will like it!
              <Paragraph>
                <Text strong>
                  Btw, here is a random list of things that I enjoy:
                </Text>
              </Paragraph>
              <ul>
                <li>Reading.</li>
                <li>Crypto 4 fun.</li>
                <li>Walking at the park.</li>
                <li>Road trip.</li>
                <li>Coffee with friends.</li>
                <li>Music.</li>
              </ul>
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
