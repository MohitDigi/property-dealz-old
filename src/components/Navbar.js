import React from "react";
import { Row, Col, Select, Slider, Button, Input, Checkbox } from "antd";
import Logo from "../images/Logo.svg";
const { Search } = Input;

const Navbar = () => {
  return (
    <>
      {/* Navbar start */}
      <Row className="navbar-container" justify="space-around">
        {/* Left section contain the logo of the site */}
        <Col span={12} className="left-navbar-section ">
          <img src={Logo} alt="logo" />
        </Col>
        {/* Right section contain searchbox, filter option like price and no. of bedroom */}
        <Col span={12} className="right-navbar-section">
          <Row gutter={24} align="middle" justify="end">
            <Col span={12}>
              {/* Search box component instead of input to reduce the code*/}
              <Search
                placeholder="Search Location..."
                size="large"
                enterButton
              />
            </Col>
            {/* Price filter */}
            <Col>
              <Select
                placeholder="Any price"
                size="large"
                options={[
                  {
                    label: (
                      <Select
                        placeholder="10,000"
                        options={[
                          {
                            label: <></>,
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
            {/* No. of bedroom filter */}
            <Col >
              <Select
                placeholder="3 Bedrooms"
                size="large"
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
      {/* Navbar ends */}
    </>
  );
};
export default Navbar;
