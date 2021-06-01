import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <div>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <div className="mr-0">
                <strong>{user.name}</strong>

                <Link className=" btn btn-success m-1" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button color="danger" onClick={() => removeUser(user.id)}>
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </div>
      ) : (
        <center>No Users</center>
      )}
    </ListGroup>
  );
};

export default UserList;
