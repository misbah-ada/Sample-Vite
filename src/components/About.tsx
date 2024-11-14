import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import Custom from "./Custom";

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container>
        <Custom title="This is About page" />
      </Container>
    </>
  );
}
export default About;
