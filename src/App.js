import Navbar from "./components/Navbar";
import SortItem from "./components/SortItem";
import Map from "./components/Map";
import { Col, Row } from "antd";
import Card from "antd/es/card/Card";
import CardItem from "./components/CardItem";

const App = () => {
  return (
    <>
    {/* Navbar */}
      <Row>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Map />
        </Col>
        <Col>
          <Row>
            <SortItem />
          </Row>
          <Row>
            <CardItem />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default App;
