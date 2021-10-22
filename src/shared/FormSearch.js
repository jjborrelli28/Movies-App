import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../types/types";
import { useHistory } from "react-router";

export const FormSearch = () => {
  const { value } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleInputChange = ({ target }) => {
    const action = { type: types.FORM, payload: target.value };
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      const action = { type: types.DISCOVER_URL };
      dispatch(action);
    } else {
      const action = { type: types.SEARCH_URL, payload: value };
      dispatch(action);
    }
    dispatch({ type: types.SEARCH, payload: value });
    dispatch({ type: types.TITLE_OFF });
    history.push("/");
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          type="search"
          className="mr-2"
          placeholder="Search by name"
          value={value}
          onChange={handleInputChange}
        />
        <Button variant="primary" onClick={handleSubmit}>
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};
