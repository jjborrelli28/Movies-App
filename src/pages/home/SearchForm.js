import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../types/types";

export const SearchForm = () => {
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
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name"
          value={value}
          onChange={handleInputChange}
        />
        <Button variant="primary" onClick={handleSubmit}>
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};
