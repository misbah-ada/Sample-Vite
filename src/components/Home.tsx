import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "/l2.jpg";
import img3 from "/misbah.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Custom from "./Custom";
import { TitleProvider } from "../context/TitleContext";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <TitleProvider value="This is Home page">
          <Custom />
        </TitleProvider>
        <Row className="g-0">
          <Col md={6} className="position-relative ">
            <div className="position-absolute top-50 start-50 w-100 px-5 translate-middle  text-center text-warning ">
              <h2>HELLO This is a heading HELLO This is a heading </h2>
              <p>this is some sample text</p>
            </div>
            <img src={img1} className="w-100 h-100 object-fit-cover" />
          </Col>
          <Col md={6} className="position-relative ">
            <div className="position-absolute top-50 start-50 w-100 px-5 translate-middle text-warning text-md-end text-center">
              <h2>
                HELLO This is a heading HELLO This is a headingis a heading{" "}
              </h2>
              <p>this is some sample text</p>
            </div>
            <img src={img3} className="w-100 h-100 object-fit-cover" />
          </Col>
        </Row>

        <h1>THIS IS DUMMY CONTEt</h1>
      </Container>
    </HelmetProvider>
  );
}
export default Home;
