import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../js/actions/Actions";
import UpdateUser from "./UpdateUser";



const UserCard = ({ el }) => {
  const dispatch = useDispatch();



  return (
    <div>
      <Card className="card" style={{ width: "23rem" ,backgroundColor:"#fff5ab",borderRadius: '1em'}}>
      <p className="profil">{el.name[0].toUpperCase()}</p>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.email}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => alert(`password:${el.password}`)}
          >
            Show Password
          </Button>
          <Button className="btn"variant="danger" onClick={() => dispatch(deleteUser(el._id))}>
            Delete
          </Button>
          <UpdateUser el={el} />
     
             
   
          
        </Card.Body> 
      </Card>
      

     
     
    </div>
  );
};

export default UserCard;
