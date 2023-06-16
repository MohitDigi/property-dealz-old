import Navbar from "./components/Navbar";
import CardItem from "./components/CardItem";
// import ButtonTest from "./components/ButtonTest";

import { Col, Row } from "antd";
import Map from "./images/Maps@2x.png";
import SortItem from "./components/SortItem";
function App() {
  return (
    <>
      {/* 1st Row */}
      <Row>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>

      {/* 2nd Row */}
      <Row>
        <Col span={12}>
          <img
            src={Map}
            style={{
              width: "100%",
              height: "90vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Col>
        <Col
          span={12}
          style={{
            width: "100%",
            height: "90vh",
            padding: 20,
          }}
        >
          <SortItem/>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Col>
      </Row>
    </>
  );
}

export default App;
