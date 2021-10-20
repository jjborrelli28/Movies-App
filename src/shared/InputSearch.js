import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../types/types";

export const InputSearch = () => {
  const { value } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const action = { type: types.SEARCH, payload: target.value };
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      const action = { type: types.SEARCH_URL, payload: value };
      dispatch(action);
    } else {
      const action = { type: types.DISCOVER_URL };
      dispatch(action);
    }
  };

  return (
    <div className="w-100 d-flex justify-content-end">
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
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};
