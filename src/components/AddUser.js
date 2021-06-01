import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name: name,
    };
    console.log(newUser);
    addUser(newUser);
    history.push("/");
  };
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="m-3"
        style={{ maxWidth: "40rem", alignItems: "center" }}
      >
        <FormGroup>
          <Label>Name:</Label>
          <Input
            placeholder="Enter Name"
            name="user"
            type="text"
            className="form-group"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" color="primary" className="m-3">
          Submit
        </Button>
        <Link component={Button} className="btn btn-danger" to={"/"}>
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddUser;
