import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addUser, updateUser} from "../js/actions/Actions";
const AddUser = ({ user=null ,isUpdated=false}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const dispatch = useDispatch();
const [name, setName] = useState(user?user.name:"");

const [email, setEmail] = useState(user?user.email:"");
const [password, setpassword] = useState(user?user.password:"");

const addNewUser = (e) => {
  e.preventDefault();
dispatch(addUser({ name, email, password }))
  handleClose();}


  const updateNewUser = (e) => {
    e.preventDefault();
  dispatch(updateUser(user._id,{ name, email, password }))
  console.log((user._id))
    handleClose();}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isUpdated?"update":"ADD"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
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
            <Button variant="primary" onClick={isUpdated? updateNewUser:addNewUser}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddUser;
