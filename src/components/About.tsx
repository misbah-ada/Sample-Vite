import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container>
        <h1>THIS IS About PAGE</h1>
      </Container>
    </>
  );
}
export default About;
