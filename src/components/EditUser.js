import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

const EditUser = (props) => {
  const { users, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;
  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);
  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };
  const handlleInputChange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
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
            type="text"
            name="name"
            value={selectedUser.name}
            className="form-group"
            onChange={handlleInputChange}
          />
        </FormGroup>
        <Button type="submit" color="primary" className="m-3">
          Submit
        </Button>
        <Link component={Button} className="btn btn-danger" to="/">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
