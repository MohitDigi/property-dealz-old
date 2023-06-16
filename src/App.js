import { Col, Layout, Row } from "antd";
// const { Header, Footer, Sider, Content } = Layout;
import Navbar from "./components/Navbar";
// import {  Content,Sider,Footer} from "antd";

import SortItem from "./components/SortItem";
import Card from "antd/es/card/Card";
import Map from "./components/Map";

const App = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      <Row >
        <Col span={12}>
          <Map />
        </Col>
      </Row>
      <Row>
        <SortItem />
      </Row>
      <Row>
        <Card />
      </Row>
    </>
  );
};

export default App;
