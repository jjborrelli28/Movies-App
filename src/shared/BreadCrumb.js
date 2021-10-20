import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/esm/Container";

export const BreadCrumb = () => {
  return (
    <Container>
      <Breadcrumb className="p-4">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Most Popular</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};
