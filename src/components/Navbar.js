import React from "react";
import Logo from "../images/Logo.svg";
import { Row, Col, Select, Slider, Button, Input, Checkbox, Space } from "antd";
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
      {/* <Space> */}
        <Row className="navbar-container">
          <Col className="left-navbar-section">
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
            offset={8}
            align="right"
          >
            <Row gutter={8} justify="end">
              <Col>
                <Search placeholder="Search Location..." enterButton />
              </Col>
              <Col>
                <Select
                  placeholder="Any price"
                  options={[
                    {
                      label: (
                        <Select
                          placeholder="10,000"
                          options={[
                            {
                              label: "",
                            },
                          ]}
                        />
                      ),
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
              </Col>
              <Col>
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
          </Col>
        </Row>
      {/* </Space> */}
    </>
  );
};
// styled-component
// const StyledSelect = styled(Select)`
//   padding: 10px;
// `;
export default Navbar;
