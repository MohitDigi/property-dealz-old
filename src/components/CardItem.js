import React from "react";
import { Row, Col } from "antd";
import Data from "../properties";

const CardItem = () => {
  return (
    <>
      {Data.map((item,id) => {
        return (
          <Col key={id}>
            <div className="card-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          </Col>
        );
      })}
    </>
  );
};
export default CardItem;
