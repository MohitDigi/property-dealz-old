import React from "react";
import { Row, Col, Card } from "antd";
import { Data } from "../properties";
import img from "../images/bed-icon.svg";

console.log(Data);

const CardItem = () => {
  return (
    <>
      {Data.map((item) => {
        return (
          <Row key={item.id}>
            <Card
              title="Card title"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            hello
          </Row>
        );
      })}
    </>
  );
};
export default CardItem;
