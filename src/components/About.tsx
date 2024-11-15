import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Custom from "./Custom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TitleProvider } from "../context/TitleContext";

function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About</title>
      </Helmet>

      <Container>
        <TitleProvider value="This is About page">
          <Custom />
        </TitleProvider>
      </Container>
    </HelmetProvider>
  );
}
export default About;
