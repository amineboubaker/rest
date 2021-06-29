import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../js/actions/Actions";
import AddUser from "./AddUser";

const UserCard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => alert(`password:${el.password}`)}
          >
            Show Password
          </Button>
          <Button variant="danger" onClick={() => dispatch(deleteUser(el._id))}>
            Delete
          </Button>
          <AddUser user={el} isUpdated={true}/>
        </Card.Body> 
      </Card>
     
    </div>
  );
};

export default UserCard;
