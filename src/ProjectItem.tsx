import React from "react";
import { Typography, Tag } from "antd";
import { Row, Col, Card, Image, Divider } from "antd";
import { pTag, getColor } from "./tags";
const { Title, Paragraph, Text } = Typography;
interface prop {
  title: string;
  desc: string;
  git?: string;
  nb?: string;
  live?: string;
  img?: any;
  tags?: pTag[];
}
function ProjectItem({ title, desc, git, nb, live, img, tags }: prop) {
  if (tags) console.log(tags[0]);
  return (
    <Card>
      <Row gutter={8}>
        <Col md={19}>
          <Title level={3}>{title}</Title>
          <Paragraph>{desc}</Paragraph>
          {tags?.map((tag) => {
            return <Tag color={getColor(tag)}>#{tag}</Tag>;
          })}
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
        <Col md={5} style={{ textAlign: "center" }}>
          <Image
            style={{ objectFit: "cover", maxWidth: "180px", aspectRatio: "1" }}
            alt="Project image"
            src={process.env.PUBLIC_URL + img}
          />
        </Col>
      </Row>
    </Card>
  );
}
export default ProjectItem;
