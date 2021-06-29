
import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { updateUser} from "../js/actions/Actions";


const UpdateUser = ({user}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const dispatch = useDispatch();
const [name, setName] = useState(user.name);

const [email, setEmail] = useState(user.email);
const [password, setpassword] = useState(user.password);



    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
           
            name:name,
            email:email,
           password:password
        }
        dispatch(updateUser(newUser));
  
    handleClose();}




    
    return (
        <div>
            <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">email</label>
            <input
              type="text"
              className="form-control"
              value={email}

              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">password</label>
            <input
              type="text"
              className="form-control"
              value={password}

              onChange={(e) => setpassword(e.target.value)}
            />

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
        </div>
    )
    }

export default UpdateUser
