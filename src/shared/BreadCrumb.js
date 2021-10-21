import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/esm/Container";
import { useSelector } from "react-redux";

export const BreadCrumb = () => {
  const { route, title } = useSelector((state) => state.route);

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        {route && <Breadcrumb.Item href={route}>{title}</Breadcrumb.Item>}
      </Breadcrumb>
      <hr style={{ heigth: "0.1rem" }} />
    </Container>
  );
};
