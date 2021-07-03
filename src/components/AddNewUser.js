
import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addUser } from "../js/actions/Actions";

const AddNewUser = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
    const dispatch = useDispatch();
    const [name, setName] = useState( "");
  
    const [email, setEmail] = useState( "");
    const [password, setpassword] = useState( "");

    const addUsers = (e) => {
        e.preventDefault();
        dispatch(addUser({ name, email, password }));
        handleClose();
      };
  
    return (
        <div>
             <>
      <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              // value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="password" htmlFor="">Password</label>
            <input
              type="text"
              className="form-control"
              // value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
              variant="primary"
              onClick={ addUsers  }
            >
              Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
            
        </div>
    )
}

export default AddNewUser
