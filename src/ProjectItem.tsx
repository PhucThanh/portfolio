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
function ProjectItem({ title, desc, git, nb, live }: prop) {
  return (
    <Card>
      <Row gutter={8}>
        <Col span={20}>
          <Title level={3}>{title}</Title>
          <Paragraph>{desc}</Paragraph>
          <Divider />
          <a>{git}</a> <a>{nb}</a> <a>{live}</a>
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Image
            width="150px"
            style={{ objectFit: "cover" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </Row>
    </Card>
  );
}
export default ProjectItem;
