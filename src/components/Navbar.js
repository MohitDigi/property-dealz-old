import React from "react";
import Logo from "../images/Logo.svg";
import { Row, Col, Select, Slider, Button, Input, Checkbox } from "antd";
const { Search } = Input;
const items = [
  {
    key: "1",
    label: "",
  },

  {
    key: "3",
    label: (
      <Slider
        range={{
          draggableTrack: true,
        }}
        defaultValue={[20, 50]}
      />
    ),
  },
];

const Navbar = () => {
  return (
    <>
      <Row
        className="navbar-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2rem",
          // padding: 2,
        }}
      >
        <Col className="left-navbar-section"
        style={{
          padding: 2,
        }}
        >
          <img
            src={Logo}
            style={{
              padding: 2,
            }}
          />
        </Col>
        <Col
          span={12}
          className="right-navbar-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Search placeholder="Search Location..." enterButton style={{  }}/>
          <Select
            placeholder="Any price"
            options={[
              {
                label: (<Select
                  placeholder="10,000"
                  options={[
                    { 
                      label: "" 
                    },
                  ]}
                />),
              },
              {
                label: (
                  <Slider
                    range={{
                      draggableTrack: true,
                    }}
                    defaultValue={[20, 50]}
                  />
                ),
              },
              {
                label: <Button type="primary">Apply Filter</Button>,
              },
            ]}
          />
          <Select
            placeholder="3 Bedrooms"
            options={[
              
              {
                label: <Checkbox value="1">1</Checkbox>,
              },
              {
                label: <Checkbox value="2">2</Checkbox>,
              },
              {
                label: <Checkbox value="3">3</Checkbox>,
              },
              {
                label: <Checkbox value="4+">4+</Checkbox>,
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
};
// styled-component
// const StyledSelect = styled(Select)`
//   padding: 10px;
// `;
export default Navbar;
