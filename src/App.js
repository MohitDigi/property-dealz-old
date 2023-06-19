import Navbar from "./components/Navbar";
import SortItem from "./components/SortItem";
import Map from "./components/Map";
import { Col, Divider, Row } from "antd";
import styled from "styled-components"
import CardItem from "./components/CardItem";

const App = () => {
  return (
    <>
      <StyledRow>
        <Col span={24}>
          <Navbar />
        </Col>
      </StyledRow>
      <Divider />
      <Row>
        <StyledCol span={12}>
          <Map />
        </StyledCol>
        <Col span={12}>
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

const StyledRow = styled(Row)`
margin:1.5rem;
`
const StyledCol = styled(Col)`
height:100vh;
`
export default App;
