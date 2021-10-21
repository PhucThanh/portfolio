import React from "react";
import { Typography } from "antd";
import { Row, Col, Card, Image, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;
interface prop {
  title: string;
  desc: string;
  git?: string;
  nb?: string;
  live?: string;
  img?: string;
}
function ProjectItem({ title, desc, git, nb, live, img }: prop) {
  return (
    <Card>
      <Row gutter={8}>
        <Col md={20}>
          <Title level={3}>{title}</Title>
          <Paragraph>{desc}</Paragraph>
          <Divider />
          {git ? (
            <a target="_blank" href={git}>
              Github{" "}
            </a>
          ) : null}
          {nb ? (
            <a target="_blank" href={nb}>
              Notebook{" "}
            </a>
          ) : null}
          {live ? (
            <a target="_blank" href={live}>
              Live
            </a>
          ) : null}
        </Col>
        <Col md={4} style={{ textAlign: "center" }}>
          <Image
            width="150px"
            height="150px"
            style={{ objectFit: "cover" }}
            alt="Project image"
            src={img}
          />
        </Col>
      </Row>
    </Card>
  );
}
export default ProjectItem;
