import React from "react";
import { Row, Col } from "antd";
import { Data } from "../properties";
import hotel from "../images/hotel.png";
import location from "../images/location.svg";
import bed from "../images/bed-icon.svg";
import square from "../images/square-icon.svg";
import tub from "../images/shover-icon.svg";
// console.log(Data);

const CardItem = () => {
  return (
    <div style={{ overflowY: "scroll", overflowX: "hidden", height: "90vh" }}>
      <Row span={12} justify="space-evenly" gutter={[16, 16]}>
        {Data.map((item) => {
          return (
            <>
              <Col span={24} >
                <Row gutter={[16, 16]} justify="start" align="middle">
                  {/* Column 1 for image */}
                  <Col>
                    <img
                      alt="example"
                      src={hotel}
                      style={{
                        padding: "20px",
                        width: "200px",
                      }}
                    />
                  </Col>
                  {/* col 1 end */}
                  {/* Col 2 for desc */}
                  <Col>
                    {/* Row for title */}
                    <Row>
                      <h1>{item.name}</h1>
                      <p>{item.type}</p>
                    </Row>

                    {/* Row for description */}

                    <Row justify="space-between">
                      <Col>
                        <Row>
                          <img alt="location-icon" src={location} />
                          <p>{item.location}</p>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <img alt="bedrooms" src={bed} />
                          <p>{item.beds}</p>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <img alt="tub" src={tub} />
                          <p>{item.baths}</p>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <img alt="square" src={square} />
                          <p>{item.area} sq meters</p>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  {/* Col 2 end */}
                  {/* col 3 for price */}
                  <Col span={2} offset={6}>
                    <Row>
                      <h2>₹{item.price}</h2>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default CardItem;
