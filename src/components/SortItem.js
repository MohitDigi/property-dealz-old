import React from "react";
import { Checkbox, Button, Dropdown, Row, Col } from "antd";
import sort_icon from "../images/Vector.svg";


const items = [
  {
    label: <Checkbox value="1">Low to High</Checkbox>,
  },
  {
    label: <Checkbox value="2">High to Low</Checkbox>,
  },
];

const SortItem = () => {
  return (
    <Row style={{ display: "flex", justifyContent: "space-between" }}>
      <Col>
        <p style={{ fontSize: "1.2rem" }}>
          <strong >20</strong> Properties Available
        </p>
      </Col>
      <Col>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          
        >
          <Button
            type="text"
            style={{
              fontSize: "1.2rem",
            }}
          >
            {" "}
            <img
              src={sort_icon}
              style={{
                width: "18px",
                margin: "0 3px",
              }}
            />
            Sort By Price
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default SortItem;